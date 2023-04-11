const e=JSON.parse('{"key":"v-7cc17552","path":"/oo/this-super.html","title":"详解Java this与super关键字的用法与区别","lang":"zh-CN","frontmatter":{"title":"详解Java this与super关键字的用法与区别","shortTitle":"Java this和super关键字","description":"本文详细介绍了Java中的this和super关键字，包括它们的概念、作用以及如何在实际编程中使用。通过对比分析this和super关键字的区别，本文旨在帮助读者深入理解Java面向对象编程中的相关概念，提升编程技能。","category":["Java 核心"],"tag":["面向对象编程"],"head":[["meta",{"name":"keywords","content":"Java,this,super,java this super,java this,java super,this super,this关键字, super关键字"}],["meta",{"property":"og:url","content":"https://tobebetterjavaer.com/oo/this-super.html"}],["meta",{"property":"og:site_name","content":"Java程序员进阶之路"}],["meta",{"property":"og:title","content":"详解Java this与super关键字的用法与区别"}],["meta",{"property":"og:description","content":"本文详细介绍了Java中的this和super关键字，包括它们的概念、作用以及如何在实际编程中使用。通过对比分析this和super关键字的区别，本文旨在帮助读者深入理解Java面向对象编程中的相关概念，提升编程技能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-10T14:14:27.000Z"}],["meta",{"property":"article:tag","content":"面向对象编程"}],["meta",{"property":"article:modified_time","content":"2023-04-10T14:14:27.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解Java this与super关键字的用法与区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-10T14:14:27.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"01、 指向当前对象","slug":"_01、-指向当前对象","link":"#_01、-指向当前对象","children":[]},{"level":3,"title":"02、调用当前类的方法","slug":"_02、调用当前类的方法","link":"#_02、调用当前类的方法","children":[]},{"level":3,"title":"03、调用当前类的构造方法","slug":"_03、调用当前类的构造方法","link":"#_03、调用当前类的构造方法","children":[]},{"level":3,"title":"04、作为参数在方法中传递","slug":"_04、作为参数在方法中传递","link":"#_04、作为参数在方法中传递","children":[]},{"level":3,"title":"05、作为参数在构造方法中传递","slug":"_05、作为参数在构造方法中传递","link":"#_05、作为参数在构造方法中传递","children":[]},{"level":3,"title":"06、作为方法的返回值","slug":"_06、作为方法的返回值","link":"#_06、作为方法的返回值","children":[]},{"level":3,"title":"07、super 关键字","slug":"_07、super-关键字","link":"#_07、super-关键字","children":[]}],"git":{"createdTime":1634887330000,"updatedTime":1681136067000,"contributors":[{"name":"itwanger","email":"www.qing_gee@163.com","commits":12},{"name":"沉默王二","email":"www.qing_gee@163.com","commits":3},{"name":"yiyufxst","email":"1248769078@qq.com","commits":1}]},"readingTime":{"minutes":10.69,"words":3206},"filePathRelative":"oo/this-super.md","localizedDate":"2021年10月22日","excerpt":"<h1> 5.14 Java this和super关键字</h1>\\n<p>“哥，被喊大舅子的感觉怎么样啊？”三妹不怀好意地对我说，她眼睛里充满着不屑。</p>\\n<p>“说实话，这种感觉还不错。”我有点难为情的回答她，“不过，有一点令我感到些许失落。大家的焦点似乎都是你的颜值，完全忽略了我的盛世美颜啊！”</p>\\n<p>“哥，你想啥呢，那是因为你文章写得好，不然谁认识我是谁啊！有你这样的哥哥，我还是挺自豪的。”三妹郑重其事地说，“话说今天咱学啥呢？”</p>\\n<p>“三妹啊，你这句话说得我喜欢。今天来学习一下 Java 中的 this 关键字吧。”喝了一口农夫山泉后，我对三妹说。</p>\\n<p>“this 关键字有很多种用法，其中最常用的一个是，它可以作为引用变量，指向当前对象。”我面带着朴实无华的微笑继续说，“除此之外， this 关键字还可以完成以下工作。”</p>"}');export{e as data};
