webpackJsonp([0x9f4eb23c14a8],{520:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-4-7-2019/index.md absPath of file >>> MarkdownRemark",html:'<h3>Deeplinking iOS and Android, Nginx and .Well-Known.</h3>\n<p>In this tutorial we will setup the server side of deeplinking for iOS and Android using Nginx.</p>\n<h2>Creating the .well-known directory</h2>\n<p>Log into your server and create the .well-known directory at root of your application.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">mkdir</span> .well-known</code></pre>\n      </div>\n<h2>Create Android assetlinks.json</h2>\n<p>Go to <a href="https://developers.google.com/digital-asset-links/tools/generator">https://developers.google.com/digital-asset-links/tools/generator</a> to generate your assetlinks.json.  After generating your assetlinks.json, place the file into your .well-known directory.</p>\n<h2>Create iOS apple-app-site-association</h2>\n<p>Create the apple-app-site-association with no extension.</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n    <span class="token property">"applinks"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"apps"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token property">"details"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">"appID"</span><span class="token operator">:</span> <span class="token string">"&lt;your app>"</span><span class="token punctuation">,</span>\n          <span class="token property">"paths"</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">"*"</span> <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>After generating your apple-app-site-association, with no extension, place the file into your .well-known directory.</p>\n<h2>Update Nginx Server block</h2>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">location ^~ /.well-known <span class="token punctuation">{</span>\n         default_type application/json<span class="token punctuation">;</span>\n         allow all<span class="token punctuation">;</span>\n         auth_basic off<span class="token punctuation">;</span>\n         <span class="token function">alias</span> <span class="token operator">&lt;</span>path to well-known directory<span class="token operator">></span> <span class="token punctuation">;</span>\n    <span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Let’s break down this server block.</p>\n<p>default_type needs to be application/json</p>\n<p>^ is needed for the alias.</p>\n<p>allow all and auth_basic are optional</p>\n<h2>Now test assetlinks.json.</h2>\n<p>You can test your files here:</p>\n<p><a href="http://branch.io/resources/aasa-validator/">http://branch.io/resources/aasa-validator/</a></p>\n<p>and </p>\n<p><a href="https://developers.google.com/digital-asset-links/tools/generator">https://developers.google.com/digital-asset-links/tools/generator</a></p>\n<h2>Thats it! Now your apple-app-site-association and assetlinks.json file should be accessible.</h2>',frontmatter:{title:"Deeplinking iOS and Android, Nginx and .Well-Known",date:"April 07, 2019"}}},pathContext:{slug:"/post-4-7-2019/",previous:{fields:{slug:"/post-2-28-2019/"},frontmatter:{title:"Xamarin Forms iOS renewable subscriptions In-App Purchasing"}},next:{fields:{slug:"/post-4-24-2019/"},frontmatter:{title:"Configuring Spring Boot Application Properties"}}}}}});
//# sourceMappingURL=path---post-4-7-2019-51152eaadc0ac7b50c39.js.map