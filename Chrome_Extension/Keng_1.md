
## 如何找到url  

参考: google官方文档: https://developer.chrome.com/extensions/api_index  

方法: chrome.tabs.query  
类型：标签对象，注：在这里并没有返回类型，应该用到一个回调函数来处理返回的对象  
用法： chrome.tabs.query({property},function(tabs){});  
```
chrome.tabs.query ({
       //active: true
    },function(urls_array)  {

        var urls = new Array();

        for(var i=0;i<urls_array.length;i++)
        {
            urls[i] = urls_array[i].url;                                         
        }
        localStorage.setItem("Json",JSON.stringify(urls));
    
    });
```


## localStorage的坑   
参考:http://www.jianshu.com/p/39ba41ead42e  
方法： 
> - localStorage.setItem("name","string")  
> - localStorage.name = "string"      //存储，name为键值,string为存储内容
> - localStorage.getItem("name")  
> - localStorage.key(i)               //读取第i条数据   

localStorage仅能存储字符串,也就是说在存储数据之前应当把数据转化成字符串，

setItem问题

 //localStorage.urls_array[i] = urls_array[i].url;                                   //存储活动标签  




## json的眼前一亮   
参考:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

两个方法，开阔了思路

