<?php
require_once "./Config.php";
require_once "./jssdk.php";

$urls = $_SERVER['HTTP_REFERER'];

$jssdk = new JSSDK(Config::AppID, Config::AppSecret, $urls);
$signPackage = $jssdk->GetSignPackage();

$wechatDebug=Config::Debug;

$array = array(
  'debug'=>$wechatDebug===1?true:false,
  'appId'=>$signPackage["appId"],
  'timestamp'=>$signPackage["timestamp"],
  'nonceStr'=>$signPackage["nonceStr"],
  'signature'=>$signPackage["signature"],
  'jsApiList'=>array('onMenuShareAppMessage','onMenuShareTimeline')
);
echo json_encode($array);
exit();
?>
