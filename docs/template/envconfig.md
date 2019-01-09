# 环境配置和前期准备

#### 1.安装nodejs

vue插件应用工程是通过npm构建的，所以需要安装nodejs，安装后就可以使用npm了，安装相关问题请参考网上的安装教程。

官网地址：[https://nodejs.org/en/](https://nodejs.org/en/)

> 注：nodejs版本需8.0以上

#### 2.安装IDE

推荐使用 **Visual Studio Code** \(如何评价VSCode：[https://www.zhihu.com/question/29984607](https://www.zhihu.com/question/29984607)\)开发，VSCode不仅使用方便，里面有minxing（敏行）开发插件，后期调试、打包等都会用到，安装相关问题请参考网上的安装教程或者参考：

[https://www.minxing365.com/docs/html5/ide/VSCode/setupSoft.html](https://www.minxing365.com/docs/html5/ide/VSCode/setupSoft.html)

#### 3.建立工程

* **已有工程**

svn或git拉取工程后执行：

```
npm install
```

npm会自动下载各个依赖包，然后执行：

```
npm run dev
```

成功后在浏览器中输入 localhost:8080 查看效果。

* **新建工程**

安装华融科技脚手架，全局安装执行：

```
npm install hrkj-cli@1.0.2 -g
```

安装脚手架成功后，创建工程执行：

```
hrkj create <your project name>
```

输入工程名字就自动创建工程了。

初始化工程执行：

```
npm install
```

npm会根据`package.json`中的配置自动下载各个依赖包，下载成功后执行：

```
npm run dev 或 npm run mockdev
```

成功后在浏览器中输入 localhost:8080 查看效果。`npm run dev` 可实时监控代码变更实现自动刷新页面。

> 注：
>
> 所有依赖包和相关模块都在`package.json`文件中（包括vue、webpack、等等），开发时可根据自身项目需要修改依赖。
>
> 在融讯通发布H5插件应用需要遵循融讯通平台规则，所以尽量使用模板（或minxing插件）新建工程，以防上传到平台后无法识别。
