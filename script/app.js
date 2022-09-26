"use strict";


(function()
{
    
    function LoadData(method,url,callback){
        let XHR = new XMLHttpRequest();
        XHR.open(method,url);
        XHR.send();
        XHR.addEventListener("readystagechange",function(){
            if((XHR.status == 200) && (XHR.readystate == 4))
            {
                // console.log(XHR.responseText);
                // let contactDataSource=JSON.parse(XHR.responseText);
                // console.log(contactDataSource.ContactList[0])
                callback(XHR.responseText)
            }
        });
    }
    // 1st way of using function
    function start()
    {
        console.log("App Started")
        LoadData("GET","./Data/contacts.json",function(XHR){
            console.log(XHR);
        });
    }
 
    window.addEventListener("load",start);
})();



// (function()
// {
//  function start()
//  {
//      console.log("App Started")
//  }
//  window.addEventListener("load",start);
// })();