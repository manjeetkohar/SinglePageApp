"use strict";


(function()
{

    /**
     *this method save the data to localstorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList:any[]){
        let count=0
        for (const contact of contactList)
            {
                let newContact = new Contact(contact.FullName,contact.ContactNumber,contact.EmailAddress);
                localStorage.setItem(count.toString(), newContact.toJSON());
                count++;
            
        }

    }

    /**
     *this method reads our data to localstorage and return contact array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData():Contact[]
    {
        // create an empty Contatc Arrya Container
        let ContactArray=new Array<Contact>();
        let keys = Object.keys(localStorage); 
        for(let key of keys) 
        { 
            let newContact=new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);

        }
        return ContactArray;

    }
    // 1st way of using function

    function Start()
    {
        console.log("App Started")

        
        $.getJSON("./Data/contacts.json",function(DataSource){
            //Get you data from the DataSource
            let contactList:any[]=DataSource.ContactList;

            SaveContactListData(contactList);

            let ContactArray=LoadContactListData();
            
            for (const contact of ContactArray) {
                console.log(contact.toString());
                
            }



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