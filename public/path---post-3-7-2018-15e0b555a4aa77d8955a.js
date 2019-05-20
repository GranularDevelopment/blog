webpackJsonp([0x602787620eeb],{515:function(e,n){e.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-3-7-2018/index.md absPath of file >>> MarkdownRemark",html:'<h3>This post will walk you through a tutorial on how you can turn events into commands.</h3>\n<p>We will look into a Xamarin.Forms feature called behaviors, in conjunction with commands, which enables any Xamarin.Forms control to use data bindings to make method calls to a View Model. In this example our control is a WebView. We want to detect when the WebView is navigating (loading the page) to the page and when the WebView has navigated to the page (finished loading the page). <a href="https://github.com/brian-smith723/EventToCommandPattern">Source code</a></p>\n<h3>What are behaviors?</h3>\n<p>Behaviors let you add functionality to UI controls without having to create a subclass. Behaviors always involve some code because it is a class that derives from Behavior<T>. The first step is to derive a class from Behavior<T>. </p>\n<div class="gatsby-highlight">\n      <pre class="language-cs"><code class="language-cs">public class EventToCommandBehavior : BindableBehavior&lt;View&gt;\n    {\n        public static BindableProperty EventNameProperty =\n            BindableProperty.CreateAttached(&quot;EventName&quot;, typeof(string), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty CommandProperty =\n            BindableProperty.CreateAttached(&quot;Command&quot;, typeof(ICommand), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty CommandParameterProperty =\n            BindableProperty.CreateAttached(&quot;CommandParameter&quot;, typeof(object), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty EventArgsConverterProperty =\n            BindableProperty.CreateAttached(&quot;EventArgsConverter&quot;, typeof(IValueConverter), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty EventArgsConverterParameterProperty =\n            BindableProperty.CreateAttached(&quot;EventArgsConverterParameter&quot;, typeof(object), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        protected Delegate _handler;\n        private EventInfo _eventInfo;\n\n        public string EventName\n        {\n            get { return (string)GetValue(EventNameProperty); }\n            set { SetValue(EventNameProperty, value); }\n        }\n\n        public ICommand Command\n        {\n            get { return (ICommand)GetValue(CommandProperty); }\n            set { SetValue(CommandProperty, value); }\n        }\n\n        public object CommandParameter\n        {\n            get { return GetValue(CommandParameterProperty); }\n            set { SetValue(CommandParameterProperty, value); }\n        }\n\n        public IValueConverter EventArgsConverter\n        {\n            get { return (IValueConverter)GetValue(EventArgsConverterProperty); }\n            set { SetValue(EventArgsConverterProperty, value); }\n        }\n\n        public object EventArgsConverterParameter\n        {\n            get { return GetValue(EventArgsConverterParameterProperty); }\n            set { SetValue(EventArgsConverterParameterProperty, value); }\n        }\n\n        protected override void OnAttachedTo(View visualElement)\n        {\n            base.OnAttachedTo(visualElement);\n\n            var events = AssociatedObject.GetType().GetRuntimeEvents().ToArray();\n            if (events.Any())\n            {\n                _eventInfo = events.FirstOrDefault(e =&gt; e.Name == EventName);\n                if (_eventInfo == null)\n                    throw new ArgumentException(String.Format(&quot;EventToCommand: Can&#39;t find any event named &#39;{0}&#39; on attached type&quot;, EventName));\n\n                AddEventHandler(_eventInfo, AssociatedObject, OnFired);\n            }\n        }\n\n        protected override void OnDetachingFrom(View view)\n        {\n            if (_handler != null)\n                _eventInfo.RemoveEventHandler(AssociatedObject, _handler);\n\n            base.OnDetachingFrom(view);\n        }\n\n        private void AddEventHandler(EventInfo eventInfo, object item, Action&lt;object, EventArgs&gt; action)\n        {\n            var eventParameters = eventInfo.EventHandlerType\n                .GetRuntimeMethods().First(m =&gt; m.Name == &quot;Invoke&quot;)\n                .GetParameters()\n                .Select(p =&gt; Expression.Parameter(p.ParameterType))\n                .ToArray();\n\n            var actionInvoke = action.GetType()\n                .GetRuntimeMethods().First(m =&gt; m.Name == &quot;Invoke&quot;);\n\n            _handler = Expression.Lambda(\n                eventInfo.EventHandlerType,\n                Expression.Call(Expression.Constant(action), actionInvoke, eventParameters[0], eventParameters[1]),\n                eventParameters\n            )\n            .Compile();\n\n            eventInfo.AddEventHandler(item, _handler);\n        }\n\n        private void OnFired(object sender, EventArgs eventArgs)\n        {\n            if (Command == null)\n                return;\n\n            var parameter = CommandParameter;\n\n            if (eventArgs != null &amp;&amp; eventArgs != EventArgs.Empty)\n            {\n                parameter = eventArgs;\n\n                if (EventArgsConverter != null)\n                {\n                    parameter = EventArgsConverter.Convert(eventArgs, typeof(object), EventArgsConverterParameter, CultureInfo.CurrentUICulture);\n                }\n            }\n\n            if (Command.CanExecute(parameter))\n            {\n                Command.Execute(parameter);\n            }\n        }\n    }</code></pre>\n      </div>\n<p>Let’s break this apart. Our class is EventToCommandBehavior and we inherit from Behavior<T>.</p>\n<h4>Properties</h4>\n<p>The Behavior<T> class derives from the Behavior class, which derives from BindableObject. This means we can create our own bindable properties. Bindable properties serve as source properties for data bindings. This means you can use behaviors to modify a particular property. </p>\n<div class="gatsby-highlight">\n      <pre class="language-cs"><code class="language-cs"> public static BindableProperty EventNameProperty =\n            BindableProperty.CreateAttached(&quot;EventName&quot;, typeof(string), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty CommandProperty =\n            BindableProperty.CreateAttached(&quot;Command&quot;, typeof(ICommand), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty CommandParameterProperty =\n            BindableProperty.CreateAttached(&quot;CommandParameter&quot;, typeof(object), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty EventArgsConverterProperty =\n            BindableProperty.CreateAttached(&quot;EventArgsConverter&quot;, typeof(IValueConverter), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n        public static BindableProperty EventArgsConverterParameterProperty =\n            BindableProperty.CreateAttached(&quot;EventArgsConverterParameter&quot;, typeof(object), typeof(EventToCommandBehavior), null,\n                BindingMode.OneWay);\n\n\n        public string EventName\n        {\n            get { return (string)GetValue(EventNameProperty); }\n            set { SetValue(EventNameProperty, value); }\n        }\n\n        public ICommand Command\n        {\n            get { return (ICommand)GetValue(CommandProperty); }\n            set { SetValue(CommandProperty, value); }\n        }\n\n        public object CommandParameter\n        {\n            get { return GetValue(CommandParameterProperty); }\n            set { SetValue(CommandParameterProperty, value); }\n        }\n\n        public IValueConverter EventArgsConverter\n        {\n            get { return (IValueConverter)GetValue(EventArgsConverterProperty); }\n            set { SetValue(EventArgsConverterProperty, value); }\n        }\n\n        public object EventArgsConverterParameter\n        {\n            get { return GetValue(EventArgsConverterParameterProperty); }\n            set { SetValue(EventArgsConverterParameterProperty, value); }\n        }</code></pre>\n      </div>\n<p>Each BindableProperty above will be implemented in XAML and you can decide how you would like the BindableProperty to interact with the UI. Here is a snippet of the XAML.</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code class="language-xml"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">behaviors:</span>EventToCommandBehavior</span> \n  <span class="token attr-name">EventName</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Navigating<span class="token punctuation">"</span></span>\n  <span class="token attr-name">EventArgsConverter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{StaticResource WebNavigatingEventArgsConverter}<span class="token punctuation">"</span></span>\n  <span class="token attr-name">Command</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{Binding NavigateCommand}<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>Here we implemented three out of the five bindable properties.</p>\n<h4>Override OnAttachedTo</h4>\n<p>The OnAttachedTo method is called when the behavior is attached to a particular visual object (in our case, a view). The OnDetachingFrom is called when behavior is removed from the visual object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-cs"><code class="language-cs">  protected override void OnAttachedTo(View visualElement)\n        {\n            base.OnAttachedTo(visualElement);\n\n            var events = AssociatedObject.GetType().GetRuntimeEvents().ToArray();\n            if (events.Any())\n            {\n                _eventInfo = events.FirstOrDefault(e =&gt; e.Name == EventName);\n                if (_eventInfo == null)\n                    throw new ArgumentException(String.Format(&quot;EventToCommand: Can&#39;t find any event named &#39;{0}&#39; on attached type&quot;, EventName));\n\n                AddEventHandler(_eventInfo, AssociatedObject, OnFired);\n            }\n        }\n\n        protected override void OnDetachingFrom(View view)\n        {\n            if (_handler != null)\n                _eventInfo.RemoveEventHandler(AssociatedObject, _handler);\n\n            base.OnDetachingFrom(view);\n        }</code></pre>\n      </div>\n<h4>Events</h4>\n<p>The OnAttachedTo adds the custom event handler. We are listening to WebView Navigating and Navigated events. If we were using behaviors on an Entry control, we could do this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-cs"><code class="language-cs">...\nbase.OnAttachedTo(visualElement);\nvisualElement.TextChanged += OnEntryTextChange;\n...</code></pre>\n      </div>\n<p>The OnDetachingFrom is used to remove the event handler.</p>\n<h4>OnFired</h4>\n<p>The OnFired method is used for the command. </p>\n<h3>Converters WebNavigatingEventsArgs</h3>\n<p>The converter property is used to return the correct response if the event argument is a WebNavigatingEventArgs. Here we want to know what URL we are going to.</p>\n<div class="gatsby-highlight">\n      <pre class="language-cs"><code class="language-cs">public class WebNavigatingEventArgsConverter : IValueConverter\n    {\n        public object Convert(object value, Type targetType, object parameter, CultureInfo culture)\n        {\n            var eventArgs = value as WebNavigatingEventArgs;\n            if (eventArgs == null)\n                throw new ArgumentException(&quot;Expected WebNavigatingEventArgs as value&quot;, &quot;value&quot;);\n\n            return eventArgs.Url;\n        }\n\n        public object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)\n        {\n            throw new NotImplementedException();\n        }\n    }</code></pre>\n      </div>\n<h3>Behavior Functionality</h3>\n<p>The purpose of the behavior is to execute a command when the WebNavigatingEventsArgs is fired. The WebNavigatingEventsArgs is executed in response to navigating to a page. Then the converter referenced through the Converter property, returns the URL. The method then executes the command, referenced through the Command property, passing the URL as a parameter to the command. </p>\n<h3>In Conclusion</h3>\n<p>In the context of commanding, behaviors are a useful approach for connecting a control to a command. In addition, they can also be used to associate commands with controls that were not designed to interact with commands. For example, they can be used to invoke a command in response to an event firing. Therefore, behaviors address many of the same scenarios as command-enabled controls, while providing a greater degree of flexibility.</p>',frontmatter:{title:"Xamarin Events into Commands",date:"March 07, 2018"}}},pathContext:{slug:"/post-3-7-2018/",previous:{fields:{slug:"/post-2-26-2018/"},frontmatter:{title:"C# Async Guidelines"}},next:{fields:{slug:"/post-4-24-2019/"},frontmatter:{title:"Configuring Spring Boot Application Properties"}}}}}});
//# sourceMappingURL=path---post-3-7-2018-15e0b555a4aa77d8955a.js.map