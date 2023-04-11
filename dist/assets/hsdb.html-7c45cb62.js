const e=JSON.parse('{"key":"v-1b3dc969","path":"/jvm/hsdb.html","title":"HSDB（Hotspot Debugger）从入门到实战","lang":"zh-CN","frontmatter":{"title":"HSDB（Hotspot Debugger）从入门到实战","shortTitle":"HSDB从入门到实战","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，HSDB（Hotspot Debugger）从入门到实战","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机,HSDB"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/jvm/hsdb.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"HSDB（Hotspot Debugger）从入门到实战"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，HSDB（Hotspot Debugger）从入门到实战"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HSDB（Hotspot Debugger）从入门到实战\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"启动HSDB","slug":"启动hsdb","link":"#启动hsdb","children":[]},{"level":2,"title":"JVM参数设置","slug":"jvm参数设置","link":"#jvm参数设置","children":[]},{"level":2,"title":"获取应用进程id","slug":"获取应用进程id","link":"#获取应用进程id","children":[]},{"level":2,"title":"CLHSDB常用指令","slug":"clhsdb常用指令","link":"#clhsdb常用指令","children":[]},{"level":2,"title":"HSDB GUI界面","slug":"hsdb-gui界面","link":"#hsdb-gui界面","children":[{"level":3,"title":"可视化线程栈","slug":"可视化线程栈","link":"#可视化线程栈","children":[]},{"level":3,"title":"对象直方图","slug":"对象直方图","link":"#对象直方图","children":[]},{"level":3,"title":"OOP信息","slug":"oop信息","link":"#oop信息","children":[]},{"level":3,"title":"堆信息","slug":"堆信息","link":"#堆信息","children":[]},{"level":3,"title":"加载类列表","slug":"加载类列表","link":"#加载类列表","children":[]},{"level":3,"title":"元数据区","slug":"元数据区","link":"#元数据区","children":[]},{"level":3,"title":"生成class文件","slug":"生成class文件","link":"#生成class文件","children":[]}]},{"level":2,"title":"实战","slug":"实战","link":"#实战","children":[{"level":3,"title":"分析对象存储区域","slug":"分析对象存储区域","link":"#分析对象存储区域","children":[]},{"level":3,"title":"分析字符串字面量存储区域","slug":"分析字符串字面量存储区域","link":"#分析字符串字面量存储区域","children":[]},{"level":3,"title":"分析String.intern","slug":"分析string-intern","link":"#分析string-intern","children":[]}]}],"git":{"createdTime":1648354033000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.53,"words":2859},"filePathRelative":"jvm/hsdb.md","localizedDate":"2022年3月27日","excerpt":"<h1> HSDB（Hotspot Debugger）从入门到实战</h1>\\n<p><code>HSDB（Hotspot Debugger)</code>，是一款内置于 SA 中的 GUI 调试工具，可用于调试 JVM 运行时数据，从而进行故障排除。</p>\\n<h2> 启动HSDB</h2>\\n<p>检测不同 JDK 版本需要使用不同的&nbsp;<code>HSDB</code>&nbsp;版本，否则容易出现无法扫描到对象等莫名其妙的问题</p>\\n<ul>\\n<li><strong>Mac</strong>：JDK7 和 JDK8 均可以采用以下的方式</li>\\n</ul>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>$ sudo java -cp ,:/Library/Java/JavaVirtualMachines/jdk1.7.0_80.jdk/Contents/Home/lib/sa-jdi.jar sun.jvm.hotspot.HSDB\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
