import { $conection } from './index.js';

export const createContact = async (name, info, phone, email) => {
    const { data } = await $conection.post('api/contact', { name, info, phone, email });
    return data;
}

export const fetchContacts = async () => {
    const { data } = await $conection.get('api/contact');
    return data;
}

export const fetchContact = async (id) => {
    const { data } = await $conection.get('api/contact' + id);
    return data;
}

