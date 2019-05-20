webpackJsonp([0x6df255837124],{518:function(a,e){a.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-4-26-2018/index.md absPath of file >>> MarkdownRemark",html:'<h4>Here is the structure:</h4>\n<p>/Project_folder</p>\n<p>      |------ JavaJarFile.jar</p>\n<h4>cd into the folder</h4>\n<p><code class="language-text">$ cd Project_folder</code></p>\n<h4>Create an environment variable, so you don’t have to use the full path every time.</h4>\n<p><code class="language-text">$ jdk=$(/user/libexexc/java_home)</code></p>\n<h4>Check the environment variable works.</h4>\n<p><code class="language-text">$jdk/bin/javapackager -version</code></p>\n<h4>If it doesn’t work, you can always use the full path.</h4>\n<p><code class="language-text">/Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/bin/javapackager -version</code></p>\n<h4>Now, let’s build the Mac package.</h4>\n<h4>To build a Jar file the main thing you need know is what class the main method is in. In this example the main method is in the MainClass.</h4>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">/Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/bin/javapackager -deploy \n                                                                                  -native pkg\n                                                                                  -name JavaJarFile \n                                                                                  -BappVersion=1.0.0 \n                                                                                  -srcdir . \n                                                                                  -srcfiles JavaJarFile.jar\n                                                                                  -appclass MainClass \n                                                                                  -outdir out \n                                                                                  -v \n                                                                                  -outfile </code></pre>\n      </div>\n<h4>There you go! You’ve built a Java package installer for Mac.</h4>',frontmatter:{title:"Package a Java Application for Mac",date:"April 26, 2018"}}},pathContext:{slug:"/post-4-26-2018/",previous:{fields:{slug:"/post-4-23-2018/"},frontmatter:{title:"Clean Architecture"}},next:{fields:{slug:"/post-6-13-2018/"},frontmatter:{title:"Building a Java Application for Mac"}}}}}});
//# sourceMappingURL=path---post-4-26-2018-3502b3015a392d52ad6c.js.map