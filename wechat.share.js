// 微信jssdk
document.write("<script language=\"javascript\" src='http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js' > <\/script>"); 
document.write("<script language=\"javascript\" src=\"http:\/\/res.wx.qq.com\/open\/js\/jweixin-1.0.0.js\" > <\/script>"); 
function wechatShare(geUrl,title,desc,link,imgUrl) {
	$.ajax({
		 type: 'GET',  //这里用GET
		 url: getUrl,
		 dataType: 'json',  //类型
		 data : '',
		 // async: true,
		 // jsonp: 'callback', //jsonp回调参数，必需
		 success: function(res) { //返回的json数据 
			config = res;
			console.log(config);
			//  分享基础配置
			wx.config({
			debug: config.debug,
			appId: config.appId,
			timestamp: config.timestamp,
			nonceStr: config.nonceStr,
			signature: config.signature,
			jsApiList: config.jsApiList
			});

			//  分享基础配置
			wx.ready(function () {
				//分享给朋友内容设置
				 wx.onMenuShareAppMessage({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						// 用户确认分享后执行的回调函数
						// alert("分享成功");
					},
					cancel: function () { 
						// 用户取消分享后执行的回调函数
						// alert("分享失败，请重新尝试");
					}
				});
				  wx.onMenuShareTimeline({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						// 用户确认分享后执行的回调函数
					},
					cancel: function () { 
						// 用户取消分享后执行的回调函数
					}
				});
				 wx.onMenuShareQQ({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						// 用户确认分享后执行的回调函数
					},
					cancel: function () { 
						// 用户取消分享后执行的回调函数
					}
				});
				 wx.onMenuShareWeibo({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						// 用户确认分享后执行的回调函数
					},
					cancel: function () { 
						// 用户取消分享后执行的回调函数
					}
				});
				 wx.onMenuShareQZone({
					title: title, // 分享标题
					desc: desc, // 分享描述
					link: link, // 分享链接
					imgUrl: imgUrl, // 分享图标
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function () { 
						// 用户确认分享后执行的回调函数
					},
					cancel: function () { 
						// 用户取消分享后执行的回调函数
					}
				});
			});



		 },
		 error:function(res){
			load = false;
		 }
	});
}