<div align="center">
<h1 align="center">Node Link Check<br>代理链路检测<h1>
<p align="center" color="#6a737d"><p>
<h3 align="center">2.0重构开源版<h3>
<h3 align="center">支持Surge(有点问题)、QuantumultX、Loon<h3>
<br>
</div>
<b>使用方式：</b>
  
❶ 使用 Sub-Store 正常订阅节点，但在最下方的 <b>节点操作</b> 中选择 <b>脚本操作</b> 并选择 <b>链接</b> 添加 <b>下方链接</b>
```

https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/NodeLinkCheck/Sub-Store/Operator.js
```

❷ 添加对应内容
  
Surge模块:

```

https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/NodeLinkCheck/Surge.sgmodule
```
  
QuantumultX配置文件[task_local]下粘贴:

```

event-interaction https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/NodeLinkCheck/Script/NodeLinkCheck.js, tag=Env代理链路检测, img-url=https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Stack.png, enabled=true

```
  
Loon引用插件:

```
https://raw.githubusercontent.com/I-am-R-E/Functional-Store-Hub/Master/NodeLinkCheck/Loon.plugin
```

❸ 引用 Sub-Store 处理后的订阅
 
🎉 你可以在这里找到使用方法和注意事项: [Functional Store Hub 频道](https://t.me/Functional_Store_Hub)
 
😀 如果你想反馈问题,你可以直接在Github上提交issues或者加入[Functional Store Hub Discussion 群组](https://t.me/Functional_Store_Hub_Discussion)找到我

