# 网络请求

## 定义请求体

所有需要的网络请求全部定义在api.js文件中，例如：

```js
    /**
	 * mock请求示例
	 * 
	 */
	queryMockServer(){
		var args = {
			method: "get",
			url: 'api://user',
		};

		return new BusinessRequest().baseRequest(args);
	},

	/**
	 * 请求费用类别
	 * 
	 * @params 参数
	 * return object
	 */ 
	queryFeeCategory(params) {
		var args = {
			maskMsg: false,
			method: "post",
			url: 'api://flow_info_app', // 带api://会自动拼接baseurl
			parameter: {
				action: "loadbasedata"
			}
		};

		return new BusinessRequest().baseRequest(args);
	}
```
`api://`表示BaseUrl，它定义在config文件夹的dev.env.js文件（开发）和prod.env.js文件（生产）中

## 网络请求
在需要网络请求的页面中

1、引入HttpBusinessRequest
```js
import HttpBusinessRequest from "@/module/api/api.js";

```

2、编写请求

```js
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

> 注：
>
> 具体可以参考工程中的请求示例

