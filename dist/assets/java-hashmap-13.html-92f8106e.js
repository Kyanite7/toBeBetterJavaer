const a=JSON.parse('{"key":"v-6d6bbbd8","path":"/interview/java-hashmap-13.html","title":"13 道 Java HashMap 精选面试题👍","lang":"zh-CN","frontmatter":{"title":"13 道 Java HashMap 精选面试题👍","shortTitle":"13道HashMap精选面试题👍","category":["求职面试"],"tag":["面试题&八股文"],"description":"Java程序员进阶之路，小白的零基础Java教程，13 道 Java HashMap 精选面试题👍","head":[["meta",{"name":"keywords","content":"Java,java,hashmap,面试题,八股文"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/interview/java-hashmap-13.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"13 道 Java HashMap 精选面试题👍"}],["meta",{"property":"og:description","content":"Java程序员进阶之路，小白的零基础Java教程，13 道 Java HashMap 精选面试题👍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"面试题&八股文"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13 道 Java HashMap 精选面试题👍\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、HashMap的底层数据结构是什么？","slug":"_01、hashmap的底层数据结构是什么","link":"#_01、hashmap的底层数据结构是什么","children":[]},{"level":3,"title":"02、为什么链表改为红黑树的阈值是 8?","slug":"_02、为什么链表改为红黑树的阈值是-8","link":"#_02、为什么链表改为红黑树的阈值是-8","children":[]},{"level":3,"title":"03、解决hash冲突的办法有哪些？HashMap用的哪种？","slug":"_03、解决hash冲突的办法有哪些-hashmap用的哪种","link":"#_03、解决hash冲突的办法有哪些-hashmap用的哪种","children":[]},{"level":3,"title":"04、为什么在解决 hash 冲突的时候，不直接用红黑树？而选择先用链表，再转红黑树?","slug":"_04、为什么在解决-hash-冲突的时候-不直接用红黑树-而选择先用链表-再转红黑树","link":"#_04、为什么在解决-hash-冲突的时候-不直接用红黑树-而选择先用链表-再转红黑树","children":[]},{"level":3,"title":"05、HashMap默认加载因子是多少？为什么是 0.75，不是 0.6 或者 0.8 ？","slug":"_05、hashmap默认加载因子是多少-为什么是-0-75-不是-0-6-或者-0-8","link":"#_05、hashmap默认加载因子是多少-为什么是-0-75-不是-0-6-或者-0-8","children":[]},{"level":3,"title":"06、HashMap 中  key 的存储索引是怎么计算的？","slug":"_06、hashmap-中-key-的存储索引是怎么计算的","link":"#_06、hashmap-中-key-的存储索引是怎么计算的","children":[]},{"level":3,"title":"07、JDK 8 为什么要 hashcode 异或其右移十六位的值？","slug":"_07、jdk-8-为什么要-hashcode-异或其右移十六位的值","link":"#_07、jdk-8-为什么要-hashcode-异或其右移十六位的值","children":[]},{"level":3,"title":"08、为什么 hash 值要与length-1相与？","slug":"_08、为什么-hash-值要与length-1相与","link":"#_08、为什么-hash-值要与length-1相与","children":[]},{"level":3,"title":"09、HashMap数组的长度为什么是 2 的幂次方？","slug":"_09、hashmap数组的长度为什么是-2-的幂次方","link":"#_09、hashmap数组的长度为什么是-2-的幂次方","children":[]},{"level":3,"title":"10、HashMap 的put方法流程？","slug":"_10、hashmap-的put方法流程","link":"#_10、hashmap-的put方法流程","children":[]},{"level":3,"title":"11、HashMap 的扩容方式？","slug":"_11、hashmap-的扩容方式","link":"#_11、hashmap-的扩容方式","children":[]},{"level":3,"title":"12、一般用什么作为HashMap的key?","slug":"_12、一般用什么作为hashmap的key","link":"#_12、一般用什么作为hashmap的key","children":[]},{"level":3,"title":"13、HashMap为什么线程不安全？","slug":"_13、hashmap为什么线程不安全","link":"#_13、hashmap为什么线程不安全","children":[]}],"git":{"createdTime":1662711378000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":4},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":1}]},"readingTime":{"minutes":9.2,"words":2760},"filePathRelative":"interview/java-hashmap-13.md","localizedDate":"2022年9月9日","excerpt":"<h1> Java HashMap精选面试题</h1>\\n<p>对于 Java 求职者来说，HashMap 可谓是重中之重，是面试的必考点。然而 HashMap 的知识点非常多，复习起来花费精力很大。</p>\\n<h3> 01、HashMap的底层数据结构是什么？</h3>\\n<p>JDK 7 中，HashMap 由“数组+链表”组成，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的。</p>\\n<p>在 JDK 8 中，HashMap 由“数组+链表+红黑树”组成。链表过长，会严重影响 HashMap 的性能，而红黑树搜索的时间复杂度是 O(logn)，而链表是糟糕的 O(n)。因此，JDK 8 对数据结构做了进一步的优化，引入了红黑树，链表和红黑树在达到一定条件会进行转换：</p>"}');export{a as data};
