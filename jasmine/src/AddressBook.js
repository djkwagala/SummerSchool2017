function AddressBook() {
    var contactList;
    return {
        addContact: function (newContact) {

            if(this.contactList && this.contactList.length) {
                this.contactList.push(newContact);
            } else {
                this.contactList = [newContact];
            }

            console.log(this.contactList)
            console.log(newContact);

        },
        getContact: function(index) {
            return this.contactList[index];
        }
    }

}
