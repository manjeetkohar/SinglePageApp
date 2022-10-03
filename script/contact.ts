class Contact
{

    //private instance members(fields)
    private fullName:string;
    private contactNumber :string;
    private emailAdress :string;

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
    get EmailAdress():string
    {
        return this.emailAdress;
    }
    set EmailAdress(emailAdress: string)
    {
        this.emailAdress = emailAdress;
    }

    //constructor
    /**
     * Creates an instance of Contact.
     * @param {string} [fullName="unknown name added"]
     * @param {string} [contactNumber="no contact number added "]
     * @param {string} [emailAdress="no email adress added"]
     * @memberof Contact
     */
    constructor(fullName :string="unknown name added", contactNumber :string="no contact number added ", emailAdress :string ="no email adress added")
    {
        this.FullName=fullName;
        this.ContactNumber=contactNumber;
        this.EmailAdress=emailAdress;
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
        tempOutputstring+= `Email Adress : ${this.EmailAdress}\n`;
        return tempOutputstring;
    }

    //private methods




}