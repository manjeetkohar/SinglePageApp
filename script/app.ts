"use strict";


(function()
{

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