import { $conection } from './index.js';

export const createTodo = async ({ id, name, workerId, todoTitle }) => {
    const { data } = await $conection.post('api/todos', { id, name, workerId, todoTitle });
    return data;
}
export const deleteTodo = async ({ id, todoId }) => {
    const { data } = await $conection.delete('api/todos', { data: { id, todoId } });
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
export const updateTodo = async ({ id, name, idTodo, todoTitle }) => {
    const { data } = await $conection.post('api/todos/update', { id, name, idTodo, todoTitle });
    return data;
}