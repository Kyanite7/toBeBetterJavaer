const e=JSON.parse('{"key":"v-1df9d2c2","path":"/thread/aqs.html","title":"Java并发AQS详解","lang":"zh-CN","frontmatter":{"title":"Java并发AQS详解","shortTitle":"Java并发AQS详解","description":"Java并发AQS详解","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,cas"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/aqs.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java并发AQS详解"}],["meta",{"property":"og:description","content":"Java并发AQS详解"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发AQS详解\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"AQS简介","slug":"aqs简介","link":"#aqs简介","children":[]},{"level":2,"title":"AQS的数据结构","slug":"aqs的数据结构","link":"#aqs的数据结构","children":[]},{"level":2,"title":"资源共享模式","slug":"资源共享模式","link":"#资源共享模式","children":[]},{"level":2,"title":"AQS的主要方法源码解析","slug":"aqs的主要方法源码解析","link":"#aqs的主要方法源码解析","children":[{"level":3,"title":"获取资源","slug":"获取资源","link":"#获取资源","children":[]}]},{"level":2,"title":"释放资源","slug":"释放资源","link":"#释放资源","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":8},{"name":"Argon","email":"112397278+arglone@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.8,"words":2639},"filePathRelative":"thread/aqs.md","localizedDate":"2022年3月23日","excerpt":"<h1> Java并发AQS详解</h1>\\n<h2> AQS简介</h2>\\n<p><strong>AQS</strong>是<code>AbstractQueuedSynchronizer</code>的简称，即<code>抽象队列同步器</code>，从字面意思上理解:</p>\\n<ul>\\n<li>抽象：抽象类，只实现一些主要逻辑，有些方法由子类实现；</li>\\n<li>队列：使用先进先出（FIFO）队列存储数据；</li>\\n<li>同步：实现了同步的功能。</li>\\n</ul>\\n<p>那AQS有什么用呢？AQS是一个用来构建锁和同步器的框架，使用AQS能简单且高效地构造出应用广泛的同步器，比如我们提到的ReentrantLock，Semaphore，ReentrantReadWriteLock，SynchronousQueue，FutureTask等等皆是基于AQS的。</p>"}');export{e as data};
