function AddressBook() {
    var contactList = [];
    var initializedData = false;
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
        },
        getInitialData: function(cb) {
            var self = this;
            setTimeout(function() {
                self.dataInitialized = true;
                cb();
            }, 3);
        },
        dataInitialized: false
    }
}

// console.log(AddressBook.prototype);
