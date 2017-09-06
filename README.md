#### PHP微信简单分享组件
##### 前端配置
- 首先你需要把js文件引用到页面里
- 然后只需要在html文件中设置好分享的标题、描述、图片、链接
- 最后调用wechatShare(getUrl,title,prdKeyword,link,imgUrl)方法即可
```
var getUrl = "http://www.yinzp.com/share/share.php";  // 请求的服务器链接
var title = "挺拔 TIBHAR 乒乓底板 陈建安7 CCA7 7层纯木底板";  // 分享标题
var prdKeyword = "挺拔 TIBHAR 乒乓底板 陈建安7 CCA7 7层纯木底板";   // 分享描述
var imgUrl = "http://www.yinzp.com/share/2016062854350810.jpg";  // 分享图标
var link = window.location.href;    // 分享链接
wechatShare(getUrl,title,prdKeyword,link,imgUrl)
```

##### 后端配置
- 首先把jssdk.php Config.php share.php 这三个文件引用到项目里
- 修改Config.php文件里的AppID、AppSecret、调试状态
- 最后这里share.php的访问路径就是前端的请求地址(getUrl)

##### 配置jssdk安全域名
- 最后别忘了在公众号里设置下jssdk安全域名


