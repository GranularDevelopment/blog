---
title: Xamarin Forms Keyboard Enter Command 
date: "2019-01-13T04:12:03.284Z"
---

### How to submit a form when enter(return) is pressed in Xamarin Forms?

In this tutorial we will use the Event To Command Pattern to keep the view and viewmodel decoupled. The Completed event is called when enter is pressed from the keyboard.


## Here is the view
``` csharp

<ContentPage xmlns="http://xamarin.com/schemas/2014/forms" 
             xmlns:x="http://schemas.microsoft.com/winfx/2009/xaml" 
             xmlns:behaviors="clr-namespace:Project.Behaviors;assembly=Project"
             xmlns:converters="clr-namespace:Project.Converters; assembly=Project" >
    <ContentPage.Resources>
        <ResourceDictionary>
            <converters:CompletedEventArgsConverter x:Key="CompletedEventArgsConverter" />
        </ResourceDictionary>
    </ContentPage.Resources>
        <StackLayout > 
        <Entry 
            Text="{Binding EntryText}" >
            <Entry.Behaviors>
            <behaviors:EventToCommandBehavior
                            EventName="Completed"
                            EventArgsConverter="{StaticResource CompletedEventArgsConverter}"
                            Command="{Binding SignInCommand}" />
            </Entry.Behaviors>
            </Entry>
        </StackLayout>
</ContentPage>

```

Here is the converter

``` csharp
public class CompletedEventArgsConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            var eventArgs = value as EventArgs;
            if (eventArgs == null)
                throw new ArgumentException("Expected EventArgs as value", "value");

            return eventArgs;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
```

Here is the behavior

``` csharp
public class EventToCommandBehavior : BindableBehavior<Xamarin.Forms.View>
    {
        public static BindableProperty EventNameProperty =
            BindableProperty.CreateAttached("EventName", typeof(string), typeof(EventToCommandBehavior), null,
                                            BindingMode.OneWay);

        public static BindableProperty CommandProperty =    
            BindableProperty.CreateAttached("Command", typeof(ICommand), typeof(EventToCommandBehavior), null,
                                            BindingMode.OneWay);

        public static BindableProperty CommandParameterProperty =
            BindableProperty.CreateAttached("CommandParameter", typeof(object), typeof(EventToCommandBehavior), null,
                                            BindingMode.OneWay);

        public static BindableProperty EventArgsConverterProperty =
            BindableProperty.CreateAttached("EventArgsConverter", typeof(IValueConverter), typeof(EventToCommandBehavior), null,
                                            BindingMode.OneWay);

        public static BindableProperty EventArgsConverterParameterProperty =
            BindableProperty.CreateAttached("EventArgsConverterParameter", typeof(object), typeof(EventToCommandBehavior), null,
                                            BindingMode.OneWay);

        protected Delegate _handler;
        private EventInfo _eventInfo;

        public string EventName
        {
            get { return (string)GetValue(EventNameProperty); }
            set { SetValue(EventNameProperty, value); }
        }

        public ICommand Command
        {
            get { return (ICommand)GetValue(CommandProperty); }
            set { SetValue(CommandProperty, value); }
        }

        public object CommandParameter
        {
            get { return GetValue(CommandParameterProperty); }
            set { SetValue(CommandParameterProperty, value); }
        }

        public IValueConverter EventArgsConverter
        {
            get { return (IValueConverter)GetValue(EventArgsConverterProperty); }
            set { SetValue(EventArgsConverterProperty, value); }
        }

        public object EventArgsConverterParameter
        {
            get { return GetValue(EventArgsConverterParameterProperty); }
            set { SetValue(EventArgsConverterParameterProperty, value); }
        }

        protected override void OnAttachedTo(Xamarin.Forms.View visualElement)
        {
            base.OnAttachedTo(visualElement);

            var events = AssociatedObject.GetType().GetRuntimeEvents().ToArray();
            if (events.Any())
            {
                _eventInfo = events.FirstOrDefault(e => e.Name == EventName);
                if (_eventInfo == null)
                    throw new ArgumentException(String.Format("EventToCommand: Can't find any event named '{0}' on attached type", EventName));

                AddEventHandler(_eventInfo, AssociatedObject, OnFired);
            }
        }

        protected override void OnDetachingFrom(Xamarin.Forms.View view)
        {
            if (_handler != null)
                _eventInfo.RemoveEventHandler(AssociatedObject, _handler);

            base.OnDetachingFrom(view);
        }

        private void AddEventHandler(EventInfo eventInfo, object item, Action<object, EventArgs> action)
        {
            var eventParameters = eventInfo.EventHandlerType
                                           .GetRuntimeMethods().First(m => m.Name == "Invoke")
                                           .GetParameters()
                                           .Select(p => Expression.Parameter(p.ParameterType))
                                           .ToArray();

            var actionInvoke = action.GetType()
                                     .GetRuntimeMethods().First(m => m.Name == "Invoke");

            _handler = Expression.Lambda(
                eventInfo.EventHandlerType,
                Expression.Call(Expression.Constant(action), actionInvoke, eventParameters[0], eventParameters[1]),
                eventParameters
            )
                                 .Compile();

            eventInfo.AddEventHandler(item, _handler);
        }

        private void OnFired(object sender, EventArgs eventArgs)
        {
            if (Command == null)
                return;

            var parameter = CommandParameter;

            if (eventArgs != null && eventArgs != EventArgs.Empty)
            {
                parameter = eventArgs;

                if (EventArgsConverter != null)
                {
                    parameter = EventArgsConverter.Convert(eventArgs, typeof(object), EventArgsConverterParameter, CultureInfo.CurrentUICulture);
                }
            }

            if (Command.CanExecute(parameter))
            {
                Command.Execute(parameter);
            }
        }
    }
```

## Thats it! Now your user can submit a form by pressing enter on the keyboard.