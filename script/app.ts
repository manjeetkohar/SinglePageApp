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
            $("header").html(html_data);

            $("li>a").on("click", function () {
                let title=$(this).prop("id") as string;
                // capitalizing title
                document.title=title.substring(0,1).toUpperCase()+ title.substring(1);
                LoadContent();
                
            });

          



            // $("#homePage").addClass("active");

            // switch (document.title) {
            //     case "Home":
            //         $("#homePage").addClass("active");
            //         break;
            //     case "About Us":
            //         $("#aboutPage").addClass("active");
            //         break;
            //     case "Our Projects":
            //         $("#projectPage").addClass("active");
            //         break;
            //     case "Our Services":
            //         $("#servicesPage").addClass("active");
            //         break;
            //     case "Contact Us":
            //         $("#contactPage").addClass("active");
            //         break;
            // }


        });
    }

    function LoadContent(): void {


        switch (document.title) {
            case "Home":
                $.get("./Views/content/home.html", function (html_data) { $("main").html(html_data); });
                break;
            case "About":
                $.get("./Views/content/about.html", function (html_data) { $("main").html(html_data); });
                break;
            case "Project":
                $.get("./Views/content/project.html", function (html_data) { $("main").html(html_data); });
                break;
            case "Services":
                $.get("./Views/content/services.html", function (html_data) { $("main").html(html_data); });
                break;
            case "Contact":
                $.get("./Views/content/contact.html", function (html_data) { $("main").html(html_data); });
                break;
        }


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
// initial load
        document.title='Home';
        LoadContent();

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