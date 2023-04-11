const n=JSON.parse('{"key":"v-7553bbe0","path":"/basic-extra-meal/varables.html","title":"Java可变参数详解：实现更灵活的方法调用","lang":"zh-CN","frontmatter":{"title":"Java可变参数详解：实现更灵活的方法调用","shortTitle":"Java可变参数","category":["Java核心"],"tag":["Java重要知识点"],"description":"Java中的可变参数允许您在方法中传入不确定数量的参数，使得方法调用更加灵活。本文将详细介绍可变参数的使用方式、原理以及在实际编程中的应用示例。掌握可变参数的使用，将有助于提高您的Java编程技巧。","head":[["meta",{"name":"keywords","content":"java,可变参数"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/basic-extra-meal/varables.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java可变参数详解：实现更灵活的方法调用"}],["meta",{"property":"og:description","content":"Java中的可变参数允许您在方法中传入不确定数量的参数，使得方法调用更加灵活。本文将详细介绍可变参数的使用方式、原理以及在实际编程中的应用示例。掌握可变参数的使用，将有助于提高您的Java编程技巧。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java重要知识点"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java可变参数详解：实现更灵活的方法调用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1636376665000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":5.09,"words":1528},"filePathRelative":"basic-extra-meal/varables.md","localizedDate":"2021年11月8日","excerpt":"<h1> 5.5 Java可变参数</h1>\\n<p>为了让铁粉们能白票到阿里云的服务器，我当了整整两天的客服，真正体验到了什么叫做“为人民群众谋福利”的不易和辛酸。正在我眼睛红肿打算要休息之际，三妹跑过来问：“Java 的可变参数究竟是怎么一回事？”我一下子又清醒了，我爱 Java，我爱传道解惑，也享受三妹的赞许（😂）。</p>\\n<p>可变参数是 Java 1.5 的时候引入的功能，它允许方法使用任意多个、类型相同（<code>is-a</code>）的值作为参数。就像下面这样。</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"沉\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"沉\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"默\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"沉\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"默\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"王\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"沉\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"默\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"王\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"二\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span><span class=\\"token punctuation\\">.</span> strs<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">for</span> <span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">:</span> strs<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
