import{_ as n,p as s,o as a,c,C as m,g as d,b as o,e}from"./app-d537ed34.js";const _="/assets/sese-rimo-and-xiao-yun-c950ff94.png",b={class:"markdown-body max-w-800px prose prose-sm m-auto text-left"},f=m('<p align="center"><img src="'+_+`" alt="Sese Search UI"></p><p align="center"><a href="http://sese.yyj.moe/">Live Demo (sese.yyj.moe)</a></p><br><blockquote><p><a href="https://github.com/RimoChan/sese-engine" target="_blank" rel="noopener">色色引擎</a>的 UI</p></blockquote><p>Se 是 Search 的缩写，所以就是色色引擎。开始搜索就是「<strong>开始色色</strong>」。</p><h2>What is Sese?</h2><p>色色搜索引擎是一个轻量级的搜索引擎，可以轻松部署在自己的个人服务器上。</p><blockquote><p>具体见 <a href="https://github.com/RimoChan/sese-engine" target="_blank" rel="noopener">RimoChan/sese-engine</a></p></blockquote><h3>相关链接</h3><ul><li>前端：<a href="https://github.com/YunYouJun/sese-engine-ui" target="_blank" rel="noopener">https://github.com/YunYouJun/sese-engine-ui</a></li><li>后端：<a href="https://github.com/RimoChan/sese-engine" target="_blank" rel="noopener">https://github.com/RimoChan/sese-engine</a></li></ul><h3>用处展望</h3><details open><summary>莉沫酱的想法</summary><p>大家平时都会用百度和谷歌来搜索资料吧。不过大家有没有怀疑过，也许它们不那么可信？</p><p>百度很坏，之前也有和竞价排名相关的丑闻。谷歌好一点，它说它不作恶，但我也不完全相信它，毕竟每个人的善恶观本身就不同。我想，它们或多或少都藏起了一些什么。</p><p>那怎么办呢？</p><p>我发明了强大并且安全的sese-engine。它是一个轻量级的搜索引擎，可以快速部署在个人电脑上。</p><p>sese-engine通过爬取互联网上的数据，在本地建立各个网页的索引。这样一来，你就有了自己的搜索引擎，可以在本地直接搜索互联网上的信息。你也可以修改你的爬取和搜索配置，让搜索的结果能满足个性化的需求。</p><p>数据即未来，我们的未来要掌握在自己手中。</p></details><details open><summary>云游君的想法</summary> 熟练地使用谷歌等搜索引擎已经可以帮助我们解决大部分问题。 而「色色引擎」的特色则在于个人可控可部署，那么我想它的用途应该是自定义化。 <p>譬如通过设置自定义的索引，只检索自己希望检索的站点。 对于个人站长来说，可以对自己的站点进行一个统合。 譬如我只希望通过此搜索所有我 <code>*.yunyoujun.cn</code>, <code>*.yyj.moe</code>, <code>*.elpsy.cn</code> 域名下的内容，作为自己资源的一个检索工具。</p><p>当然也可以一定程度去自定义自己的搜索界面。</p><p>目前我的想法大概是这样！更多搜索功能请去催促<a href="https://github.com/RimoChan/sese-engine" target="_blank" rel="noopener">莉沫酱</a>开发吧！</p></details><h2>Features</h2><ul><li>⚡️ <a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener">Vue 3</a>, <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener">Vite 2</a>, <a href="https://pnpm.js.org/" target="_blank" rel="noopener">pnpm</a>, <a href="https://github.com/evanw/esbuild" target="_blank" rel="noopener">ESBuild</a> - born with fastness</li><li>完全靜態作成</li></ul><h2>Usage</h2><h3>自定义部署</h3><pre class="language-bash"><code class="language-bash"><span class="token function">git</span> clone https://github.com/YunYouJun/sese-engine-ui
<span class="token builtin class-name">cd</span> sese-engine-ui
<span class="token function">pnpm</span> i
<span class="token function">pnpm</span> build
<span class="token comment"># dist</span>
</code></pre><p>自定义 <code>.env</code> 文件中的 <code>VITE_API_URL</code> 以修改后端 URL</p><h3>第三方托管</h3><p>More info see <a href="https://github.com/YunYouJun/sese-engine-ui/blob/main/.github/workflows/gh-pages.yml" target="_blank" rel="noopener">.github/workflows/gh-pages.yml</a>.</p><h3><a href="https://tagmanager.google.com/" target="_blank" rel="noopener">Google TagManager</a></h3><p>设置 <code>src/modules/gtm.ts</code> 中 <code>createGtm({ id: &#39;GTM-PFF9NPT&#39; })</code> 的容器 ID。</p><p>可通过代码添加<a href="https://analytics.google.com/" target="_blank" rel="noopener">谷歌统计</a>。</p><h3>添加至网站搜索</h3><p><code>Chrome 浏览器</code> -&gt; <code>设置</code> -&gt; <code>搜索引擎</code> -&gt; <code>管理搜索引擎和网站搜索</code> -&gt; <code>网站搜索</code> -&gt; <code>添加</code>:</p><ul><li>搜索引擎：<code>色色引擎</code></li><li>快捷字词：<code>sese</code></li><li>网址格式：<code>https://sese.yyj.moe/search?q=%s</code></li></ul><p>以后使用浏览器只要先输入 <code>sese</code>，再输入 <code>关键词</code>，就可以快速切换为色色引擎搜索啦！</p><h2>Todo</h2><ul><li>Setting Page <ul><li>[ ] custom <code>baseUrl</code></li></ul></li></ul><h2>FAQ</h2><h3>为什么<s>不</s>是 HTTPS ？</h3><p>因为莉沫酱太懒了！</p><blockquote><p>莉沫酱：<s>**网站就是要不安全才好！</s></p></blockquote><p>最后，莉沫酱屈服在了我的淫威之下，还是加上了 HTTPS。</p>`,35),k=[f],y={__name:"README",setup(r,{expose:t}){return t({frontmatter:{meta:[]}}),s({meta:[]}),(u,h)=>(a(),c("div",b,k))}},x=n(y,[["__file","/home/runner/work/sese-engine-ui/sese-engine-ui/README.md"]]),w={class:"markdown-body max-w-800px prose prose-sm m-auto text-left"},A=e("br",null,null,-1),R=e("div",{class:"text-center"},[e("h2",{m:"t-4"},"About")],-1),v=e("br",null,null,-1),E="About",T=[{property:"og:title",content:"About"}],p={__name:"about",setup(r,{expose:t}){return t({frontmatter:{title:"About",meta:[{property:"og:title",content:"About"}]}}),s({title:"About",meta:[{property:"og:title",content:"About"}]}),(u,h)=>{const g=x;return a(),c("div",w,[A,R,d(g),v])}}};typeof o=="function"&&o(p);const j=n(p,[["__file","/home/runner/work/sese-engine-ui/sese-engine-ui/src/pages/about.md"]]);export{j as default,T as meta,E as title};
