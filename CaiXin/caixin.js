var RECaiXinHeader = $request.headers;
const RECaiXinHeaderData = new Array("Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 CaixinV5/7.9.3 deviceType/1","75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98GfuwdCSoFGavCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3weJX8ScnQWa0DazGHZI9zJH06ydDC95HRw4gDRG6sTOZXYsHz3aOmA5gPfHlEVeWghAAr62%2FReU5hMoPKa2FdNplRMBcOZJblVZ7cDlmUtfRvXGI5i6MQdUXbJZoaQKtLNdvd7BM99B%2BnJe6jryptBJORQGx8WllOI%2FFfok%2BDO5QiMaewwwP0B3bPpJ8v1aqzXPd0F8NvzqAE2akTE8oY8lskuvvu8cZaLx4y%2B03VYgwStGPTG7GChNdW3GOIWvKxlEg9kGQ%2F3oGsKZue56PGXXN4qxqCAfhLw4os8JcZ0voO6UzXXRGd3Lqza53JkPSK6m4EI3ZlVsqFyhV%2BbMxcn%2FBgCqdJYtDQDvEUXAl0hyNZSOlpLHytIZJaQazGyjHZ1L0EHGfXq13D9F7ckt9%2BM0LzQep1a6NyzQNW7SiAbx0jFFaV%2FTuFRw%3D%3D","UJB3Br1qRJGHpWcP2nIRymj7Y5SGeFCEb7TRahYudzGxsCpQu6hzMob2AvMnGrZBgPaORNHgWjo%3D",`COOKIE_VERSION=1; DEVICE_ID=699440d159f8b18216b678d3261c91afa3a8a444; SA_USER_DEVICE_TYPE=1; SA_USER_NICK_NAME=%E8%B4%A2%E6%96%B0%E7%BD%91%E5%8F%8B%41%58%66%67%53%37; SA_USER_UID=12781895; SA_USER_UNIT=1; SA_USER_USER_NAME=18888888888; UID=12781895; USER_LOGIN_CODE=32E5D890B2943C75BF9305AB1FBAE13B; ad_attr={"_attr_user":"1"}; appType=21; appinfo=75SU0e5TW70SSqRtJ%2FF6dN60qhTR%2FVmZTj9JQB4m3Uwq7sM2Mqb98GfuwdCSoFGavCTBaWVg8%2Fj2n6SeH%2FUGQiruwzYypv3weJX8ScnQWa0DazGHZI9zJH06ydDC95HRw4gDRG6sTOZXYsHz3aOmA5gPfHlEVeWghAAr62%2FReU5hMoPKa2FdNplRMBcOZJblVZ7cDlmUtfRvXGI5i6MQdUXbJZoaQKtLNdvd7BM99B%2BnJe6jryptBJORQGx8WllOI%2FFfok%2BDO5QiMaewwwP0B3bPpJ8v1aqzXPd0F8NvzqAE2akTE8oY8lskuvvu8cZaLx4y%2B03VYgwStGPTG7GChNdW3GOIWvKxlEg9kGQ%2F3oGsKZue56PGXXN4qxqCAfhLw4os8JcZ0voO6UzXXRGd3Lqza53JkPSK6m4EI3ZlVsqFyhV%2BbMxcn%2FBgCqdJYtDQDvEUXAl0hyNZSOlpLHytITYAM82l6akJuQuT4H0Xy%2FNh2xrHlsZ%2B7phJyQGb4vNCpbp4jTE9hhMjFFaV%2FTuFRw%3D%3D; avatar=https://getavatar.caixin.com/012/78/18/95_real_avatar_middle.jpg?t=1657526720151; gender=0; iOS_app_version=7932; iOS_app_version_str=7.9.3; isNightMode=0; support_channel=AppleAppStore; ENTITY_COUNT=1; FROM_CHINA=true; firstTime=1657526451751; lastTime=1657526451751; point=1657555199000; CX_FROM=null; ENTITY_ID=; GID30=1768670567; GUID=1768670567; T_GUID=1657526427221`);
RECaiXinHeader['User-Agent'] = RECaiXinHeaderData[0];
RECaiXinHeader['appinfo'] = RECaiXinHeaderData[1];
RECaiXinHeader['authentication'] = RECaiXinHeaderData[2];
RECaiXinHeader['Cookie'] = RECaiXinHeaderData[3];
var RECaiXinPath = $request.path.replace(/uid=\d+/,"uid=12781895").replace(/code=\w+/,"code=32E5D890B2943C75BF9305AB1FBAE13B").replace(/device=\w+/,"device=699440d159f8b18216b678d3261c91afa3a8a444");
$done({headers: RECaiXinHeader});
