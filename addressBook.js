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
let addressBookArray = new Array();
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

console.log(addressBookArray.toString());
