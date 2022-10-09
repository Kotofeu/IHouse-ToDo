import React, { useEffect, useState, useRef, useMemo } from 'react';
import TaskArticle from './TaskArticle.jsx';
import MyInput from './UI/MyInput/MyInput.jsx';
import { createTodo } from '../API/todosAPI.js';
import { observer } from 'mobx-react-lite';
import TodosStore from '../store/TodosStore.js';

const TaskArticleList = observer(({ workerId }) => {
    const lastItem = useRef(null);
    const [newList, setNewList] = useState('');
    const [isAdding, setIsAdding] = useState(false);
    const workerTodo = useMemo(() => {
        return TodosStore.todos.filter(item => item.workerId === workerId);
    }, [isAdding, TodosStore.todos]);
    useEffect(() => {
        if (isAdding) {
            lastItem.current.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'end', 
                inline: 'center' 
            });
            setIsAdding(false);
        }
    }, [isAdding]);
    const addTaskList = e => {
        e.preventDefault();
        let isUnique = !(workerTodo.find(item => item.name === newList));
        if (isUnique && newList) {
            createTodo({ name: newList, workerId: workerId })
                .then(data =>  TodosStore.addTodo(data))
                .then(() => setIsAdding(true));
            setNewList('');
        }
        else {
            !newList 
            ? alert('Введите значение!')
            : alert('Такой список уже есть!');
        }
    }
    return (
        <div className='task__tasks-panel'>
            <MyInput className='task__task-form'
                massege='Добавить список'
                id='AddNewList'
                value={newList}
                onChange={e => setNewList(e.target.value)}
                onSubmit={addTaskList}
            />
            <section
                className={`task__task-list ${TodosStore.isHorizontal
                    ? 'task__task-list--horizontal'
                    : ''
                    }`}>
                {!workerTodo.length
                    ? <h2 className='task__clear'>Нет списков</h2>
                    : workerTodo.map(item =>
                        <TaskArticle
                            key={item.id}
                            item={item}
                            todosId={item.id}
                        />
                    )
                }
                <div ref={lastItem}></div>
            </section>
        </div>
    );
})
export default TaskArticleList;