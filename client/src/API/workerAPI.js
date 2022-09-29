import { $conection } from './index.js';
export const createWorker = async (name) => {
    const { data } = await $conection.post('api/worker', name);
    return data;
}

export const fetchWorkers = async () => {
    const { data } = await $conection.get('api/worker');
    return data;
}
export const fetchWorker = async (id) => {
    console.log($conection);
    const { data } = await $conection.get('api/worker/' + id);
    return data;
}
