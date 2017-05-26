/**
 * Created by wangc on 2017/5/15.
 * SnapShot extension
 */
//  active 标签是指当前标签
//  query   返回一个tab对象           chrome extension https://developer.chrome.com/extensions
//  
//
//
//
//
//
//
//

document.getElementById('snapshoot').onclick = function(){

    //获取活动标签
    chrome.tabs.query ({
       //active: true
    },function(urls_array)  {

        var urls = new Array();

        for(var i=0;i<urls_array.length;i++)
        {
            //console.log(urls_array[i]);
            console.log(urls_array[i].url);
            //localStorage.urls_array[i] = urls_array[i].url;                                   //存储活动标签        http://www.jianshu.com/p/39ba41ead42e
            console.log(urls_array[i]);
            urls[i] = urls_array[i].url;
            console.log(urls[i]);
            localStorage.setItem(i,urls[i]);                                                    //
            //localStorage.urls[i] = urls[i];

        }
        //localStorage.urls = urls;
        console.log(localStorage.urls);
        console.log(localStorage.length);
        console.log(localStorage.length);
    });

}

document.getElementById('recovery').onclick = function(){


    //var urls_array = localStorage.urls_array;                                  //读取 url 数组

    //console.log(urls_array);

    for(var i=0;i<localStorage.length;i++)
    {
        chrome.tabs.create({
        url: localStorage.getItem(i),
        active: true,
    });
    //console.log(localStorage.getItem("url"));
    }
}


//chrome.browserAction.setBadgeBackgroundColor({color: '#0000FF'});           //设置 badge 背景色
//chrome.browserAction.setBadgeText({text:''});                               //设置 badge 字体（仅能显示4个字节）














