# 开始

## 安装脚手架

安装华融科技脚手架，全局安装执行：

```
npm install hrkj-cli -g
```

## 下载工程

安装脚手架成功后，创建工程执行：

```
hrkj create <your project name>
```

输入工程名字就自动创建工程了。

> 注意：
>
> 工程会自动下载到当前目录下

## 初始化工程

初始化工程执行：

```
npm install
```

npm会根据`package.json`中的配置自动下载各个依赖包，下载成功后执行：

```
npm run dev 或 npm run mockdev
```

成功后在浏览器中输入 localhost:8080 查看效果。`npm run dev` 可实时监控代码变更实现自动刷新页面。enjoy it!
