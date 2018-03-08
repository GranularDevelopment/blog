---
title: Xamarin Events into Commands 
date: "2018-03-07T22:12:03.284Z"
---
### This post will walk you through a tutorial on how you can turn events into commands.
We will look into a Xamarin.Forms feature called behaviors, in conjunction with commands, which enables any Xamarin.Forms control to use data bindings to make method calls to a View Model. In this example our control is a WebView. We want to detect when the WebView is navigating (loading the page) to the page and when the WebView has navigated to the page (finished loading the page). [Source code](https://github.com/brian-smith723/EventToCommandPattern)

### What are behaviors?
Behaviors let you add functionality to UI controls without having to create a subclass. Behaviors always involve some code because it is a class that derives from Behavior<T>. The first step is to derive a class from Behavior<T>. 

```cs
public class EventToCommandBehavior : BindableBehavior<View>
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

        protected override void OnAttachedTo(View visualElement)
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

        protected override void OnDetachingFrom(View view)
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

Let's break this apart. Our class is EventToCommandBehavior and we inherit from Behavior<T>.

#### Properties
The Behavior<T> class derives from the Behavior class, which derives from BindableObject. This means we can create our own bindable properties. Bindable properties serve as source properties for data bindings. This means you can use behaviors to modify a particular property. 

```cs
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


```

Each BindableProperty above will be implemented in XAML and you can decide how you would like the BindableProperty to interact with the UI. Here is a snippet of the XAML.

```xml
<behaviors:EventToCommandBehavior 
  EventName="Navigating"
  EventArgsConverter="{StaticResource WebNavigatingEventArgsConverter}"
  Command="{Binding NavigateCommand}" />
```
Here we implemented three out of the five bindable properties.

#### Override OnAttachedTo

The OnAttachedTo method is called when the behavior is attached to a particular visual object (in our case, a view). The OnDetachingFrom is called when behavior is removed from the visual object.

```cs
  protected override void OnAttachedTo(View visualElement)
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

        protected override void OnDetachingFrom(View view)
        {
            if (_handler != null)
                _eventInfo.RemoveEventHandler(AssociatedObject, _handler);

            base.OnDetachingFrom(view);
        }
```

#### Events
The OnAttachedTo adds the custom event handler. We are listening to WebView Navigating and Navigated events. If we were using behaviors on an Entry control, we could do this:

```cs
...
base.OnAttachedTo(visualElement);
visualElement.TextChanged += OnEntryTextChange;
...
```

The OnDetachingFrom is used to remove the event handler.

#### OnFired
The OnFired method is used for the command. 

### Converters WebNavigatingEventsArgs
The converter property is used to return the correct response if the event argument is a WebNavigatingEventArgs. Here we want to know what URL we are going to.

```cs
public class WebNavigatingEventArgsConverter : IValueConverter
    {
        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            var eventArgs = value as WebNavigatingEventArgs;
            if (eventArgs == null)
                throw new ArgumentException("Expected WebNavigatingEventArgs as value", "value");

            return eventArgs.Url;
        }

        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
```

### Behavior Functionality
The purpose of the behavior is to execute a command when the WebNavigatingEventsArgs is fired. The WebNavigatingEventsArgs is executed in response to navigating to a page. Then the converter referenced through the Converter property, returns the URL. The method then executes the command, referenced through the Command property, passing the URL as a parameter to the command. 


###In Conclusion
In the context of commanding, behaviors are a useful approach for connecting a control to a command. In addition, they can also be used to associate commands with controls that were not designed to interact with commands. For example, they can be used to invoke a command in response to an event firing. Therefore, behaviors address many of the same scenarios as command-enabled controls, while providing a greater degree of flexibility.
