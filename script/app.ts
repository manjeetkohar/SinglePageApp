"use strict";


(function()
{
/**
 *Loads data Asyn. from a URL it calls the callback
  function when the data loading is complete
 *
 * @param {*} method
 * @param {*} url
 * @param {*} callback
 */
function LoadData(method:string,url:string,callback:Function){
        let XHR = new XMLHttpRequest();
        XHR.open(method,url);
        XHR.send();
        XHR.addEventListener("readystagechange",function(){
            if((XHR.status == 200) && (XHR.readyState == 4))
            {
                // console.log(XHR.responseText);
                // let contactDataSource=JSON.parse(XHR.responseText);
                // console.log(contactDataSource.ContactList[0])
                callback(XHR.responseText)
            }
        });
    }
    // 1st way of using function

    function Start()
    {
        console.log("App Started")
        $.getJSON("./Data/contacts.json",function(DataSource){
            console.log(DataSource.CotactList[0]);
        });
    }
 
    window.addEventListener("load",Start);
})();



// (function()
// {
//  function start()
//  {
//      console.log("App Started")
//  }
//  window.addEventListener("load",start);
// })();