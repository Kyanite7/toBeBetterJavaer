const t=JSON.parse('{"key":"v-66a4042c","path":"/thread/condition.html","title":"深入理解Java并发线程协作类Condition","lang":"zh-CN","frontmatter":{"title":"深入理解Java并发线程协作类Condition","shortTitle":"线程协作类Condition","description":"深入理解Java并发线程协作类Condition","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,Condition"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/condition.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"深入理解Java并发线程协作类Condition"}],["meta",{"property":"og:description","content":"深入理解Java并发线程协作类Condition"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"深入理解Java并发线程协作类Condition\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Condition简介","slug":"condition简介","link":"#condition简介","children":[]},{"level":2,"title":"Condition实现原理分析","slug":"condition实现原理分析","link":"#condition实现原理分析","children":[{"level":3,"title":"等待队列","slug":"等待队列","link":"#等待队列","children":[]},{"level":3,"title":"await实现原理","slug":"await实现原理","link":"#await实现原理","children":[]},{"level":3,"title":"signal/signalAll实现原理","slug":"signal-signalall实现原理","link":"#signal-signalall实现原理","children":[]}]},{"level":2,"title":"await与signal/signalAll的结合思考","slug":"await与signal-signalall的结合思考","link":"#await与signal-signalall的结合思考","children":[]},{"level":2,"title":"一个例子","slug":"一个例子","link":"#一个例子","children":[]}],"git":{"createdTime":1648037338000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":14.94,"words":4483},"filePathRelative":"thread/condition.md","localizedDate":"2022年3月23日","excerpt":"<h1> 深入理解Java并发线程协作类Condition</h1>\\n<h2> Condition简介</h2>\\n<p>任何一个java对象都天然继承于Object类，在线程间实现通信的往往会应用到Object的几个方法：</p>\\n<ul>\\n<li>wait()</li>\\n<li>wait(long timeout)</li>\\n<li>wait(long timeout, int nanos)</li>\\n<li>notify()</li>\\n<li>notifyAll()</li>\\n</ul>\\n<p>同样的， 在java Lock体系下依然会有同样的方法实现等待/通知机制。</p>\\n<p>从整体上来看<strong>Object的wait和notify/notify是与对象监视器配合完成线程间的等待/通知机制，而Condition与Lock配合完成等待通知机制，前者是java底层级别的，后者是语言级别的，具有更高的可控制性和扩展性</strong>。</p>"}');export{t as data};
