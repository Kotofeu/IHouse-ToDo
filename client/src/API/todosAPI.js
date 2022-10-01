import { $conection } from './index.js';

export const createTodo = async ({ id, name, workerId, todoTitle }) => {
    const { data } = await $conection.post('api/todos', { id, name, workerId, todoTitle });
    return data;
}

export const fetchTodos = async (workerId) => {
    const { data } = await $conection.get('api/todos', {
        params: {
            workerId
        }
    });
    return data;
}
