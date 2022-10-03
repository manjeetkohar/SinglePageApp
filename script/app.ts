"use strict";


(function()
{

    // 1st way of using function

    function Start()
    {
        console.log("App Started")

        let contactList;
        $.getJSON("./Data/contacts.json",function(DataSource){
            //Get you data from the DataSource
            contactList=DataSource.ContactList;

            //load your data into objects
            let contact=new Contact();
            console.log(contact.toString());
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