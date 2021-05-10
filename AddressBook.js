/**Welcome To Address Book Program 
 * Creating a contact with first name , last name 
 * address, city , state , zip , phone number and email
 * Checking contacts to be in proper pattern 
 * Throw error if regex fails
 * Created new addressbook array and push the contacts in it
 * Finding existing contact and by using first name editing it
 * Deleting existing contact 
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

//UC4 - Ability to Search & edit exixting Contact
const prompt = require('prompt-sync')({sigint: true});
console.log("\n**********Edit Contact**********");
var input = prompt("Enter First Name to Search Contact: ");
var status = false;
addressBook.forEach(person => {
    if (person.firstName == input) {
        console.log("\nContact found!");
        status = true;
        console.log("1. Edit First Name" +
                    "\n2. Edit Last Name" +
                    "\n3. Edit Address" +
                    "\n4. Edit City" +
                    "\n5. Edit State" +
                    "\n6. Edit Zip" +
                    "\n7. Edit Mobile Number" +
                    "\n8. Edit Email" +
                    "\nPress any key to Exit")
        var option = prompt("Enter number to select option: ");
        switch (option) {
            
            case "1":
                input = prompt("Enter New First Name: ");
                try {
                    person.newFirstName = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "2":
                input = prompt("Enter New Last Name: ");
                try {
                    person.newLastName = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "3":
                input = prompt("Enter New Address: ");
                try {
                    person.newAddress = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "4":
                input = prompt("Enter New City: ");
                try {
                    person.newCity = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "5":
                input = prompt("Enter New State: ");
                try {
                    person.newState = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "6":
                input = prompt("Enter New Zip: ");
                try {
                    person.newZip = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "7":
                input = prompt("Enter New Mobile Number: ");
                try {
                    person.newMobileNumber = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
            case "8":
                input = prompt("Enter New Email: ");
                try {
                    person.newEmail = input;
                    console.log("\nContact modified successfully");
                    console.log(person.toString());
                } catch (error) {
                console.log(error);
                }
                break;
        
            default:
                console.log("Nothing modified !!");
                break;
        }
    }
});

if (!status) {
    console.log("Contact not found !!!");
}

//UC5 - Ability to Search & Delete existing Contact
console.log("\n**********Delete Contact**********");
var input = prompt("Enter First Name to Search Contact: ");
var status = false;
addressBook.forEach(person => {
    if (person.firstName == input) {
        console.log("\nContact found!");
        status = true;
        var option = prompt("Press 'Y' to remove Contact & any key to exit ");
        if ((option == "Y") ||(option == "y")) {
            var index = addressBook.indexOf(person);
            if (index > -1) {
                addressBook.splice(index,1);
                console.log("Contact Deleted Successfully !!")
                console.log("\n*********Display Contacts**********");
                console.log(addressBook);
            }
        }
    }
});

if (!status) {
    console.log("Contact not found !!!");
}

//UC6 - Ability to find number of Contacts in Address Book
//using reduce function
console.log("\n**********Count Contacts**********");
var reducer = () => {
    var nameSet = new Set();
    addressBook.forEach( contact => {
        nameSet.add(contact.name);
    });
    return nameSet;
  }

  const nameCollection = addressBook.reduce(reducer);
  console.log("Address Book has " + nameCollection.size + " Contacts");

  //UC7 - Ability to ensure there is no duplicate Entry in Address Book
console.log("\n***Check for Duplicate entries****");
function hasDuplicate(addressBook) {
    let NAMESet = new Set();
    let NAMEArray = new Array();
    addressBook.forEach(contact => {
      NAMESet.add(contact.name);
      NAMEArray.push(contact.name);
    });
    return NAMESet.size != NAMEArray.length;
}

if (hasDuplicate(addressBook)) {
    console.log("Address Book has Duplicate entries");
} else {
    console.log("Address Book does not have any Duplicate entries");
}

//UC8 - Ability to Search Contact in City
//Using Array functions filter , reduce to check
console.log("\n******Search Contact in City******");
var firstname = "Vaishnavi";
var lastname = "Birle";
var cityname = "Washim";

let searchInCity = (contact) => {
  return contact.firstName == firstname && contact.lastName == lastname && contact.city == cityname;
}
let requiredArray = addressBook.filter(searchInCity);

if (requiredArray.length > 0) {
    console.log("Contact found in " + cityname + " City");
} else {
    console.log("Contact not found in " + cityname + " City");
}

//UC9 - Ability to view contacts by City
console.log("\n*******View Contacts by City******");
cityname = "Washim";

let searchByCity = (contact) => {
    if (contact.city == cityname) {
        return contact;
    }
}
requiredArray = addressBook.filter(searchByCity);

console.log("Contacts from " + cityname + " City:");
requiredArray.forEach(contact => {
    console.log(contact.toString());
});

//UC10 - Ability to get number of Contacts count by City
console.log("\n*******Count Contacts by City******");
cityname = "Satara";
let countByCity = addressBook.filter(searchByCity).length;
console.log("There are " + countByCity + " Contacts from " + cityname + " City");

//UC11 - Ability to sort entries alphabetically by Person's Name
console.log("\n********Sort Contacts by Name******");

var sortedByName = addressBook.sort((a, b) => {
    return (a.firstName).localeCompare(b.firstName)
});

sortedByName.forEach(contact => {
    console.log(contact.toString());
});

//UC12 - Ability to sort by City,State,Zip
console.log("\n********Sort Contacts by City******");

var sortedByCity = addressBook.sort((a, b) => {
    return (a.city).localeCompare(b.city);
});

sortedByCity.forEach(contact => {
    console.log(contact.toString());
});

console.log("\n********Sort Contacts by State******");

var sortedByState = addressBook.sort((a, b) => {
    return (a.state).localeCompare(b.state);
});

sortedByState.forEach(contact => {
    console.log(contact.toString());
});

console.log("\n*******Sort Contacts by Zip******");

var sortedByZip = addressBook.sort((a, b) => {
    return (String(a.zip)).localeCompare(String(b.zip));
});

sortedByZip.forEach(contact => {
    console.log(contact.toString());
});