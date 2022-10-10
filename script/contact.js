var Contact = /** @class */ (function () {
    // constructor
    /**
     *Creates an instance of Contact.

     * @param {string} [fullName="unknown name"]
     * @param {string} [contactNumber="no contact number"]
     * @param {string} [emailAddress="unknown email address"]
     * @memberof Contact
     */
    function Contact(fullName, contactNumber, emailAddress) {
        if (fullName === void 0) { fullName = "unknown name"; }
        if (contactNumber === void 0) { contactNumber = "no contact number"; }
        if (emailAddress === void 0) { emailAddress = "unknown email address"; }
        this.FullName = fullName;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    Object.defineProperty(Contact.prototype, "FullName", {
        // public properties
        get: function () {
            return this.fullName;
        },
        set: function (name) {
            this.fullName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ContactNumber", {
        get: function () {
            return this.contactNumber;
        },
        set: function (contactNumber) {
            this.contactNumber = contactNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "EmailAddress", {
        get: function () {
            return this.emailAddress;
        },
        set: function (emailAddress) {
            this.emailAddress = emailAddress;
        },
        enumerable: false,
        configurable: true
    });
    // public methods
    /**
     * This method overrides the built-in toString method for the Contact class
     *
     * @returns {string}
     * @memberof Contact
     */
    Contact.prototype.toString = function () {
        var outputString = "";
        outputString += "Full Name     : ".concat(this.FullName, "\n");
        outputString += "Contact Number: ".concat(this.ContactNumber, "\n");
        outputString += "Email Address : ".concat(this.EmailAddress, "\n");
        return outputString;
    };
    /**
     * This method converts class Data Members to a comma-separated list compatible with JSON
     *
     * @returns {string}
     * @memberof Contact
     */
    Contact.prototype.toJSON = function () {
        return "".concat(this.FullName, ",").concat(this.ContactNumber, ",").concat(this.EmailAddress);
    };
    /**
     * This method reads data from a comma-separated list and assigns it to class Data Members
     *
     * @param {string} data
     * @memberof Contact
     */
    Contact.prototype.fromJSON = function (data) {
        var stringArray = data.split(",");
        this.FullName = stringArray[0];
        this.ContactNumber = stringArray[1];
        this.EmailAddress = stringArray[2];
    };
    return Contact;
}());
//# sourceMappingURL=contact.js.map
//# sourceMappingURL=contact.js.map