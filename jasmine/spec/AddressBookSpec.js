describe("Address book", function () {
    it("should be able to add a contact", function () {
        var addressBook = new AddressBook();
        var newContact = new Contact();

        addressBook.addContact(newContact);
        expect(addressBook.getContact(0)).toBe(newContact);
    })
})
