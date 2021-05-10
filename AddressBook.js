/**Welcome To Address Book Program 
 * Creating a contact with first name , last name 
 * address, city , state , zip , phone number and email
 * Checking contacts to be in proper pattern 
 * Throw error if regex fails
 * Created new addressbook array and push the contacts in it
*/
class Contact {

    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    mobileNumber;
    email;

    constructor (firstName,lastName,address,city,state,zip,mobileNumber,email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.mobileNumber = mobileNumber;
        this.email = email;
    }

    /**By using getter and setter function */

    get firstName() { return this.firstName }

    set newFirstName(firstName) {
        if (validateFirstName(firstName)) {
            this.firstName = firstName;
        } else {
            throw "First Name is not valid";
        }
    }

    get lastName() { return this.lastName }

    set newLastName(lastName) {
        if (validateLastName(lastName)) {
            this.lastName = lastName;
        } else {
            throw "Last Name is not valid";
        }
    }

    get address() { return this.address }

    set newAddress(address) {
        if (validateAddress(address)) {
            this.address = address;
        } else {
            throw "Address is not valid";
        }
    }

    get city() { return this.city }

    set newCity(city) {
        if (validateCity(city)) {
            this.city = city;
        } else {
            throw "City name is not valid";
        }
    }

    get state() { return this.state }

    set newState(state) {
        if (validateState(state)) {
            this.state = state;
        } else {
            throw "State name is not valid";
        }
    }

    get zip() { return this.zip }

    set newZip(zip) {
        if (validateZip(zip)) {
            this.zip = zip;
        } else {
            throw "Zip Code is not valid";
        }
    }

    get mobileNumber() { return this.mobileNumber }

    set newMobileNumber(mobileNumber) {
        if (validateMobileNumber(mobileNumber)) {
            this.mobileNumber = mobileNumber;
        } else {
            throw "Mobile Number is not valid";
        }
    }

    get email() { return this.email }

    set newEmail(email) {
        if (validateEmail(email)) {
            this.email = email;
        } else {
            throw "Email is not valid";
        }
    }    

    toString() {
        return "\nFirst Name    : " + this.firstName +
        "\nLast Name     : " + this.lastName +
        "\nAddress       : " + this.address +
        "\nCity          : " + this.city +
        "\nState         : " + this.state +
        "\nZip           : " + this.zip +
        "\nMobile Number : " + this.mobileNumber +
        "\nEmail         : " + this.email;
    }
}

/**Using Regex pattern to ensure valid contacts to be added */

function validateFirstName(firstName) {
    let firstNamePattern = RegExp("^[A-Z]{1,}[a-z]{2,}$");
    if (firstNamePattern.test(firstName)) {
        return true;
    } else {
        throw "First Name is not valid";
    }
}

function validateLastName(lastName) {
    let lastNamePattern = RegExp("^[A-Z]{1,}[a-z]{2,}$");
    if (lastNamePattern.test(lastName)) {
        return true;
    } else {
        throw "Last Name is not valid";
    }
}

function validateAddress(address) {
    let addressPattern = RegExp("[A-Za-z]{4,}$");
    if (addressPattern.test(address)) {
        return true;
    } else {
        throw "Address is not valid";
    }
}

function validateCity(city) {
    let cityPattern = RegExp("^[A-Z]{1,}[a-z]{3,}$");
    if (cityPattern.test(city)) {
        return true;
    } else {
        throw "City name is not valid";
    }
}

function validateState(state) {
    let statePattern = RegExp("^[A-Z]{1,}[a-z]{3,}$");
    if (statePattern.test(state)) {
        return true;
    } else {
        throw "State name is not valid";
    }
}

function validateZip(zip) {
    let zipPattern = RegExp("^[0-9]{6}$");
    if (zipPattern.test(zip)) {
        return true;
    } else {
        throw "Zip Code is not valid";
    }
}

function validateMobileNumber(mobileNumber) {
    let mobileNumberPattern = RegExp("((91){1})[ ]([98765]{1})([0-9]{9})$");
    if (mobileNumberPattern.test(mobileNumber)) {
        return true;
    } else {
        throw "Mobile Number is not valid";
    }
}

function validateEmail(email) {
    let emailPattern = RegExp("^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$");
    if (emailPattern.test(email)) {
        return true;
    } else {
        throw "Email is not valid";
    }
}
console.log("<<<<<Welcome to AddressBook Application>>>>>");

//UC1 - Ability to Create Contact in Address Book
let vaishnavi = new Contact("Vaishnavi","Birle","IUDP","Washim","Maharashtra",444505,8668612060,"vaishnavi@gmail.com");
console.log(vaishnavi.toString());

//UC2 - Ability to ensure valid Contact is Added in Address Book
var firstName = "Vaibhavi";
var lastName = "Jadhav";
var address = "Purva Nagar";
var city = "Akot";
var state = "Maharashtra";
var zip = 400001;
var mobileNumber = "91 7083805302";
var email = "vaibhavi@gmail.com";
try {
    if (validateFirstName(firstName)&&validateLastName(lastName)&&validateAddress(address)&&validateCity(city)&&validateState(state)&&validateZip(zip)&&validateMobileNumber(mobileNumber)&&validateEmail(email)) {
        var vaibhavi = new Contact(firstName,lastName,address,city,state,zip,mobileNumber,email);
        console.log(vaibhavi.toString());
    }
} catch (error) {
    console.log(error);
}

//UC3 - Ability to create Address Book Array & Add Contacts to Array
var addressBook = new Array();
addressBook.push(vaishnavi);
addressBook.push(vaibhavi);
console.log(addressBook);