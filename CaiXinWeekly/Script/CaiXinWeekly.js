/*
脚本功能：解锁财新周刊会员
脚本作者：R·E
支持版本：商店最新 4.0.6
下载地址：https://apps.apple.com/cn/app/%E8%B4%A2%E6%96%B0%E5%91%A8%E5%88%8A/id391959946
更新时间：2022.07.12
问题反馈：https://t.me/Functional_Store_Hub
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，禁止转载与贩卖！⚠️⚠️⚠️
*/
const _0x6bf4fd='//ipadcms.caixin.com/api/article/';const _0x1e4d47='//ipadcms.caixin.com/tmp/articles/';const _0x41f70a='//ipadcms.caixin.com/power/myfree/';const _0x4b9f79='//ipadcms.caixin.com/power/myfreev3/';var _0x2b77dd=$request['url'];var _0x164874=$response['body'];if(_0x2b77dd['indexOf'](_0x6bf4fd)!=-0x1||_0x2b77dd['indexOf'](_0x1e4d47)!=-0x1){_0x164874=_0x164874['replace'](/\"isfree\":0/g,'\x22isfree\x22:1');}if(_0x2b77dd['indexOf'](_0x41f70a)!=-0x1){_0x164874='{\x22info\x22:[{\x22type\x22:2,\x22subscriptDescription\x22:\x22通过财新通兑换码白嫖\x22,\x22uid\x22:null,\x22endtime\x22:1893427200,\x22magazineid\x22:1000,\x22starttime\x22:1656604800}],\x22list\x22:[{\x22UID\x22:null,\x22END_DT\x22:1893427200,\x22subscriptDescription\x22:\x22通过财新通兑换码白嫖\x22,\x22MAGAZINEID\x22:1000,\x22START_DT\x22:1656604800,\x22TYPE\x22:2,\x22ID\x22:null}]}';}if(_0x2b77dd['indexOf'](_0x4b9f79)!=-0x1){_0x164874='{\x22msg\x22:\x22success\x22,\x22data\x22:{\x22flag\x22:true,\x22list\x22:[{\x22goodsTypeId\x22:20,\x22goodsCode\x22:\x22TAG\x22,\x22permanent\x22:0,\x22list\x22:[{\x22endTime\x22:\x222030-01-01\x2000:00:00\x22,\x22startTime\x22:\x222022-07-01\x2000:00:00\x22,\x22status\x22:1}]},{\x22goodsTypeId\x22:11,\x22goodsCode\x22:\x22QZSF\x22,\x22permanent\x22:0,\x22list\x22:[{\x22endTime\x22:\x222030-01-01\x2000:00:00\x22,\x22startTime\x22:\x222022-07-01\x2000:00:00\x22,\x22status\x22:1}]}]},\x22code\x22:0}';}console['log']('\x0aR·E\x20CaiXinWeekly\x20Script\x20Log:\x0a😎财新周刊已解锁到2030年');$done({'body':_0x164874});
