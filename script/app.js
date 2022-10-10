"use strict";
(function () {
    /**
     *this method save the data to localstorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        var count = 0;
        for (var _i = 0, contactList_1 = contactList; _i < contactList_1.length; _i++) {
            var contact = contactList_1[_i];
            var newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     *this method reads our data to localstorage and return contact array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData() {
        // create an empty Contatc Arrya Container
        var ContactArray = new Array();
        var keys = Object.keys(localStorage);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            var newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    // 1st way of using function
    function LoadHeader() {
        $.get("./Views/components/header.html", function (html_data) {
            // loading page using js
            // document.getElementsByTagName("header")[0].innerHTML=html_data;
            // loading page using jquery
            $("header").html(html_data);
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
        });
    }
    function LoadFooter() {
        $.get("./Views/components/footer.html", function (html_data) {
            // loading page using js
            // document.getElementsByTagName("footer")[0].innerHTML=html_data;
            // loading page using jquery
            $("footer").html(html_data);
        });
    }
    function Start() {
        console.log("App Started");
        LoadHeader();
        LoadFooter();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map