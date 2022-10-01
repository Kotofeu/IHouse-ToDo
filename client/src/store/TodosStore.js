import { makeAutoObservable } from "mobx";

class TodosStore {
    constructor() {
        this._workers = [];
        this._todos = [];
        this._isHorizontal = localStorage.getItem('isHorizontal');
        makeAutoObservable(this, {}, { deep: true });
    }

    setWorkers(workers) {
        this._workers = workers;
    }
    setTodos(todos) {
        this._todos = todos;
    }
    setIsHorizontal(isHorizontal) {
        this._isHorizontal = isHorizontal;
    }


    addTodo(newTodo) {
        this._todos.push({...newTodo, todo_items: []});
    }
    addTask(id, newTask) {
        this._todos = this._todos.map(todo => todo.id === id
            ? {
                ...todo,
                todo_items: [...todo.todo_items, newTask]
            }
            : todo)
    }
    get workers() {
        return this._workers;
    }
    get todos() {
        return this._todos;
    }
    get isHorizontal() {
        return this._isHorizontal;
    }

}
export default new TodosStore();