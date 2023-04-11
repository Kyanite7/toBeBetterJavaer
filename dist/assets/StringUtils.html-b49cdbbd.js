import{_ as p,W as e,X as o,Y as n,a0 as s,Z as t,a1 as c,C as l}from"./framework-bb7be5cb.js";const i={},u=n("h1",{id:"_9-3-stringutils工具类",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_9-3-stringutils工具类","aria-hidden":"true"},"#"),s(" 9.3 StringUtils工具类")],-1),r=n("code",null,"字符串",-1),k={href:"https://tobebetterjavaer.com/string/immutable.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://tobebetterjavaer.com/string/split.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tobebetterjavaer.com/string/equals.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tobebetterjavaer.com/string/join.html",target:"_blank",rel:"noopener noreferrer"},g=c(`<p>如果只用 String 类提供的那些方法，我们需要手写大量的额外代码，不然容易出现各种异常。</p><p>现在有个好消息是：<code>org.apache.commons.lang3</code>包下的<code>StringUtils</code>工具类，给我们提供了非常丰富的选择。</p><p>Maven 坐标：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
    &lt;artifactId&gt;commons-lang3&lt;/artifactId&gt;
    &lt;version&gt;3.12.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>StringUtils 提供了非常多实用的方法，大概有下图的四页到五页，我只截了两页，实在是太多了。</p><figure><img src="https://cdn.tobebetterjavaer.com/stutymore/StringUtils-20230330111122.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>接下来，我们来拿一些常用的方法举例说明。</p><h3 id="字符串判空" tabindex="-1"><a class="header-anchor" href="#字符串判空" aria-hidden="true">#</a> 字符串判空</h3><p>其实空字符串，不只是 null 一种，还有&quot;&quot;，&quot; &quot;，&quot;null&quot;等等，多种情况。</p><p>StringUtils 给我们提供了多个判空的静态方法，例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token string">&quot;abc&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;=====&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">true</span>
<span class="token boolean">true</span>
<span class="token boolean">false</span>
<span class="token boolean">false</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token boolean">false</span>
<span class="token boolean">false</span>
<span class="token boolean">true</span>
<span class="token boolean">true</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token boolean">true</span>
<span class="token boolean">true</span>
<span class="token boolean">true</span>
<span class="token boolean">false</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
<span class="token boolean">false</span>
<span class="token boolean">false</span>
<span class="token boolean">false</span>
<span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例中的：<code>isEmpty</code>、<code>isNotEmpty</code>、<code>isBlank</code>和<code>isNotBlank</code>，这 4 个判空方法你们可以根据实际情况使用。</p><p>优先推荐使用<code>isBlank</code>和<code>isNotBlank</code>方法，因为它会把<code>&quot; &quot;</code>也考虑进去。</p><h3 id="分隔字符串" tabindex="-1"><a class="header-anchor" href="#分隔字符串" aria-hidden="true">#</a> 分隔字符串</h3><p>分隔字符串是常见需求，如果直接使用 String 类的 split 方法，就可能会出现空指针异常。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>str1<span class="token punctuation">,</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">null</span>
<span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NullPointerException</span>
\\tat <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>sue<span class="token punctuation">.</span>jump<span class="token punctuation">.</span>service<span class="token punctuation">.</span>test1<span class="token punctuation">.</span></span>UtilTest</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">UtilTest</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 StringUtils 的 split 方法会返回 null，而使用 String 的 split 方法会报指针异常。</p><h3 id="判断是否纯数字" tabindex="-1"><a class="header-anchor" href="#判断是否纯数字" aria-hidden="true">#</a> 判断是否纯数字</h3><p>给定一个字符串，判断它是否为纯数字，可以使用<code>isNumeric</code>方法。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">&quot;123q&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">&quot;0.33&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">true</span>
<span class="token boolean">false</span>
<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将集合拼接成字符串" tabindex="-1"><a class="header-anchor" href="#将集合拼接成字符串" aria-hidden="true">#</a> 将集合拼接成字符串</h3><p>有时候，我们需要将某个集合的内容，拼接成一个字符串，然后输出，这时可以使用<code>join</code>方法。例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Lists</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list2 <span class="token operator">=</span> <span class="token class-name">Lists</span><span class="token punctuation">.</span><span class="token function">newArrayList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>list2<span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他方法" tabindex="-1"><a class="header-anchor" href="#其他方法" aria-hidden="true">#</a> 其他方法</h3><p>这里再列举一些，其他的方法可以自己去研究一下。</p><ul><li><code>trim(String str)</code>：去除字符串首尾的空白字符。</li><li><code>trimToEmpty(String str)</code>：去除字符串首尾的空白字符，如果字符串为 null，则返回空字符串。</li><li><code>trimToNull(String str)</code>：去除字符串首尾的空白字符，如果结果为空字符串，则返回 null。</li><li><code>equals(String str1, String str2)</code>：比较两个字符串是否相等。</li><li><code>equalsIgnoreCase(String str1, String str2)</code>：比较两个字符串是否相等，忽略大小写。</li><li><code>startsWith(String str, String prefix)</code>：检查字符串是否以指定的前缀开头。</li><li><code>endsWith(String str, String suffix)</code>：检查字符串是否以指定的后缀结尾。</li><li><code>contains(String str, CharSequence seq)</code>：检查字符串是否包含指定的字符序列。</li><li><code>indexOf(String str, CharSequence seq)</code>：返回指定字符序列在字符串中首次出现的索引，如果没有找到，则返回 -1。</li><li><code>lastIndexOf(String str, CharSequence seq)</code>：返回指定字符序列在字符串中最后一次出现的索引，如果没有找到，则返回 -1。</li><li><code>substring(String str, int start, int end)</code>：截取字符串中指定范围的子串。</li><li><code>replace(String str, String searchString, String replacement)</code>：替换字符串中所有出现的搜索字符串为指定的替换字符串。</li><li><code>replaceAll(String str, String regex, String replacement)</code>：使用正则表达式替换字符串中所有匹配的部分。</li><li><code>join(Iterable&lt;?&gt; iterable, String separator)</code>：使用指定的分隔符将可迭代对象中的元素连接为一个字符串。</li><li><code>split(String str, String separator)</code>：使用指定的分隔符将字符串分割为一个字符串数组。</li><li><code>capitalize(String str)</code>：将字符串的第一个字符转换为大写。</li><li><code>uncapitalize(String str)</code>：将字符串的第一个字符转换为小写。</li></ul><hr>`,35),b={href:"https://tobebetterjavaer.com/overview/",target:"_blank",rel:"noopener noreferrer"},S=n("p",null,[s("微信搜 "),n("strong",null,"沉默王二"),s(" 或扫描下方二维码关注二哥的原创公众号沉默王二，回复 "),n("strong",null,"222"),s(" 即可免费领取。")],-1),f=n("figure",null,[n("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function h(q,y){const a=l("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[r,s("（"),n("a",k,[s("String"),t(a)]),s("）在我们的日常工作中，用得非常非常非常多。")]),n("p",null,[s("在我们的代码中经常需要对字符串判空，截取字符串、转换大小写、"),n("a",d,[s("分隔字符串"),t(a)]),s("、"),n("a",m,[s("比较字符串"),t(a)]),s("、去掉多余空格、"),n("a",v,[s("拼接字符串"),t(a)]),s("、使用正则表达式等等。")]),g,n("p",null,[s("GitHub 上标星 7500+ 的开源知识库《二哥的 Java 进阶之路》第一版 PDF 终于来了！包括Java基础语法、数组&字符串、OOP、集合框架、Java IO、异常处理、Java 新特性、网络编程、NIO、并发编程、JVM等等，共计 32 万余字，可以说是通俗易懂、风趣幽默……详情戳："),n("a",b,[s("太赞了，GitHub 上标星 7500+ 的 Java 教程"),t(a)])]),S,f])}const j=p(i,[["render",h],["__file","StringUtils.html.vue"]]);export{j as default};
