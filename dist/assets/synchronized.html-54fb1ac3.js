const e=JSON.parse('{"key":"v-f96cf90e","path":"/thread/synchronized.html","title":"Java中的synchronized锁的到底是什么？","lang":"zh-CN","frontmatter":{"title":"Java中的synchronized锁的到底是什么？","shortTitle":"synchronized锁的到底是什么？","description":"Java中的synchronized锁的到底是什么？","category":["Java核心"],"tag":["Java并发编程"],"head":[["meta",{"name":"keywords","content":"Java,并发编程,多线程,Thread,synchronized"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/thread/synchronized.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java中的synchronized锁的到底是什么？"}],["meta",{"property":"og:description","content":"Java中的synchronized锁的到底是什么？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java并发编程"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java中的synchronized锁的到底是什么？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Synchronized关键字","slug":"synchronized关键字","link":"#synchronized关键字","children":[]},{"level":2,"title":"几种锁","slug":"几种锁","link":"#几种锁","children":[{"level":3,"title":"Java对象头","slug":"java对象头","link":"#java对象头","children":[]},{"level":3,"title":"偏向锁","slug":"偏向锁","link":"#偏向锁","children":[]},{"level":3,"title":"轻量级锁","slug":"轻量级锁","link":"#轻量级锁","children":[]},{"level":3,"title":"重量级锁","slug":"重量级锁","link":"#重量级锁","children":[]},{"level":3,"title":"锁的升级流程","slug":"锁的升级流程","link":"#锁的升级流程","children":[]},{"level":3,"title":"各种锁的优缺点对比","slug":"各种锁的优缺点对比","link":"#各种锁的优缺点对比","children":[]}]}],"git":{"createdTime":1648037338000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":9},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":13.5,"words":4050},"filePathRelative":"thread/synchronized.md","localizedDate":"2022年3月23日","excerpt":"<h1> Java中的synchronized锁的到底是什么？</h1>\\n<p>这篇文章我们来聊一聊Java多线程里面的“锁”。</p>\\n<p>首先需要明确的一点是：<strong>Java多线程的锁都是基于对象的</strong>，Java中的每一个对象都可以作为一个锁。</p>\\n<p>还有一点需要注意的是，我们常听到的<strong>类锁</strong>其实也是对象锁。</p>\\n<p>Java类只有一个Class对象（可以有多个实例对象，多个实例共享这个Class对象），而Class对象也是特殊的Java对象。所以我们常说的类锁，其实就是Class对象的锁。</p>\\n<h2> Synchronized关键字</h2>"}');export{e as data};
