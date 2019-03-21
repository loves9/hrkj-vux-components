# 打包

首先执行：

```
npm run build
```

就能看到自动生成的`dist`文件夹

然后执行`Minxing-devtools`插件打包，会自动生成zip文件，此文件为最终发布文件。



# 其它

融讯通插件应用支持所有H5框架开发，但须满足以下目录结构

```
|-- plugin.properties       --插件配置文件
|-- /www                    --插件资源目录
    |-- index.html --html5应用入口文件
    |-- config.properties --html5应用配置文件
    |-- /images --图片目录（可选）
    |-- /styles --CSS样式目录（可选）
    |-- /scripts --JS脚本目录（可选）
```

打包需要VS Code插件`Minxing-devtools`，请自行在VS Code中安装，手动打包可能由于操作系统编码不同，输出的文件平台无法识别。
