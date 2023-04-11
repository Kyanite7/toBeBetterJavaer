const a=JSON.parse('{"key":"v-03a417c2","path":"/exception/try-catch-xingneng.html","title":"Java try-catch 捕获异常真的会影响性能吗？","lang":"zh-CN","frontmatter":{"title":"Java try-catch 捕获异常真的会影响性能吗？","shortTitle":"try-catch会影响性能吗？","category":["Java核心"],"tag":["异常处理"],"description":"本文详细探讨了try-catch捕获异常在Java编程中是否会影响性能。通过对比实验和性能测试，分析了异常处理与性能的关系，解答了关于try-catch对性能影响的常见疑问。阅读本文，将帮助您在编写代码时更加明智地使用异常处理机制，同时确保程序性能的稳定和优越。","head":[["meta",{"name":"keywords","content":"Java,异常处理,java try-catch,捕获异常, 性能影响"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/exception/try-catch-xingneng.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java try-catch 捕获异常真的会影响性能吗？"}],["meta",{"property":"og:description","content":"本文详细探讨了try-catch捕获异常在Java编程中是否会影响性能。通过对比实验和性能测试，分析了异常处理与性能的关系，解答了关于try-catch对性能影响的常见疑问。阅读本文，将帮助您在编写代码时更加明智地使用异常处理机制，同时确保程序性能的稳定和优越。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"异常处理"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java try-catch 捕获异常真的会影响性能吗？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1679835835000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":3},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":7.37,"words":2212},"filePathRelative":"exception/try-catch-xingneng.md","localizedDate":"2023年3月26日","excerpt":"<h1> 8.5 try-catch会影响性能吗？</h1>\\n<p>“二哥，你看着这鬼代码，竟然在 for 循环里面搞了个 <code>try-catch</code>，不知道<code>try-catch</code>有性能损耗吗？” 老王煞有其事地指着屏幕里的代码：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code> <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> i <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span> i <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">5000</span><span class=\\"token punctuation\\">;</span> i<span class=\\"token operator\\">++</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n     <span class=\\"token keyword\\">try</span> <span class=\\"token punctuation\\">{</span>\\n         dosth\\n     <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">catch</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Exception</span> e<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n         e<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">printStackTrace</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n     <span class=\\"token punctuation\\">}</span>\\n <span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{a as data};
