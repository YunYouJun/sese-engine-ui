<p align='center'>
  <img style="background: white;" src='./public/sese-rimo-and-xiao-yun.png' alt='Sese Search Ui' />
</p>

<p align='center'>
<a href="http://sese.yyj.moe/">Live Demo (sese.yyj.moe)</a>
</p>

<br>

> [色色引擎](https://github.com/RimoChan/sese-engine)的 UI

Se 是 Search 的缩写，所以就是色色引擎。开始搜索就是「**开始色色**」（同时也与See谐音，就是看看的意思）。

## What is Sese?

色色搜索引擎是一个轻量级的搜索引擎，可以轻松部署在自己的个人服务器上。

> 具体见 [RimoChan/sese-engine](https://github.com/RimoChan/sese-engine)

### 相关链接

- 前端：<https://github.com/YunYouJun/sese-engine-ui>
- 后端：<https://github.com/RimoChan/sese-engine>

### 用处展望

熟练地使用谷歌等搜索引擎已经可以帮助我们解决大部分问题。
而「色色引擎」的特色则在于个人可控可部署，那么我想它的用途应该是自定义化。

譬如通过设置自定义的索引，只检索自己希望检索的站点。
对于个人站长来说，可以对自己的站点进行一个统合。
譬如我只希望通过此搜索所有我 `*.yunyoujun.cn`, `*.yyj.moe`, `*.elpsy.cn` 域名下的内容，作为自己资源的一个检索工具。

当然也可以一定程度去自定义自己的搜索界面。

目前我的想法大概是这样！更多搜索功能请去催促[莉沫酱](https://github.com/RimoChan/sese-engine)开发吧！

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness
- 完全靜態作成

## Usage

### 自定义部署

```bash
git clone https://github.com/YunYouJun/sese-engine-ui
cd sese-engine-ui
pnpm i
pnpm build
# dist
```

自定义 `.env` 文件中的 `VITE_API_URL` 以修改后端 URL

### 第三方托管

More info see [.github/workflows/gh-pages.yml](https://github.com/YunYouJun/sese-engine-ui/blob/main/.github/workflows/gh-pages.yml).

### [Google TagManager](https://tagmanager.google.com/)

设置 `src/modules/gtm.ts` 中 `createGtm({ id: 'GTM-PFF9NPT' })` 的容器 ID。

可通过代码添加[谷歌统计](https://analytics.google.com/)。

## Todo

- Setting Page
  - [ ] custom `baseUrl`

## FAQ

### 为什么不是 HTTPS ？

因为莉沫酱太懒了！

> 莉沫酱：**网站就是要不安全才好！

