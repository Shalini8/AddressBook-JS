const input = require("prompt-sync");
const prompt = input();

class AddressBookContact{
    constructor (firstName, lastName, address, city, state, zipCode, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    //Getters and setters
    get firstName() {
        return this._firstName;
    }

    //Checking for regex before adding contact
    set firstName(firstName) {
        let firstNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(firstNameRegex.test(firstName)) {
            this._firstName = firstName;
        } else {
            throw "First Name : '" + firstName + "' is Invalid!"
        }
    }

    get lastName() {
        return this._lastName;
    }

    //Checking for regex before adding contact
    set lastName(lastName) {
        let lastNameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(lastNameRegex.test(lastName)){
            this._lastName = lastName;
        } else {
            throw "Last Name : '" + lastName + "' is Invalid!"
        }
    }

    get address() {
        return this._address;
    }

    //Checking for regex before adding contact
    set address(address) {
        let addressRegex = RegExp("[A-Za-z0-9- ]{4,}");
        if(addressRegex.test(address)){
            this._address = address;
        } else {
            throw "Address : '" + address + "' is Invalid!"
        }
    }

    get city() {
        return this._city;
    }

    //Checking for regex before adding contact
    set city(city) {
        let cityregex = RegExp("[A-Za-z ]{4,}");
        if(cityregex.test(city)){
            this._city = city;
        } else {
            throw "City : '" + city + "' is Invalid!"
        }
    }

    get state() {
        return this._state;
    }

    //Checking for regex before adding contact
    set state(state) {
        let stateRegex = RegExp("[A-Za-z ]{4,}");
        if (stateRegex.test(state)) {
            this._state = state;
        }
        else {
            throw "State : " + state + " is Invalid!";
        }
    }

    get zipCode() {
        return this._zipCode;
    }

    //Checking for regex before adding contact
    set zipCode(zipCode) {
        let zipCodeRegex = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (zipCodeRegex.test(zipCode)) {
            this._zipCode = zipCode;
        }
        else {
            throw "Zip : " + zip + " is Invalid!";
        }
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

    //Checking for regex before adding contact
    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp("^[1-9]{1}[0-9]{9}$");
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw "Phone Number : " + phoneNumber + " is Invalid!";
        }
    }

    get email() {
        return this._email;
    }

    //Checking for regex before adding contact
    set email(email) {
        const emailRegex = RegExp("^[a-z0-9]+(([\\._+-][a-z0-9]+)?)\\@[a-z0-9]+\\.(([a-z]{2,4})(\\.[a-z]{2,4})?)$");
        if (emailRegex.test(email)) {
            this._email = email;
        }
        else {
            throw "Email : " + email + " is Invalid!";
        }
    }

    
    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zipCode="+this.zipCode+" ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }
}
let addressBookArray = [];
let contact;
try {
    contact = new AddressBookContact("Shalini", "Pandey", "Asna", 
    "jagdalpur", "Chhattisgarh", "494001", "9329000000", "s@gmail.com");
    addressBookArray.push(contact);
    contact = new AddressBookContact("Ragini", "Pandey", "AvniVihar", 
    "Raipur", "Chhattisgarh", "494001", "9329000000", "r@gmail.com");
    addressBookArray.push(contact);
    contact = new AddressBookContact("Sunita", "Pandey", "Mainpat", 
    "ambikapur", "Chhattisgarh", "494001", "9329000000", "s@gmail.com");
    addressBookArray.push(contact);
} catch (e) {
    console.error(e);
}
function addPerson() {
    let firstName = prompt("enter the first name:");
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == firstName) {
            console.log(" SOrry this person already exists in addressBook !! try adding another Name");
            addPerson()
        }
    }
    let lastName = prompt("enter the last name: ");
    let address = prompt("enter the address: ");
    let city = prompt("enter the city: ");
    let state = prompt("enter the state: ");
    let zip = Number(prompt("enter the zip: "));
    let phoneNumber = Number(prompt("enter the phone number: "));
    let mail = prompt("enter mail id:");
    let Person = new AddressBookContact(firstName, lastName, address, city, state, zip, phoneNumber, mail)
    addressBookArray.push(Person)
}
function editByName() {
    let firstNameEdit = prompt("enter the first name whose detail you want to change:");
    let personToEdit;
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == firstNameEdit) {
            personToEdit = addressBookArray[i];
            if (personToEdit != null) {
                let input = 1;
                while (input != 0) {
                    console.log("\nChoose to edit: \n1. First Name \n2. Last Name \n3. Address \n4. City \n5. State \n6. Zipcode \n7. Phone Number \n8. Email \n9. exit");
                    input = prompt("Enter Your Choice: ");
                    input = parseInt(input);
                    switch (input) {
                        case 1: let newFirstName = prompt("Enter the firstname: ");
                            personToEdit.firstName = newFirstName;
                            break;
                        case 2: let newLastName = prompt("Enter the last Name: ");
                            personToEdit.lastName = newLastName;
                            break;
                        case 3: let NewAddress = prompt("Enter the address: ");
                            personToEdit.address = newAddress;
                            break;
                        case 4: let newCity = prompt("Enter the city: ");
                            personToEdit.city = newCity;
                            break;
                        case 5: let newState = prompt("Enter the state: ");
                            personToEdit.state = newState;
                            break;
                        case 6: let newZip = prompt("Enter the pincode: ");
                            personToEdit.zip = newZip;
                            break;
                        case 7: let newPhoneNumber = prompt("Enter the phone number: ");
                            personToEdit.phoneNumber = newPhoneNumber;
                            break;
                        case 8: let newMail = prompt("Enter the email: ");
                            personToEdit.email = newMail;
                            break;
                        case 9:
                            input = 0;
                    }
                }
            }
        }

    }
}
function deleteByName() {
    let firstNameForDelete = prompt("enter the first name whose detail you want to delete:");
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].firstName == firstNameForDelete) {
            addressBookArray.splice(i, 1);
            i--
        }
    }
}
function countNumberOfPerson() {
    let count = addressBookArray.length;
    console.log("number of person in addressbook : " + count);
}
function searchByCity() {
    let cityForSearch = prompt("enter the city of which you want Contacts: ");
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].city == cityForSearch) {
            console.log(addressBookArray[i]);
        }
    }

}
function countPersonByCity() {
    let cityForSearch = prompt("Enter the city of which you want Count: ");
    count = 0;
    for (let i = 0; i < addressBookArray.length; i++) {
        if (addressBookArray[i].city == cityForSearch) {
            count++;
        }
    }
    console.log("Total number of people live in " + cityForSearch + " : " + count);
}
function sortAlphabaticaly() {
    let sortedList = addressBookArray.sort();
    console.log(sortedList);
}
function sortByCity() {
    sortedList = addressBookArray.slice().sort((a,b)=>(a.city).localeCompare(b.city));
    console.log(sortedList);
}


let choice = 1;

while (choice != 0) {
    console.log("1.Display \n2.Add Person. \n3.Edit Person. \n4.Delete Person. \n5.CountNumberOfPerson. \n6.Search By City. \n7.Get Count By City \n8.Sort Alphabetically \n9.Sort by city.\n10.EXIT");
    choice = prompt("enter your choice : ");
    choice = parseInt(choice);

    switch (choice) {
        case 1:
            console.log(addressBookArray);
            break;
        case 2:
            addPerson();
            console.log(addressBookArray);
            break;
        case 3:
            editByName();
            console.log(addressBookArray);
            break;
        case 4:
            deleteByName();
            console.log(addressBookArray);
            break;
        case 5:
            countNumberOfPerson();
            break;
        case 6:
            searchByCity();
            break;
        case 7:
            countPersonByCity();
            break;
        case 8:
             sortAlphabaticaly();
             break;
        case 9:
            sortByCity();
            break;
        case 10:
            choice = 0;
    }
    
}

