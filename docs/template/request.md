# 网络请求

具体可以参考工程中的请求示例，请求体全部定义在api.js文件中

```
// 定义请求体
let request = HttpBusinessRequest.queryMockServer();
request.complete = () => {
    console.log("complete");
};

request.success = (data, status, xhr) => {
    console.log(data);
};

request.error = (data, status, xhr) => {
    console.log(data);
};
// 发送请求
request.send();
```



