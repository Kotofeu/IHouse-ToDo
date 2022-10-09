import { makeAutoObservable } from 'mobx';

class ContactStore {
    constructor() {
        this._contacts = [];
        makeAutoObservable(this, {}, { deep: true });
    }

    setContact(contacts) {
        this._contacts = contacts;
    }
    addContact(newContact) {
        this._contacts.push((newContact));
    }
    deleteContact(id){
        this._contacts = this._contacts.filter(contact => contact.id !== id);
    }
    get contacts() {
        return this._contacts;
    }

}
export default new ContactStore();