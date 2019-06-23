webpackJsonp([0xe2fc0e9abe04],{509:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-1-13-2019/index.md absPath of file >>> MarkdownRemark",html:'<h3>How to submit a form when enter(return) is pressed in Xamarin Forms?</h3>\n<p>In this tutorial we will use the Event To Command Pattern to keep the view and viewmodel decoupled. The Completed event is called when enter is pressed from the keyboard.</p>\n<h2>Here is the view</h2>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token operator">&lt;</span><span class="token class-name">ContentPage</span> xmlns<span class="token operator">=</span><span class="token string">"http://xamarin.com/schemas/2014/forms"</span> \n             xmlns<span class="token punctuation">:</span>x<span class="token operator">=</span><span class="token string">"http://schemas.microsoft.com/winfx/2009/xaml"</span> \n             xmlns<span class="token punctuation">:</span>behaviors<span class="token operator">=</span><span class="token string">"clr-namespace:Project.Behaviors;assembly=Project"</span>\n             xmlns<span class="token punctuation">:</span>converters<span class="token operator">=</span><span class="token string">"clr-namespace:Project.Converters; assembly=Project"</span> <span class="token operator">></span>\n    <span class="token operator">&lt;</span>ContentPage<span class="token punctuation">.</span>Resources<span class="token operator">></span>\n        <span class="token operator">&lt;</span>ResourceDictionary<span class="token operator">></span>\n            <span class="token operator">&lt;</span>converters<span class="token punctuation">:</span><span class="token class-name">CompletedEventArgsConverter</span> x<span class="token punctuation">:</span>Key<span class="token operator">=</span><span class="token string">"CompletedEventArgsConverter"</span> <span class="token operator">/</span><span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ResourceDictionary<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ContentPage<span class="token punctuation">.</span>Resources<span class="token operator">></span>\n        <span class="token operator">&lt;</span>StackLayout <span class="token operator">></span> \n        <span class="token operator">&lt;</span><span class="token class-name">Entry</span> \n            Text<span class="token operator">=</span><span class="token string">"{Binding EntryText}"</span> <span class="token operator">></span>\n            <span class="token operator">&lt;</span>Entry<span class="token punctuation">.</span>Behaviors<span class="token operator">></span>\n            <span class="token operator">&lt;</span>behaviors<span class="token punctuation">:</span><span class="token class-name">EventToCommandBehavior</span>\n                            EventName<span class="token operator">=</span><span class="token string">"Completed"</span>\n                            EventArgsConverter<span class="token operator">=</span><span class="token string">"{StaticResource CompletedEventArgsConverter}"</span>\n                            Command<span class="token operator">=</span><span class="token string">"{Binding SignInCommand}"</span> <span class="token operator">/</span><span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>Entry<span class="token punctuation">.</span>Behaviors<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>Entry<span class="token operator">></span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>StackLayout<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>ContentPage<span class="token operator">></span></code></pre>\n      </div>\n<p>Here is the converter</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CompletedEventArgsConverter</span> <span class="token punctuation">:</span> <span class="token class-name">IValueConverter</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token keyword">object</span> <span class="token function">Convert</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token class-name">Type</span> targetType<span class="token punctuation">,</span> <span class="token keyword">object</span> parameter<span class="token punctuation">,</span> <span class="token class-name">CultureInfo</span> culture<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> eventArgs <span class="token operator">=</span> <span class="token keyword">value</span> <span class="token keyword">as</span> EventArgs<span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>eventArgs <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentException</span><span class="token punctuation">(</span><span class="token string">"Expected EventArgs as value"</span><span class="token punctuation">,</span> <span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">return</span> eventArgs<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">object</span> <span class="token function">ConvertBack</span><span class="token punctuation">(</span><span class="token keyword">object</span> <span class="token keyword">value</span><span class="token punctuation">,</span> <span class="token class-name">Type</span> targetType<span class="token punctuation">,</span> <span class="token keyword">object</span> parameter<span class="token punctuation">,</span> <span class="token class-name">CultureInfo</span> culture<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NotImplementedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Here is the behavior</p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EventToCommandBehavior</span> <span class="token punctuation">:</span> <span class="token class-name">BindableBehavior</span><span class="token operator">&lt;</span>Xamarin<span class="token punctuation">.</span>Forms<span class="token punctuation">.</span>View<span class="token operator">></span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BindableProperty</span> EventNameProperty <span class="token operator">=</span>\n            BindableProperty<span class="token punctuation">.</span><span class="token function">CreateAttached</span><span class="token punctuation">(</span><span class="token string">"EventName"</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>EventToCommandBehavior<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                                            BindingMode<span class="token punctuation">.</span>OneWay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BindableProperty</span> CommandProperty <span class="token operator">=</span>    \n            BindableProperty<span class="token punctuation">.</span><span class="token function">CreateAttached</span><span class="token punctuation">(</span><span class="token string">"Command"</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>ICommand<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>EventToCommandBehavior<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                                            BindingMode<span class="token punctuation">.</span>OneWay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BindableProperty</span> CommandParameterProperty <span class="token operator">=</span>\n            BindableProperty<span class="token punctuation">.</span><span class="token function">CreateAttached</span><span class="token punctuation">(</span><span class="token string">"CommandParameter"</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">object</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>EventToCommandBehavior<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                                            BindingMode<span class="token punctuation">.</span>OneWay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BindableProperty</span> EventArgsConverterProperty <span class="token operator">=</span>\n            BindableProperty<span class="token punctuation">.</span><span class="token function">CreateAttached</span><span class="token punctuation">(</span><span class="token string">"EventArgsConverter"</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>IValueConverter<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>EventToCommandBehavior<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                                            BindingMode<span class="token punctuation">.</span>OneWay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">BindableProperty</span> EventArgsConverterParameterProperty <span class="token operator">=</span>\n            BindableProperty<span class="token punctuation">.</span><span class="token function">CreateAttached</span><span class="token punctuation">(</span><span class="token string">"EventArgsConverterParameter"</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">object</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span>EventToCommandBehavior<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                                            BindingMode<span class="token punctuation">.</span>OneWay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">protected</span> <span class="token class-name">Delegate</span> _handler<span class="token punctuation">;</span>\n        <span class="token keyword">private</span> <span class="token class-name">EventInfo</span> _eventInfo<span class="token punctuation">;</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">string</span> EventName\n        <span class="token punctuation">{</span>\n            <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">string</span><span class="token punctuation">)</span><span class="token function">GetValue</span><span class="token punctuation">(</span>EventNameProperty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n            <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetValue</span><span class="token punctuation">(</span>EventNameProperty<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token class-name">ICommand</span> Command\n        <span class="token punctuation">{</span>\n            <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>ICommand<span class="token punctuation">)</span><span class="token function">GetValue</span><span class="token punctuation">(</span>CommandProperty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n            <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetValue</span><span class="token punctuation">(</span>CommandProperty<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">object</span> CommandParameter\n        <span class="token punctuation">{</span>\n            <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">GetValue</span><span class="token punctuation">(</span>CommandParameterProperty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n            <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetValue</span><span class="token punctuation">(</span>CommandParameterProperty<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token class-name">IValueConverter</span> EventArgsConverter\n        <span class="token punctuation">{</span>\n            <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>IValueConverter<span class="token punctuation">)</span><span class="token function">GetValue</span><span class="token punctuation">(</span>EventArgsConverterProperty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n            <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetValue</span><span class="token punctuation">(</span>EventArgsConverterProperty<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">public</span> <span class="token keyword">object</span> EventArgsConverterParameter\n        <span class="token punctuation">{</span>\n            <span class="token keyword">get</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token function">GetValue</span><span class="token punctuation">(</span>EventArgsConverterParameterProperty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n            <span class="token keyword">set</span> <span class="token punctuation">{</span> <span class="token function">SetValue</span><span class="token punctuation">(</span>EventArgsConverterParameterProperty<span class="token punctuation">,</span> <span class="token keyword">value</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">void</span> <span class="token function">OnAttachedTo</span><span class="token punctuation">(</span><span class="token class-name">Xamarin<span class="token punctuation">.</span>Forms<span class="token punctuation">.</span>View</span> visualElement<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnAttachedTo</span><span class="token punctuation">(</span>visualElement<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">var</span> events <span class="token operator">=</span> AssociatedObject<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetRuntimeEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>events<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                _eventInfo <span class="token operator">=</span> events<span class="token punctuation">.</span><span class="token function">FirstOrDefault</span><span class="token punctuation">(</span>e <span class="token operator">=</span><span class="token operator">></span> e<span class="token punctuation">.</span>Name <span class="token operator">==</span> EventName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>_eventInfo <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ArgumentException</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span><span class="token string">"EventToCommand: Can\'t find any event named \'{0}\' on attached type"</span><span class="token punctuation">,</span> EventName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token function">AddEventHandler</span><span class="token punctuation">(</span>_eventInfo<span class="token punctuation">,</span> AssociatedObject<span class="token punctuation">,</span> OnFired<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">protected</span> <span class="token keyword">override</span> <span class="token keyword">void</span> <span class="token function">OnDetachingFrom</span><span class="token punctuation">(</span><span class="token class-name">Xamarin<span class="token punctuation">.</span>Forms<span class="token punctuation">.</span>View</span> view<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>_handler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n                _eventInfo<span class="token punctuation">.</span><span class="token function">RemoveEventHandler</span><span class="token punctuation">(</span>AssociatedObject<span class="token punctuation">,</span> _handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">base</span><span class="token punctuation">.</span><span class="token function">OnDetachingFrom</span><span class="token punctuation">(</span>view<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">AddEventHandler</span><span class="token punctuation">(</span><span class="token class-name">EventInfo</span> eventInfo<span class="token punctuation">,</span> <span class="token keyword">object</span> item<span class="token punctuation">,</span> Action<span class="token operator">&lt;</span><span class="token keyword">object</span><span class="token punctuation">,</span> EventArgs<span class="token operator">></span> action<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> eventParameters <span class="token operator">=</span> eventInfo<span class="token punctuation">.</span>EventHandlerType\n                                           <span class="token punctuation">.</span><span class="token function">GetRuntimeMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>m <span class="token operator">=</span><span class="token operator">></span> m<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">"Invoke"</span><span class="token punctuation">)</span>\n                                           <span class="token punctuation">.</span><span class="token function">GetParameters</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                                           <span class="token punctuation">.</span><span class="token function">Select</span><span class="token punctuation">(</span>p <span class="token operator">=</span><span class="token operator">></span> Expression<span class="token punctuation">.</span><span class="token function">Parameter</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>ParameterType<span class="token punctuation">)</span><span class="token punctuation">)</span>\n                                           <span class="token punctuation">.</span><span class="token function">ToArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">var</span> actionInvoke <span class="token operator">=</span> action<span class="token punctuation">.</span><span class="token function">GetType</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                                     <span class="token punctuation">.</span><span class="token function">GetRuntimeMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">First</span><span class="token punctuation">(</span>m <span class="token operator">=</span><span class="token operator">></span> m<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">"Invoke"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            _handler <span class="token operator">=</span> Expression<span class="token punctuation">.</span><span class="token function">Lambda</span><span class="token punctuation">(</span>\n                eventInfo<span class="token punctuation">.</span>EventHandlerType<span class="token punctuation">,</span>\n                Expression<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span>Expression<span class="token punctuation">.</span><span class="token function">Constant</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span><span class="token punctuation">,</span> actionInvoke<span class="token punctuation">,</span> eventParameters<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> eventParameters<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n                eventParameters\n            <span class="token punctuation">)</span>\n                                 <span class="token punctuation">.</span><span class="token function">Compile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            eventInfo<span class="token punctuation">.</span><span class="token function">AddEventHandler</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> _handler<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">OnFired</span><span class="token punctuation">(</span><span class="token keyword">object</span> sender<span class="token punctuation">,</span> <span class="token class-name">EventArgs</span> eventArgs<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>Command <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n                <span class="token keyword">return</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">var</span> parameter <span class="token operator">=</span> CommandParameter<span class="token punctuation">;</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>eventArgs <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> eventArgs <span class="token operator">!=</span> EventArgs<span class="token punctuation">.</span>Empty<span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                parameter <span class="token operator">=</span> eventArgs<span class="token punctuation">;</span>\n\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>EventArgsConverter <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>\n                <span class="token punctuation">{</span>\n                    parameter <span class="token operator">=</span> EventArgsConverter<span class="token punctuation">.</span><span class="token function">Convert</span><span class="token punctuation">(</span>eventArgs<span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token keyword">object</span><span class="token punctuation">)</span><span class="token punctuation">,</span> EventArgsConverterParameter<span class="token punctuation">,</span> CultureInfo<span class="token punctuation">.</span>CurrentUICulture<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>Command<span class="token punctuation">.</span><span class="token function">CanExecute</span><span class="token punctuation">(</span>parameter<span class="token punctuation">)</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                Command<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span>parameter<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<h2>Thats it! Now your user can submit a form by pressing enter on the keyboard.</h2>',
frontmatter:{title:"Xamarin Forms Keyboard Enter Command",date:"January 13, 2019"}}},pathContext:{slug:"/post-1-13-2019/",previous:{fields:{slug:"/post-11-14-2018/"},frontmatter:{title:"Xamarin Forms Query Android Contacts' Company"}},next:{fields:{slug:"/post-2-28-2019/"},frontmatter:{title:"Xamarin Forms iOS renewable subscriptions In-App Purchasing"}}}}}});
//# sourceMappingURL=path---post-1-13-2019-fc2b9bf0599ddd59a990.js.map