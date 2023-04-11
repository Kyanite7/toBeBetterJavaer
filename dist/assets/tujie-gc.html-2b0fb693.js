const t=JSON.parse('{"key":"v-4c99a464","path":"/jvm/tujie-gc.html","title":"图解Java的垃圾回收机制","lang":"zh-CN","frontmatter":{"title":"图解Java的垃圾回收机制","shortTitle":"图解Java的垃圾回收机制","category":["Java核心"],"tag":["Java虚拟机"],"description":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，图解Java的垃圾回收机制","head":[["meta",{"name":"keywords","content":"Java,JavaSE,教程,Java程序员进阶之路,jvm,Java虚拟机,垃圾回收机制"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/jvm/tujie-gc.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"图解Java的垃圾回收机制"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，从入门到进阶，图解Java的垃圾回收机制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java虚拟机"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"图解Java的垃圾回收机制\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1648354033000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":2}]},"readingTime":{"minutes":10.53,"words":3160},"filePathRelative":"jvm/tujie-gc.md","localizedDate":"2022年3月27日","excerpt":"<h1> 图解Java的垃圾回收机制</h1>\\n<p>垃圾回收是一种在堆内存中找出哪些对象在被使用，还有哪些对象没被使用，并且将后者回收掉的机制。</p>\\n<p>所谓使用中的对象，指的是程序中还有引用的对象；而未使用中的对象，指的是程序中已经没有引用的对象，该对象占用的内存也可以被回收掉。</p>\\n<p>Java 语言出来之前，大家都在拼命的写 C 或者 C++ 的程序，此时存在一个很大的矛盾，C++ 等语言创建对象需要不断的去开辟空间，不用的时候又需要不断的去释放空间，既要写构造函数，又要写析构函数，很多时候都在重复的 allocated，然后不停的析构。而 Java 不一样，它有垃圾回收器，释放内存由回收器负责。</p>"}');export{t as data};
