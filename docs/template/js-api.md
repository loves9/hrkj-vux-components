# JS API

客户端提供了一些JS接口来调用native，如：相机、设置标题等等

工程中封装了一些敏行的方法在 `native_plugin.js` 文件中，这个文件在工程初始化时已经加载，使用时只需这样写，例如调用native 弹窗

```
 NativeApi.dialog.alert('请评价', '给个好评哦~', function() {
    // your code
 });
```

工程还封装了一些常用的native方法：

```
this.setTitle('页面标题') // 设置页面标题


```

> 更多方法请参考：[JS API Wiki](https://www.minxing365.com/docs/html5/jsapi/base.html)

