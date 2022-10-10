"use strict";


(function () {

    /**
     *this method save the data to localstorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList: any[]) {
        let count = 0
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;

        }

    }

    /**
     *this method reads our data to localstorage and return contact array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData(): Contact[] {
        // create an empty Contatc Arrya Container
        let ContactArray = new Array<Contact>();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);

        }
        return ContactArray;

    }
    // 1st way of using function

    function LoadHeader(): void {
        $.get("./Views/components/header.html", function (html_data) {
            // loading page using js
            // document.getElementsByTagName("header")[0].innerHTML=html_data;

            // loading page using jquery
            $("header").html(html_data)


            // $("#homePage").addClass("active");

            switch (document.title) {
                case "Home":
                    $("#homePage").addClass("active");
                    break;
                case "About Us":
                    $("#aboutPage").addClass("active");
                    break;
                case "Our Projects":
                    $("#projectPage").addClass("active");
                    break;
                case "Our Services":
                    $("#servicesPage").addClass("active");
                    break;
                case "Contact Us":
                    $("#contactPage").addClass("active");
                    break;
            }


        })
    }
    function LoadFooter(): void {
        $.get("./Views/components/footer.html", function (html_data) {
            // loading page using js
            // document.getElementsByTagName("footer")[0].innerHTML=html_data;

            // loading page using jquery
            $("footer").html(html_data)
        })
    }
    function Start() {
        console.log("App Started")

        LoadHeader();
        LoadFooter();


    }


    window.addEventListener("load", Start);
})();



// (function()
// {
//  function start()
//  {
//      console.log("App Started")
//  }
//  window.addEventListener("load",start);
// })();