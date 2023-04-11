const e=JSON.parse('{"key":"v-c5b29e8a","path":"/array/print.html","title":"如何优雅地打印Java数组？","lang":"zh-CN","frontmatter":{"title":"如何优雅地打印Java数组？","shortTitle":"打印Java数组","category":["Java核心"],"tag":["数组&字符串"],"description":"本文将向您展示如何在Java中优雅地打印数组内容。我们将介绍不同的方法来输出数组，包括使用for循环、增强型for循环以及Java内置的Arrays.toString()和Arrays.deepToString()方法。通过本文，您将学会如何简便快捷地打印Java数组，提高编程效率和代码可读性。","head":[["meta",{"name":"keywords","content":"Java, 数组打印, 输出数组, Arrays.toString, Arrays.deepToString"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/array/print.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"如何优雅地打印Java数组？"}],["meta",{"property":"og:description","content":"本文将向您展示如何在Java中优雅地打印数组内容。我们将介绍不同的方法来输出数组，包括使用for循环、增强型for循环以及Java内置的Arrays.toString()和Arrays.deepToString()方法。通过本文，您将学会如何简便快捷地打印Java数组，提高编程效率和代码可读性。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"数组&字符串"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何优雅地打印Java数组？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"为什么不能直接打印数组","slug":"为什么不能直接打印数组","link":"#为什么不能直接打印数组","children":[]},{"level":3,"title":"stream 流打印 Java 数组","slug":"stream-流打印-java-数组","link":"#stream-流打印-java-数组","children":[]},{"level":3,"title":"for 循环打印 Java 数组","slug":"for-循环打印-java-数组","link":"#for-循环打印-java-数组","children":[]},{"level":3,"title":"Arrays 工具类打印 Java 数组","slug":"arrays-工具类打印-java-数组","link":"#arrays-工具类打印-java-数组","children":[]},{"level":3,"title":"Arrays工具类打印二维数组","slug":"arrays工具类打印二维数组","link":"#arrays工具类打印二维数组","children":[]},{"level":3,"title":"POJO 的打印规约","slug":"pojo-的打印规约","link":"#pojo-的打印规约","children":[]}],"git":{"createdTime":1622862648000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":17},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":6}]},"readingTime":{"minutes":5.5,"words":1650},"filePathRelative":"array/print.md","localizedDate":"2021年6月5日","excerpt":"<h1> 4.3 打印Java数组</h1>\\n<p>“哥，<a href=\\"https://tobebetterjavaer.com/array/array.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">之前听你说，数组也是一个对象</a>，但 Java 中并未明确的定义这样一个类。”看来三妹有在用心地学习。</p>\\n<p>“是的，因此数组也就没有机会覆盖 <code>Object.toString()</code> 方法。如果尝试直接打印数组的话，输出的结果并不是我们预期的结果。”我接着三妹的话继续说。</p>\\n<p>“那怎么打印数组呢？”三妹心有灵犀地把今天的核心问题提了出来。</p>"}');export{e as data};
