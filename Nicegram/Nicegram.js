/*
脚本功能：解锁Nicegram会员
支持版本：商店最新 1.0.7
更新时间：2023.10.10
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，禁止转载与贩卖！⚠️⚠️⚠️
*/

const a=typeof $task!='undefined';
const b=typeof $httpClient!='undefined';
if(b){
  console['log']('\x0aRE\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎');
  $done({'response':{'status':0xc8,'body':'{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}'}});
}else if(a){
  console['log']('\x0aRE\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎');
  $done({'status':'HTTP/1.1\x20200\x20OK','headers':{'Content-Type':'application/json'},'body':'{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}'});
}else{
  console['log']('\x0aRE\x20Nicegram\x20Script\x20Log:\x0aNicegram\x20Premium已解锁😎');$done({'status':0xc8,'body':'{\x22data\x22:\x20{\x22premiumAccess\x22:\x20true}}'});
}
