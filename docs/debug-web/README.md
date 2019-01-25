# 真机调试

## 安装调试插件
安装vs code插件`Minxing-devtools`，安装成功后重载vs code。

## 远程调试
1、工程运行起来之后，点击vs code下方工具栏ip地址，点击后会自动弹出一个二维码，如果本机拥有多个IP，选择下拉按钮可以选择对应的二维码（也可使用快捷键Ctrl+Shift+P/Fn+F1，打开命令窗口，输入minxing,选择查看IP和端口）

![image](/t-erweima.png)

2、使用融讯通扫描二维码，手机会自动打开连接页面并自动输入IP和端口号，点击连接即可。

3、连接成功后，VSCode软件会出现手机的IP以及连接数。

4、使用快捷键Ctrl+Shift+P/Fn+F1打开命令窗口，输入minxing，第一次同步必须使用wifi全量同步，修改代码之后再次同步使用wifi增量同步即可，执行命令成功后会出现同步成功的提示框，可在手机端查看效果。

### 注：wifi web页面预览时，电脑应和手机在同一WiFi下，选择录入的URL应是你起的服务的地址和端口。

![image](/t-webView.png)

> 其它相关调试请参考：[调试 Wiki](https://www.minxing365.com/docs/html5/ide/VSCode/debugPrepare.html)