const e=JSON.parse('{"key":"v-b5107de8","path":"/io/Serializbale.html","title":"Java Serializable 接口：明明就一个空的接口嘛","lang":"zh-CN","frontmatter":{"title":"Java Serializable 接口：明明就一个空的接口嘛","shortTitle":"序列接口Serializable","category":["Java核心"],"tag":["Java IO"],"description":"本文详细介绍了 Java Serializable 接口的实际作用与意义，阐述了虽然它是一个空接口，但在 Java 对象序列化中具有重要的标记作用。同时，文章还提供了 Serializable 接口的实际应用示例和序列化机制。阅读本文，将帮助您更深入地了解 Serializable 接口在 Java 编程中的关键地位，有效实现对象的序列化与反序列化。","head":[["meta",{"name":"keywords","content":"Java,Java SE,Java基础,Java教程,Java程序员进阶之路,Java进阶之路,Java入门,教程,Serializable,java Serializable,java 序列化"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/io/Serializbale.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java Serializable 接口：明明就一个空的接口嘛"}],["meta",{"property":"og:description","content":"本文详细介绍了 Java Serializable 接口的实际作用与意义，阐述了虽然它是一个空接口，但在 Java 对象序列化中具有重要的标记作用。同时，文章还提供了 Serializable 接口的实际应用示例和序列化机制。阅读本文，将帮助您更深入地了解 Serializable 接口在 Java 编程中的关键地位，有效实现对象的序列化与反序列化。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java Serializable 接口：明明就一个空的接口嘛\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、先来点理论","slug":"_01、先来点理论","link":"#_01、先来点理论","children":[]},{"level":3,"title":"02、再来点实战","slug":"_02、再来点实战","link":"#_02、再来点实战","children":[]},{"level":3,"title":"03、再来点注意事项","slug":"_03、再来点注意事项","link":"#_03、再来点注意事项","children":[]},{"level":3,"title":"04、再来点干货","slug":"_04、再来点干货","link":"#_04、再来点干货","children":[]},{"level":3,"title":"05、再来点甜点","slug":"_05、再来点甜点","link":"#_05、再来点甜点","children":[]},{"level":3,"title":"06、再来点总结","slug":"_06、再来点总结","link":"#_06、再来点总结","children":[]}],"git":{"createdTime":1661412910000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":4},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3}]},"readingTime":{"minutes":13.69,"words":4107},"filePathRelative":"io/Serializbale.md","localizedDate":"2022年8月25日","excerpt":"<h1> 7.9 序列接口Serializable</h1>\\n<p>对于 Java 的序列化，我之前一直停留在最浅层次的认知上——把那个要<a href=\\"https://tobebetterjavaer.com/io/serialize.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">序列化</a>的类实现 <code>Serializbale</code> 接口就可以了嘛。</p>\\n<p>我似乎不愿意做更深入的研究，因为会用就行了嘛。</p>\\n<p>但随着时间的推移，见到 <code>Serializbale</code> 的次数越来越多，我便对它产生了浓厚的兴趣。是时候花点时间研究研究了。</p>"}');export{e as data};
