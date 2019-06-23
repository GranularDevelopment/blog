webpackJsonp([79190079680757],{514:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-2-28-2019/index.md absPath of file >>> MarkdownRemark",html:'<h3>How to pass the Apple Store review.</h3>\n<p>Implementing renewable subscriptions can be very frustrating the first time you do it. I found a lot of tutorials on how to write the code to implement In-App Purchasing but not many tutorials explained the Apple Store review. In this tutorial I will help you to avoid the common pitfalls and to get your app to pass the Apple Store Review.</p>\n<p>Implementing renewable subscriptions can be very frustrating the first time you do it. I found a lot of tutorials on how to write the code to implement In-App Purchasing but not many tutorials explained the Apple Store review. In this tutorial I will help you to avoid common pitfalls and to get your app to pass the Apple Store Review.</p>\n<p>If you are looking for a tutorial on how implement the code behind, please checkout this tutorial.\n<a href="https://blog.xamarin.com/integrating-in-app-purchases-in-mobile-apps/">https://blog.xamarin.com/integrating-in-app-purchases-in-mobile-apps/</a></p>\n<p>From this  point on, I assume you have implemented the code behind. If not please refer to the link above.</p>\n<h4>In-App Purchases:</h4>\n<p><strong>Step One</strong></p>\n<p>Make sure you fill out the review information and add the In-App Purchases to your App, so the In-App Purchases can be reviewed and approved. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-8a98d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 34.72840605520926%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAqUlEQVQoz6WPQQqCQBSG37HceIS5h9hO5hgGUQQtXEVFtHfnMYKO0OjCUUbQcdA/pyAiaJHzwQff2zzeo6ZpYFVKwRiDcRzffvI9/4L2hxOWqw3W2x2O5wviOEYYLhBF0d8mSQLqug5aa/R9D9u+74OIZskYA92qCllRIMtz2HZeKOsaopTIpUQ5dRAE8Dxvlpzz18tta22fL7swDAPoOl2W3gVSIWDblQfBJoo1/f02ogAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-fb8a0.png"\n        srcset="/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-1a291.png 148w,\n/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-2bc4a.png 295w,\n/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-fb8a0.png 590w,\n/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-526de.png 885w,\n/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-fa2eb.png 1180w,\n/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-08f6a.png 1770w,\n/static/review-0b35f0a9190ce2c0fc9babdcbf64fc10-8a98d.png 2246w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>I forgot to to do this and I received this error:</p>\n<blockquote>\n<p>Guideline 3.1.1 - Business - Payments - In-App Purchase</p>\n</blockquote>\n<blockquote>\n<p>We noticed that your app offers a subscription with a mechanism other than the in-app purchase </p>\n</blockquote>\n<p>That error was completely misleading and caused me to waste a lot of time. </p>\n<p><strong>Step Two</strong></p>\n<p>Next, you need to add the App store disclaimer and your privacy and terms and conditions in the  the purchase flow without requiring additional action from the user (such as opening a link).</p>\n<p>You need to add <strong>ALL</strong> of this text:</p>\n<ul>\n<li>Title of publication or service</li>\n<li>Length of subscription (time period and content or services provided during each subscription period)</li>\n<li>Price of subscription, and price per unit if appropriate</li>\n<li>Payment will be charged to iTunes Account at confirmation of purchase</li>\n<li>Subscription automatically renews unless auto-renew is turned off at least 24-hours before the end of the current period</li>\n<li>Account will be charged for renewal within 24-hours prior to the end of the current period, and identify the cost of the renewal</li>\n<li>Subscriptions may be managed by the user and auto-renewal may be turned off by going to the user’s Account Settings after purchase\nAny unused portion of a free trial period, if offered, will be forfeited when the user purchases a subscription to that publication, where applicable</li>\n</ul>\n<p>And you need to <strong>link</strong> your <strong>privacy</strong> and <strong>terms of use</strong>.</p>\n<p>Here is an example:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-d1072.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.77777777777777%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsSAAALEgHS3X78AAADfklEQVRIx61U6WpTURC+f8TqK4hFaW3pAnazpJVSrUtRrBTrD/3luwhW8RnElxAEwaYt3WxMumRpkq7Zt5t9a5Ym43yH3EjJJrleGObcOd/9zpy5843UOzhKPQOjdKd/mPqHNDQwPFFj3X1DYr+HsfX2YX13x+lGZxdJYxMPaWrmOd27/4gGRyZrgJqpJzQ2OSM8rBGhYtLk9Cw9fjZPs3OvaUTzoAYwMf2UFt68o7lXb2n2xUJrQqvNTtrlFVpeWVVtv/UGkgKBAGWzWWr0lEpluiiVhG/1OByO1oSBoEzff2hpdf0X+fxB9YTJZJLi8TiFIxHhVROm02mxn6p4VYTFYpGvHCSH00Uer5dcbjclOOO2CAuFAtfMT3I4TLIsi7XX5xM+kUg2J0xnMvSZXz6dnVXt4+kpLZ6cCK+sP7At8vr94eElLMyUSv0ljHJ9riwt1djNtTXq3tigzoq/tb5OvZub1FEH+4VLUiWMNSC8ptXS9Ypd5feOSqwe9qtCGAqFKMx1inLKERWW4rKdcjmkWCxGOzs7tLe3p9qOj4+bt00+n+dW8VIkEqVgSKZYLE7nuVz7fYiPQWgyW0mn5yyMloYt889KUfrP6XKRn7GqlILmTnHBoWFIMJVKizK0TXhxURJSQ+1iTBqJRun8/Lw9wny+IPQbYtkFubWwdns85PX6hBybEia4hzQ6HY1vb7dt3/jQltK7zVLrZ6l1sewgOchvcGuLOuqo5ZL0kpzhPDfmSxX2kwewIEwkEnTCU8TpdKo2F7eWVC6Xycd95ke/4SdwLdw8SDEDAUAsyEMW+x7+KdgHHgS4HXDAAwMuCX/HYrGIdCFuq9VKR0dHAoSYkj1i0CoOQQw4rDHV0a/weAQhhG2z2YQ/5OFpt9vFx4iZzebqHtY4/ODgQPjd3V2xNplMwqqEAIIEIBABiGwBRiaIYQ9r5XDgQYK4kkSVEFdC4IxHOQz1wLUQQ71AjutjD2sYaqsQobaocZVwk3sMWeJEvV5POm5yZAJvNBrFPjwwiAGDGDD7+/uCEHP1UoYoMAxZ4B3XRBZKDJniXclS+cuI4wfmKnNSECoZGQwGQYQJDsPp8PjDG6wS3GCbZQYsaqeQoRxYYxIJwgwrBQMCIwpBnIZ3Wc5wJlm+Uoi9zD7HlhR7jaaO1Gxg4hsMlkymyFYQaxZW00ei//z8AcB6sNEInOh0AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-fb8a0.png"\n        srcset="/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-1a291.png 148w,\n/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-2bc4a.png 295w,\n/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-fb8a0.png 590w,\n/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-526de.png 885w,\n/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-fa2eb.png 1180w,\n/static/inapppurchase-a885d1c67ed62adcb116f46636bc826c-d1072.png 1242w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><strong>Step Three</strong>\nRestore Button.\nYou have to implement a restore button.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/restorebutton-6dccbbf8dfea9efa2db1276573bd53ef-7650d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 439px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 177.6765375854214%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChUlEQVRIx+1W3U5aQRA+79DaarGlSlG0MVIvTG/6Ak165UVvmjTpRR+LN2naKGj865HDnwjyo6cUFAREhYPg15mR1QOFNE1N0zRM8mVnZ2ZnZ3Zm9xzt4fgzPGA4XBh9MoUxp+cnjJBu5NEk7o9N9NUr3Bt1QhtxuOF0z4FHwbj7lic4ns7APbsA14wXj13PafNuvdjboE1MzePF4itasIDJaS8mpucx6fF2eC9mvS+x9PYdXr9ZwvsPH+GZWxTdrc18FzQjFIZhhLG5tY2doAGef9WDwgeNkIw8V+A5Q98xbuzt0NAhn8+HbDaLdruNwOoWduNJpDMHiO8lkTkwEY0lkMkeCmK7SYSjcST30+gl7erqCgxd11GtVsUhL0qlDxCLJ5BIplEsnWA/lUWWHOcLx7TJPtmYODRzUOsVNNwxiUP2XCwWcXl5KXyjYeGkXEGlUiWc4uzsHLXamfDXsirK5ets2L6vQ9M0ybAiwm+5PD59XkFgbQP+1U2EwjEqUBQrqxsk24Q/sI4vy2uwrGb/CO80ZXWYlmVBRctotdo4v7iQ9DmSRqNB87qkXye+1Ul3YFFyuZyciZ0i0T2pJFc4QS2SojYKRXZFNjBCLgSjVCrhgiJS82azKY7y+SPqt4y00tFxUdqFZaxXtnZonAqDDTjta96i8Ns3R6BIyTozqLV29C1K9bQmjR2J7aFAjcwNnftekJsRpVvCOr49vUfUVRQ7+GbowQi1yJY4M0IxcRKm81v2r2NbD4mes/o7N6WXeCdOp9VqyWiHXdZ7S37Z2P0WqNR+K8I7T3nocOhw6PD/c9jvAf63IqzVavSVy9OvR5m+LwXU6/U/T1m9zoNeaTv9AFQkbAeSPxzFAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/restorebutton-6dccbbf8dfea9efa2db1276573bd53ef-7650d.png"\n        srcset="/static/restorebutton-6dccbbf8dfea9efa2db1276573bd53ef-50e7f.png 148w,\n/static/restorebutton-6dccbbf8dfea9efa2db1276573bd53ef-c270c.png 295w,\n/static/restorebutton-6dccbbf8dfea9efa2db1276573bd53ef-7650d.png 439w"\n        sizes="(max-width: 439px) 100vw, 439px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>There you go! Now you should be able to pass the Apple in store review.</p>',frontmatter:{title:"Xamarin Forms iOS renewable subscriptions In-App Purchasing",date:"February 28, 2019"}}},pathContext:{slug:"/post-2-28-2019/",previous:{fields:{slug:"/post-1-13-2019/"},frontmatter:{title:"Xamarin Forms Keyboard Enter Command"}},next:{fields:{slug:"/post-4-7-2019/"},frontmatter:{title:"Deeplinking iOS and Android, Nginx and .Well-Known"}}}}}});
//# sourceMappingURL=path---post-2-28-2019-ba945468fe60afdf951a.js.map