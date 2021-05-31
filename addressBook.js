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

    
    toString() {
        return "firstName="+this.firstName+" ,lastName="+this.lastName+
        " ,address="+this.address+" ,city="+this.city+" ,state="+this.state+
        " ,zip="+this.zip+ " ,phoneNumber="+this.phoneNumber+" ,email="+this.email;
    }
}


let addressBook = new AddressBookContact("Shalini", "Pandey", "Asna", 
    "jagdalpur", "Chhattisgarh", "494001", "9329000000", "s@gmail.com");

console.log(addressBook.toString());
