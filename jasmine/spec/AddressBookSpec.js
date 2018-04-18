describe("Address book", function () {
    var addressBook, newContact;

    beforeEach(function() {
        addressBook = new AddressBook();
        newContact = new Contact();
    });

    it("should be able to add a contact", function () {
        addressBook.addContact(newContact);
        expect(addressBook.getContact(0)).toBe(newContact);
    });

    it("should be able to delete a contact", function() {
        addressBook.addContact(newContact);
        addressBook.deleteContact(0);
        expect(addressBook.getContact(0)).not.toBeDefined();
        expect(addressBook.getContact(0)).toBe(undefined); // OR
    });
})
