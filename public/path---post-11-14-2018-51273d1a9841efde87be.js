webpackJsonp([0xa21dee2a213a],{511:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-11-14-2018/index.md absPath of file >>> MarkdownRemark",html:'<p>How to get the company field of one of your contacts? </p>\n<div class="gatsby-highlight">\n      <pre class="language-csharp"><code class="language-csharp"><span class="token keyword">void</span> FillContacts <span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n   <span class="token keyword">var</span> uri <span class="token operator">=</span> ContactsContract<span class="token punctuation">.</span>Contacts<span class="token punctuation">.</span>ContentUri<span class="token punctuation">;</span>\n   <span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> projection <span class="token operator">=</span> <span class="token punctuation">{</span>\n       ContactsContract<span class="token punctuation">.</span>Contacts<span class="token punctuation">.</span>InterfaceConsts<span class="token punctuation">.</span>Id<span class="token punctuation">,</span>\n       ContactsContract<span class="token punctuation">.</span>Contacts<span class="token punctuation">.</span>InterfaceConsts<span class="token punctuation">.</span>DisplayName<span class="token punctuation">,</span>\n       ContactsContract<span class="token punctuation">.</span>Contacts<span class="token punctuation">.</span>InterfaceConsts<span class="token punctuation">.</span>PhotoId\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n   <span class="token comment">// CursorLoader introduced in Honeycomb (3.0, API11)</span>\n   <span class="token keyword">var</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CursorLoader</span><span class="token punctuation">(</span>activity<span class="token punctuation">,</span> uri<span class="token punctuation">,</span> projection<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token keyword">var</span> cursor <span class="token operator">=</span> <span class="token punctuation">(</span>ICursor<span class="token punctuation">)</span>loader<span class="token punctuation">.</span><span class="token function">LoadInBackground</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   contactList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token generic-method"><span class="token function">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Contact</span><span class="token punctuation">></span> </span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>MoveToFirst <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">do</span> <span class="token punctuation">{</span>\n          contactList<span class="token punctuation">.</span>Add <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Contact</span><span class="token punctuation">{</span>\n              Id <span class="token operator">=</span> cursor<span class="token punctuation">.</span>GetLong <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>GetColumnIndex <span class="token punctuation">(</span>projection <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              DisplayName <span class="token operator">=</span> cursor<span class="token punctuation">.</span>GetString <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>GetColumnIndex <span class="token punctuation">(</span>projection <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              PhotoId <span class="token operator">=</span> cursor<span class="token punctuation">.</span>GetString <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>GetColumnIndex <span class="token punctuation">(</span>projection <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n              Company <span class="token operator">=</span> <span class="token function">getCompany</span><span class="token punctuation">(</span>Id<span class="token punctuation">)</span>\n\n          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">MoveToNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n <span class="token keyword">private</span> <span class="token class-name">String</span> getCompanyName <span class="token punctuation">(</span><span class="token class-name">String</span> contactId<span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// Get Organizations</span>\n            <span class="token class-name">String</span> orgName <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n            <span class="token class-name">String</span> orgWhere <span class="token operator">=</span> ContactsContract<span class="token punctuation">.</span>Contacts<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>InterfaceConsts<span class="token punctuation">.</span>RawContactId <span class="token operator">+</span> <span class="token string">" = ? AND "</span>\n                    <span class="token operator">+</span> ContactsContract<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>InterfaceConsts<span class="token punctuation">.</span>Mimetype <span class="token operator">+</span> <span class="token string">" = ?"</span><span class="token punctuation">;</span>\n            String <span class="token punctuation">[</span><span class="token punctuation">]</span> orgWhereParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>contactId<span class="token punctuation">,</span>\n                ContactsContract<span class="token punctuation">.</span>CommonDataKinds<span class="token punctuation">.</span>Organization<span class="token punctuation">.</span>ContentItemType<span class="token punctuation">}</span><span class="token punctuation">;</span>\n            <span class="token keyword">var</span> orgCur <span class="token operator">=</span> Application<span class="token punctuation">.</span>Context<span class="token punctuation">.</span>ContentResolver<span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span>ContactsContract<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>ContentUri<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n                    orgWhere<span class="token punctuation">,</span> orgWhereParams<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>orgCur<span class="token punctuation">.</span>MoveToFirst <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                orgName <span class="token operator">=</span> orgCur<span class="token punctuation">.</span>GetString <span class="token punctuation">(</span>orgCur<span class="token punctuation">.</span>GetColumnIndex <span class="token punctuation">(</span>ContactsContract<span class="token punctuation">.</span>CommonDataKinds<span class="token punctuation">.</span>Organization<span class="token punctuation">.</span>Company<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span> orgName<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span></code></pre>\n      </div>',frontmatter:{title:"Xamarin Forms Query Android Contacts' Company",date:"November 14, 2018"}}},pathContext:{slug:"/post-11-14-2018/",previous:{fields:{slug:"/post-7-7-2018/"},frontmatter:{title:"Relay Commands"}},next:{fields:{slug:"/post-1-13-2019/"},frontmatter:{title:"Xamarin Forms Keyboard Enter Command"}}}}}});
//# sourceMappingURL=path---post-11-14-2018-51273d1a9841efde87be.js.map