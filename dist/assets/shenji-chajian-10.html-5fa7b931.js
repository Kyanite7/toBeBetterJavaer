import{_ as t,W as n,X as r,Y as e,a0 as a,Z as c,a1 as o,C as d}from"./framework-bb7be5cb.js";const g={},b=o(`<p>昨天，有球友私信发我一篇文章，说里面提到的 Intellij IDEA 插件真心不错，基本上可以一站式开发了，希望能分享给更多的小伙伴，我在本地装了体验了一下，觉得确实值得推荐，希望小伙伴们有时间也可以尝试一下。</p><h2 id="vuesion-theme" tabindex="-1"><a class="header-anchor" href="#vuesion-theme" aria-hidden="true">#</a> Vuesion Theme</h2><p>颜值是生产力的第一要素，IDE 整好看了，每天对着它也是神清气爽，有木有？就 Intellij IDEA 提供的暗黑和亮白主色，虽然说已经非常清爽了，但时间久了总觉得需要再来点新鲜感？</p><p>Vuesion Theme 这个主题装上后，你会感觉整个 Intellij IDEA 更高级了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-453b5107-9713-4028-9a91-347025c9410f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>安装完插件就立马生效了，瞧这该死的漂亮，整个代码着色，以及文件的图标，都更炫酷了：</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-6f499db7-f460-4fb9-a3b3-182de1b22cad.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当然了，主题这事，萝卜白菜各有所爱，就像玩 dota，我就喜欢露娜。</p><h2 id="lombok" tabindex="-1"><a class="header-anchor" href="#lombok" aria-hidden="true">#</a> lombok</h2><p>可能提到 lombok，多多少少有些争议，但不得不说，这玩意的确是很能省代码，并且很多开源的第三方 jar 包，以及 Intellij IDEA 2020.3 以后的版本也都默认加了 lombok。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-6a158d96-924a-42af-94bd-92690f4e7b7e.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这么多注解可以选择，在写 VO、DO、DTO 的时候是真的省心省力。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-c07c2c25-8bdd-49af-a75a-0d13cc503113.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果没有 lombok 的帮助，那整个代码就要炸了呀。对比一下，是不是感受还挺明显的？</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-094ac20f-992a-42ee-849a-24153a1ec760.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当然了，要使用 lombok，你得在 pom.xml 文件中引入 lombok 的依赖包。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
    &lt;artifactId&gt;lombok&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file-expander" tabindex="-1"><a class="header-anchor" href="#file-expander" aria-hidden="true">#</a> File Expander</h2><p>这个插件不仅可以反编译，还可以打开 tar.gz，zip 等压缩文件，</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-94bac623-9591-43c5-83c7-c304ac45fb49.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如果有小伙伴反驳说自己不装插件也可以打开 jar 包里的代码，那是因为你的 jar 在 classpath。如果单独打开一个 jar 包，不装插件是看不了的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-c49b250b-ff8d-4ca2-82d8-84472010c557.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="gittoolbox" tabindex="-1"><a class="header-anchor" href="#gittoolbox" aria-hidden="true">#</a> GitToolBox</h2><p>如果你经常使用 Git 提交代码的话，这款插件就非常的爽。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-ea841008-baae-4c53-a3a5-1b97b5bf5176.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>它能直接提示你远程版本库里有多少文件更新，你有多少文件没有提交到版本库，甚至可以显示上一次提交的时间和版本更新者。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-2c544302-f0ea-430d-92b8-0f3fa005d08f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="maven-helper" tabindex="-1"><a class="header-anchor" href="#maven-helper" aria-hidden="true">#</a> Maven Helper</h2><p>这插件几乎人手一个了吧，Java 后端开发必备啊。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-24ae1cc3-39e6-49c4-ae3a-0a65702dbcac.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>依赖可视化的神器，可以很清楚地知道依赖的关系图谱，假如有冲突的话，也是一目了然。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-c686101c-6b28-4e79-9f19-ccf2ab53dab9.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="translation" tabindex="-1"><a class="header-anchor" href="#translation" aria-hidden="true">#</a> Translation</h2><p>对于英文能力差的同学来说，这个翻译插件简直神了，它支持 Google 翻译、有道翻译、百度翻译、Alibaba 翻译。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-3ceec7b1-49ee-4971-85e3-219f5c0dbb6f.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>刚好写这篇内容的时候，发现最新的版本是 3.3.5，趁机升级一波。有了这款翻译插件，看源码绝对是爽歪歪。以前遇到不认识的单词，真的是好烦，还要切到翻译软件那里查，现在可好，单词翻译、文档翻译、注释翻译，都有了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-800e726d-9b04-4375-a795-854e3b290f94.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="arthas-idea" tabindex="-1"><a class="header-anchor" href="#arthas-idea" aria-hidden="true">#</a> arthas idea</h2><p>Arthas 应该大家都很熟悉了，阿里开源的一款强大的 java 在线诊断工具。</p><p>但如果每次都要你输入一长串命令的话，相信你也会很崩溃，尤其是很多时候我还记忆模糊，很多记不住。这款插件刚好解决了我这个烦恼，极大地提高了生产力</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-29babf1c-45fa-4d85-8207-f4ceb223a6dc.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>使用起来也非常方便，直接进入你要诊断的方法和类，右键选择对应的命令，就会自动帮你生成了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-1149d6f7-8adb-4ccb-a2cf-20a6b5be7857.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="free-mybatis-plugin" tabindex="-1"><a class="header-anchor" href="#free-mybatis-plugin" aria-hidden="true">#</a> Free Mybatis plugin</h2><p>Mybatis 基本上是目前最主流的 ORM 框架了，相比于 hibernate 更加灵活，性能也更好。所以我们一般在 Spring Boot 项目中都会写对应的 mapper.java 和 mapper.xml。</p><p>那有了这款插件之后，两者就可以轻松关联起来。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-3767a506-85bf-4d8e-b6b8-29ab70702e53.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>比如，我这里要查看 ArticleMapper 的 xml，那么编辑器的行号右侧就会有一个向右的→，直接点击就跳转过去了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-41788473-f585-4a0f-916c-dc2e774960ae.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>想跳转回来的话，也是同样的道理，所以有了这款产检，mapper 和 xml 之间就可以自由切换了，丝滑。</p><h2 id="visualgc" tabindex="-1"><a class="header-anchor" href="#visualgc" aria-hidden="true">#</a> VisualGC</h2><p>这里给大家推荐一个 JVM 堆栈可视化工具，可以和 Intellij IDEA 深度集成——VisualGC。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-d0afa431-cd7d-4730-92c7-34ad4cdd5704.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当我们需要监控一个进程的时候，直接打开 VisualGC面板，就可以查看到堆栈和垃圾收集情况，可以说是一目了然。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-1a756f1a-fce4-4244-9e7b-77fb7473b1c6.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="checkstyle-idea" tabindex="-1"><a class="header-anchor" href="#checkstyle-idea" aria-hidden="true">#</a> CheckStyle-IDEA</h2><p>如果你比较追求代码规范的话，可以安装这个插件，它会提醒你注意无用导入、注释、语法错误❎、代码冗余等等。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-b55087c6-7210-4e88-9327-cc277db44c03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在 CheckStyle 面板中，你可以选择 Google 代码规范或者 sun 的代码规范，跑一遍检查，就可以看到所有的修改建议了。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/ide/shenji-chajian-10-7a095a0a-cae8-4a7a-a023-11f7e1abc5d7.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后" aria-hidden="true">#</a> 最后</h2><p>以上这 10 款 Intellij IDEA 插件也是我平常开发中经常用到的，如果大家有更好更效率的插件，也可以评论里留言。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/nice-article/weixin-rumrabbitmqzypjdg-53717e59-63c9-44bd-99d3-dd2c26fe68bb.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><hr>`,64),p={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},s=e("p",null,[a("微信搜 "),e("strong",null,"沉默王二"),a(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),e("strong",null,"222"),a(" 即可免费领取。")],-1),l=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function h(f,m){const i=d("ExternalLinkIcon");return n(),r("div",null,[b,e("p",null,[a("GitHub 上标星 7500+ 的开源知识库《二哥的 Java 进阶之路》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),e("a",p,[a("太赞了，GitHub 上标星 7500+ 的 Java 教程"),c(i)])]),s,l])}const u=t(g,[["render",h],["__file","shenji-chajian-10.html.vue"]]);export{u as default};
