# JS API

客户端提供了一些 JS 接口来调用 Native，如：相机、设置标题等等

工程中封装了一些调用 Native 的方法在 `native_plugin.js` 文件中，这个文件在工程初始化时已经注册，使用时直接调用就可以了

## Dialog 模块

#### Alert

```js
NativeApi.dialog.alert("请评价", "给个好评哦~", function() {
  // your code
});
```

#### Confirm

```js
NativeApi.dialog.confirm("请评价", "给个好评哦~", function(index) {
  // your code
});
```

## Navigation 模块

#### 使导航栏左侧按钮失效

```js
NativeApi.navigation.disableBackButton();
```

## Session 模块

#### 获取当前用户信息

```js
NativeApi.session.getUser((user) => {
  // your code
});
```

工程还封装了一些常用的 Native 方法：

```js
this.setTitle("页面标题"); // 设置页面标题
```

## 其它
> 更多方法请参考：
>
> [JS API Wiki](https://www.minxing365.com/docs/html5/jsapi/base.html)
