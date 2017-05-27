
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

`localStorage.urls_array[i] = urls_array[i].url;                                   //存储活动标签`   
 这样存储会报错，报错在 i 那里，但在采取了 localStorage.setItem(i,urlr[i])便没有了错误    
 

## json的眼前一亮   
参考:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify   
采取上述的数据存储方式，仅能在每一条存储一条url，前面的键值为数组序号，这样当存储多个窗口的url信息时就不便于区分，   
因此便想到了用json，这样就能在一条数据内存储当前窗口的url信息了；  

`localStorage.setItem("Json",JSON.stringify(urls));`   

json作为一种数据格式在这里是灰常方便的，这样便能把各种数据转换成json格式然后存储了，标签对象也能够存储进去了;  
这样主要是能够借助 JSON.parse()方法恢复原来的数据格式;  

`urls = JSON.parse(localStorage.getItem("Json"));` 

## one interesting thing  
当采取第一种方式进行存储时，当进行多个窗口url的截取时，0,1,2等并不会被覆盖，而是i在最近一次的值+1，这样还是蛮有趣的!!!


