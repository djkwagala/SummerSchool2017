function AddressBook() {
    var contactList = [];
    return {
        addContact: function (newContact) {
            if(this.contactList && this.contactList.length) {
                this.contactList.push(newContact);
            } else {
                this.contactList = [newContact];
            }
        },
        getContact: function(index) {
            return this.contactList[index];
        },
        deleteContact: function(index) {
            this.contactList.splice(index,1);
        }
    }
}

// console.log(AddressBook.prototype);
