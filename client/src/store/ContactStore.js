import { makeAutoObservable } from 'mobx';

class ContactStore {
    constructor() {
        this._contacts = [];
        this._isShowModal = false;
        this._selectedСontact = null;
        makeAutoObservable(this, {}, { deep: true });
    }

    setContact(contacts) {
        this._contacts = contacts;
    }
    setIsShowModal(isShowModal) {
        this._isShowModal = isShowModal;
    }
    setSelectedСontact(selectedСontact) {
        this._selectedСontact = selectedСontact;
    }
    get contacts() {
        return this._contacts;
    }
    get isShowModal() {
        return this._isShowModal;
    }
    get selectedСontact() {
        return this._selectedСontact;
    }
    addContact(newContact) {
        this._contacts.push((newContact));
    }
    deleteContact(id) {
        this._contacts = this._contacts.filter(contact => contact.id !== id);
    }
    updateConctact(updatedContact) {
        this._contacts = this._contacts.map(contact =>
            contact.id === updatedContact.id
                ? updatedContact
                : contact
        );
    }
}
export default new ContactStore();