# 概述

融讯通H5插件应用是利用html5插件技术，将应用静态文件预置在App中，可以极大地提高html5应用的响应速度，也为HTML5开发提供了大量的JS内置接口，给html5开发提供了大量原生操作能力。

# 其它

融讯通插件应用支持所有H5框架开发，但须满足以下目录结构

```
|-- plugin.properties       --敏行插件配置文件
|-- /www                    --敏行插件资源目录
    |-- index.html --html5应用入口文件
    |-- config.properties --html5应用配置文件
    |-- /images --图片目录（可选）
    |-- /styles --CSS样式目录（可选）
    |-- /scripts --JS脚本目录（可选）
```

打包需要minxing的打包插件，手动打包可能由于操作系统编码不同，输出的文件敏行平台无法识别。

#### 学习参考资料

vue官网：[https://cn.vuejs.org/](https://cn.vuejs.org/)

vux参考：[https://doc.vux.li/zh-CN/](https://doc.vux.li/zh-CN/)

webpack参考：[https://segmentfault.com/a/1190000006178770](https://segmentfault.com/a/1190000006178770)

