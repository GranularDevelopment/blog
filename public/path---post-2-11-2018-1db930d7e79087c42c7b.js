webpackJsonp([0xb7e26beb9113],{514:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Granular Development Blog",author:"Brian Smith"}},markdownRemark:{id:"/Users/briansmith/Documents/Dev/granular-blog/src/pages/post-2-11-2018/index.md absPath of file >>> MarkdownRemark",html:'<h3>A simple neural network called the perceptron</h3>\n<p>The perceptron is the simplest form of a neural network used for the classification of patterns said to be linearly separable.</p>\n<h3>Show me the Code</h3>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np\n\nX <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\ny <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">def</span> <span class="token function">perceptron</span><span class="token punctuation">(</span>X<span class="token punctuation">,</span> Y<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    w <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    eta <span class="token operator">=</span> <span class="token number">1</span>\n    epochs <span class="token operator">=</span> <span class="token number">20</span>\n\n    <span class="token keyword">for</span> t <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>epochs<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">for</span> i<span class="token punctuation">,</span> x <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>X<span class="token punctuation">)</span><span class="token punctuation">:</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>X<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token operator">*</span>Y<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>\n                w <span class="token operator">=</span> w <span class="token operator">+</span> eta<span class="token operator">*</span>X<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">*</span>Y<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n\n    <span class="token keyword">return</span> w\n\nw <span class="token operator">=</span> perceptron<span class="token punctuation">(</span>X<span class="token punctuation">,</span>y<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span>  \n<span class="token comment"># Result: [  2.   3.  13.]</span></code></pre>\n      </div>\n<p>The code above uses the Stochastic Grandient Descent algorithm to help the perceptron learn. The sample data set</p>\n<div class="gatsby-highlight">\n      <pre class="language-python"><code class="language-python">y <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p>contains two negative elements and three positive elements. The goal of the perceptron is to determine that weights that will produce [-,-,+,+,+].</p>\n<h3>Evaluation</h3>\n<p>The weights are [2, 3, 13]. Lets check that perceptron is correct. </p>\n<p>Lets classify the samples in our data set by hand now, to check if the perceptron learned properly:</p>\n<p>First sample (−2,4) is supposed to be negative:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;−2∗2+4∗3−13=sign(−5)=−1</code></pre>\n      </div>\n<p>Second sample (4,1) is supposed to be negative:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;4∗2+1∗3−13=sign(−2)=−1</code></pre>\n      </div>\n<p>Third sample (1,6) is supposed to be positive:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;1∗2+6∗3−13=sign(7)=+1</code></pre>\n      </div>\n<p>Fourth sample (2,4) is supposed to be positive:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;2∗2+4∗3−13=sign(3)=+1</code></pre>\n      </div>\n<p>Fifth sample (6,2) is supposed to be positive:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;6∗2+2∗3−13=sign(5)=+1</code></pre>\n      </div>\n<p>Lets define two sample tests to check how well our perceptron generalizes to unseen data:</p>\n<p>The first test (2,2) is supposed to be negative:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;2∗2+2∗3−13=sign(−3)=−1</code></pre>\n      </div>\n<p>The second test sample (4,3) is supposed to be positive:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&amp;nbsp;&amp;nbsp;4∗2+3∗3−13=sign(4)=+1</code></pre>\n      </div>\n<p>Both samples are classified right.</p>\n<h1>Conclusion</h1>\n<p>There you go! A simple perceptron in python.</p>',frontmatter:{title:"Perceptron in Python",date:"February 11, 2018"}}},pathContext:{slug:"/post-2-11-2018/",previous:{fields:{slug:"/post-2-5-2018/"},frontmatter:{title:"Creating a Subdomain"}},next:{fields:{slug:"/post-2-26-2018/"},frontmatter:{title:"C# Async Guidelines"}}}}}});
//# sourceMappingURL=path---post-2-11-2018-1db930d7e79087c42c7b.js.map