class Contact
{

    //private instance members(fields)
    private fullName:string;
    private contactNumber :string;
    private emailAddress :string;

    //public properties
    get FullName():string
    {
        return this.fullName;
    }
    set FullName(name: string)
    {
        this.fullName = name;
    }

    get ContactNumber():string
    {
        return this.contactNumber;
    }
    set ContactNumber(contactNumber: string)
    {
        this.contactNumber = contactNumber;
    }
    get EmailAddress():string
    {
        return this.emailAddress;
    }
    set EmailAddress(emailAddress: string)
    {
        this.emailAddress = emailAddress;
    }

    //constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown name added"]
     * @param {string} [contactNumber="no contact number added "]
     * @param {string} [emailAddress="no email adrdess added"]
     * @memberof Contact
     */
    constructor(fullName :string="unknown name added", contactNumber :string="no contact number added ", emailAddress :string ="no email address added")
    {
        this.FullName=fullName;
        this.ContactNumber=contactNumber;
        this.EmailAddress=emailAddress;
    }

    //public methods
    /**
     *this method overrides the built in toString method for the Contact class
     *
     * @return {*}  {string}
     * @memberof Contact
     */
    public toString():string
    {
        let tempOutputstring="";
        tempOutputstring+= `Full name : ${this.FullName}\n`;
        tempOutputstring+= `Contact Number : ${this.ContactNumber}\n`;
        tempOutputstring+= `Email Address : ${this.EmailAddress}\n`;
        return tempOutputstring;
    }

    //private methods


public toJSON():string{
    return`{ "FullName": ${this.FullName}} ,"ContactNumber" : ${this.ContactNumber},"EmailAddress": ${this.EmailAddress}     `
}

}