const e=JSON.parse('{"key":"v-4401346c","path":"/io/reader-writer.html","title":"Java 字符流：Reader和Writer的故事","lang":"zh-CN","frontmatter":{"title":"Java 字符流：Reader和Writer的故事","shortTitle":"字符流","category":["Java核心"],"tag":["Java IO"],"description":"本文详细介绍了字符流在 Java IO 操作中的重要作用，特别关注 Reader 和 Writer 类及其子类的功能与用途。同时，文章还提供了字符流的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解字符流以及 Reader 和 Writer 在 Java 编程中的关键地位，提高文本操作效率。","head":[["meta",{"name":"keywords","content":"Java,Java IO,Reader,Writer,字符流,java字符流"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/io/reader-writer.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"Java 字符流：Reader和Writer的故事"}],["meta",{"property":"og:description","content":"本文详细介绍了字符流在 Java IO 操作中的重要作用，特别关注 Reader 和 Writer 类及其子类的功能与用途。同时，文章还提供了字符流的实际应用示例和常用方法。阅读本文，将帮助您更深入地了解字符流以及 Reader 和 Writer 在 Java 编程中的关键地位，提高文本操作效率。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"Java IO"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 字符流：Reader和Writer的故事\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、字符输入流（Reader）","slug":"_01、字符输入流-reader","link":"#_01、字符输入流-reader","children":[]},{"level":3,"title":"02、字符输出流（Writer）","slug":"_02、字符输出流-writer","link":"#_02、字符输出流-writer","children":[]},{"level":3,"title":"03、IO异常的处理","slug":"_03、io异常的处理","link":"#_03、io异常的处理","children":[]},{"level":3,"title":"04、小结","slug":"_04、小结","link":"#_04、小结","children":[]}],"git":{"createdTime":1661242206000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":5},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":4}]},"readingTime":{"minutes":12.34,"words":3702},"filePathRelative":"io/reader-writer.md","localizedDate":"2022年8月23日","excerpt":"<h1> 7.4 字符流</h1>\\n<p>字符流 Reader 和 Writer 的故事要从它们的类关系图开始，来看图。</p>\\n<figure><img src=\\"https://cdn.tobebetterjavaer.com/stutymore/reader-writer-20230320164938.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<p>字符流是一种用于读取和写入字符数据的输入输出流。与字节流不同，字符流以字符为单位读取和写入数据，而不是以字节为单位。常用来处理文本信息。</p>"}');export{e as data};
