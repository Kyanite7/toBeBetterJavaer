import{_ as o,W as n,X as i,Y as e,a0 as t,Z as r,a1 as s,C as g}from"./framework-bb7be5cb.js";const b={},c=e("p",null,"购买域名可以通过多个服务商，比如说阿里云、百度云、腾讯云。",-1),l={href:"https://tobebetterjavaer.com/",target:"_blank",rel:"noopener noreferrer"},p=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-02.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m={href:"https://tobebetterjavaer.com/szjy/buy-cloud-server.html",target:"_blank",rel:"noopener noreferrer"},j=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-03.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),d={href:"https://tobebetterjavaer.com/szjy/install-baota-mianban.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://tobebetterjavaer.com/nginx/nginx.html",target:"_blank",rel:"noopener noreferrer"},_=s('<figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-04.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>我想做什么呢？</p><p><strong>我希望可以通过域名直接访问而不是 IP</strong>！</p><p>直接在浏览器地址栏里输入域名访问肯定是不行的。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>那该怎么办呢？</p><p>进行<strong>域名解析</strong>。当我们购买了一台云服务器后，系统会默认给这台服务器分配一个已经绑定的 IP 地址。但由于 IP 地址是由数组组成的，不方便记忆，所以就使用域名来代替。</p><p>那<strong>域名解析</strong>就是把域名指向网站的 IP 地址，让用户通过域名就可以访问到网站的一种服务。</p><p>阿里云是通过云解析 DNS 提供域名解析服务的。DNS，全称 Domain Name System，也就是域名系统，是一个将域名和IP地址相互映射的分布式数据库，以便用户访问互联网。</p><p>云解析 DNS 支持 A、AAAA 、CNAME 等记录类型。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>进入域名控制台，选择要解析的域名，点击「解析」会跳转到解析设置页面。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>直接点击「新手指导」按钮，填写服务器的 IP 地址。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>该方法可以同时添加 www 和 @ 记录，成功后，可以通过带 www 和不带 www 的方式访问网站。</p><figure><img src="https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),u={href:"https://tobebetterjavaer.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://tobebetterjavaer.com/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"TTL 为缓存时间，数值越小，表示修改记录生效的时间越快，默认为10分钟。",-1),y=e("p",null,"记得对域名进行实名认证，认证通过后（否则域名会处于锁定状态 serverhold），再次刷新页面，就可以访问成功了！",-1),x=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/szjy/tobebetterjavaer-yuming-jiexi-10.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),z=e("p",null,"nice！",-1),w=e("figure",null,[e("img",{src:"https://cdn.tobebetterjavaer.com/tobebetterjavaer/images/gongzhonghao.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1);function k(N,I){const a=g("ExternalLinkIcon");return n(),i("div",null,[c,e("p",null,[t("我这里以阿里云为例，购入一个 "),e("a",l,[t("tobebetterjavaer.com"),r(a)]),t(" 的域名（寓意 Java程序员进阶之路）。")]),p,e("p",null,[t("在此之前呢，我已经购买了一台阿里云的服务器，2核4G内存的轻量级云服务器。就是"),e("a",m,[t("上次带大家白票的那波"),r(a)]),t("，我自己也购入了一台。")]),j,e("p",null,[t("这台服务器上目前已经安装了"),e("a",d,[t("宝塔面板"),r(a)]),t("、"),e("a",f,[t("Nginx"),r(a)]),t("，并且可以通过 IP 地址成功访问 80 端口。")]),_,e("ul",null,[e("li",null,[t("主机记录 @ 表示可以直接通过不带 www 的域名访问，也就是 "),e("a",u,[t("tobebetterjavaer.com"),r(a)]),t("；")]),e("li",null,[t("主机记录 www 表示可以带 www 的域名访问，也就是 "),e("a",h,[t("www.tobebetterjavaer.com"),r(a)])])]),v,y,x,z,w])}const A=o(b,[["render",k],["__file","buy-domain.html.vue"]]);export{A as default};
