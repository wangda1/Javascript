/**
 * Created by wangc on 2017/5/15.
 * SnapShot extension
 */
//  javascript1.1版本，主要是在1.0版本中用到数组的方法存储，这样不便于存储多个窗口的标签，于是在1.1版本中采取了转换成json格式存储
//  用到方法:JSON.stringify();JSON.parse();
//  这样方便了后期的扩展
//  


document.getElementById('snapshoot').onclick = function(){

    //获取活动标签
    chrome.tabs.query ({
       //active: true
    },function(urls_array)  {

        var urls = new Array();

        for(var i=0;i<urls_array.length;i++)
        {
            urls[i] = urls_array[i].url;
        }
        console.log(JSON.stringify(urls));
        localStorage.setItem("Json",JSON.stringify(urls));
    });

}

document.getElementById('recovery').onclick = function(){



    var urls = JSON.parse(localStorage.getItem("Json"));
    for(var i=0;i<urls.length;i++)
    {
        chrome.tabs.create({
        url: urls[i],
        active: true
        });
    }
    
}

