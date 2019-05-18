webpackJsonp([0xd249e30a01f],{521:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-6-25-2018/index.md absPath of file >>> MarkdownRemark",html:'<p>Continuous Integration with Jenkins and Python. </p>\n<h4>Project Structure.</h4>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">Project<span class="token operator">/</span>\n \t<span class="token operator">|</span><span class="token operator">-</span> app<span class="token operator">/</span>\n\t<span class="token operator">|</span><span class="token operator">-</span> python_unittest_xml<span class="token operator">/</span>\n\t<span class="token operator">|</span><span class="token operator">-</span> tests<span class="token operator">/</span>\n\t \t<span class="token operator">|</span><span class="token operator">-</span> test_api<span class="token punctuation">.</span>py\n\t    <span class="token operator">|</span><span class="token operator">-</span> test_basics<span class="token punctuation">.</span>py\n\t    <span class="token operator">|</span><span class="token operator">-</span> test_client<span class="token punctuation">.</span>py\n\t    <span class="token operator">|</span><span class="token operator">-</span> test_selenum<span class="token punctuation">.</span>py\n\t    <span class="token operator">|</span><span class="token operator">-</span> test_user_model<span class="token punctuation">.</span>py\n\t<span class="token operator">|</span><span class="token operator">-</span> manage<span class="token punctuation">.</span>py</code></pre>\n      </div>\n<p>The structure is defined as follows. The ‘Project/’ happens to be a flask application, hence the ‘app/’ folder and ‘manage.py’ file. Create a folder called ‘python<em>unittest</em>xml’.\nThis is where Jenkins will read the results from your unit tests. Next create a folder called ‘tests’, and this is where you will create all your\nyour unit tests.</p>\n<h4>manage.py</h4>\n<p>My manage.py looks like this</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask_script <span class="token keyword">import</span> Manager<span class="token punctuation">,</span> Shell\n\n@manager<span class="token punctuation">.</span>command\n<span class="token keyword">def</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">"""Run the unit tests."""</span>\n    <span class="token keyword">import</span> unittest\n    <span class="token keyword">import</span> xmlrunner\n    tests <span class="token operator">=</span> unittest<span class="token punctuation">.</span>TestLoader<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>discover<span class="token punctuation">(</span><span class="token string">\'tests\'</span><span class="token punctuation">)</span>\n    xmlrunner<span class="token punctuation">.</span>XMLTestRunner<span class="token punctuation">(</span>output<span class="token operator">=</span><span class="token string">"./python_unittests_xml"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>run<span class="token punctuation">(</span>tests<span class="token punctuation">)</span></code></pre>\n      </div>\n<p>As you can see we load the unittests from the ‘tests’ folder and save the output to ‘python<em>unittests</em>xml’.</p>\n<h4>Jenkins</h4>\n<p>This tutorial assumes you already have GitHub hooks setup.\nThere are two steps to this process. The first is to setup an Execute shell script under the Build tab.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-e8904.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 37.94178794178794%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAA00lEQVQoz63SvQqDMBQFYB/dJ3B0VnBw8gWkSxdHB8FJEBxsYxOxFvNX4bS5UKGUQml74SPJcm7Cjdf3PYwxf+NxzsEYwzzPkFJ+bdjvcBJneNM0YRxHiPtBCIG6rpHnOUnTFGVZoqoq8IHByAVWKxglaV3XdWOtpWDv0SHLMsRxvImiCEEQwPd9EoYhkiR5UhQFHuVCnwIdrTWUUtTtajRZrxaf1EsgGziOw4j+6FZBDkxgWRZyuczb/p2XG37DDbNpGrjfQoFt26LrOrjhuOf+6gYMQFnnC8ei5wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-fb8a0.png"\n        srcset="/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-1a291.png 148w,\n/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-2bc4a.png 295w,\n/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-fb8a0.png 590w,\n/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-526de.png 885w,\n/static/JenkinsBuild-be56143cae45371f2558a03131dd8b9f-e8904.png 962w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The second step is to have Jenkins read the XML created by the unit tests.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/PostBuild-053809f212d4cb707cb8bf50af127314-4c930.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.422764227642276%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAiUlEQVQY052QSQ5DIQxDuf85K+YpQIGdS6L+LvvVLp4UWbLjRNVa4ZyDtRZrLey9/+KZE/bxqzkntNYSmnNGaw1EJPwSOGs53g7FrXrvQjs8TDxtnSzg9he8oJQi8HzpKZ+ZOrhYqe9A7z1SStIuhPCBNTazPsaQl3yD2oCiSjDGIMZ4a7iDT38BeP+BAgVTCdkAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/PostBuild-053809f212d4cb707cb8bf50af127314-fb8a0.png"\n        srcset="/static/PostBuild-053809f212d4cb707cb8bf50af127314-1a291.png 148w,\n/static/PostBuild-053809f212d4cb707cb8bf50af127314-2bc4a.png 295w,\n/static/PostBuild-053809f212d4cb707cb8bf50af127314-fb8a0.png 590w,\n/static/PostBuild-053809f212d4cb707cb8bf50af127314-526de.png 885w,\n/static/PostBuild-053809f212d4cb707cb8bf50af127314-fa2eb.png 1180w,\n/static/PostBuild-053809f212d4cb707cb8bf50af127314-4c930.png 1476w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    \nThe end result should look like this.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/TestResult-67e6d406dade5738ec700cedb9216b0b-0775d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 28.499686126804768%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAbklEQVQY062OwQrDQAhE/f+/67WXQGhaSGyRwK66UqY1sB+wJMJjnIMz0jxPeCwvmAc8vqchtQ2r6GkW3nG7P0HMjNbaMGYGVT20k562t8Ddh8hDEUEpBbXWIyw1If7s/8ZAxBgZ2r9N33fCxfMDS23UclwO2PYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Alternate screenshot"\n        title=""\n        src="/static/TestResult-67e6d406dade5738ec700cedb9216b0b-fb8a0.png"\n        srcset="/static/TestResult-67e6d406dade5738ec700cedb9216b0b-1a291.png 148w,\n/static/TestResult-67e6d406dade5738ec700cedb9216b0b-2bc4a.png 295w,\n/static/TestResult-67e6d406dade5738ec700cedb9216b0b-fb8a0.png 590w,\n/static/TestResult-67e6d406dade5738ec700cedb9216b0b-526de.png 885w,\n/static/TestResult-67e6d406dade5738ec700cedb9216b0b-fa2eb.png 1180w,\n/static/TestResult-67e6d406dade5738ec700cedb9216b0b-0775d.png 1593w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{title:"Jenkins and Python",date:"June 25, 2018"}}},pathContext:{slug:"/post-6-25-2018/",previous:{fields:{slug:"/post-6-13-2018/"},frontmatter:{title:"Building a Java Application for Mac"}},next:{fields:{slug:"/post-7-7-2018/"},frontmatter:{title:"Relay Commands"}}}}}});
//# sourceMappingURL=path---post-6-25-2018-a522ed8e187bb66aa99b.js.map