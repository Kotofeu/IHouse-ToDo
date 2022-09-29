import React, { useEffect, useState, useRef } from 'react';
import { TaskArticleMemo } from './TaskArticle.jsx';
import MyInput from './UI/MyInput/MyInput.jsx';
import { createTodo, fetchTodos } from '../API/todosAPI.js';

export default function TaskArticleList({ isHorizontal, workerId }) {
    const lastItem = useRef(null);
    const [scrollToLast, setScrollToLast] = useState(false);
    const [tasks, setTasks] = useState();
    const [newList, setNewList] = useState('');
    useEffect(() => {
        if (scrollToLast) {
            lastItem.current.scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'nearest' });
            setScrollToLast(false);
            createTodo({ name: newList, workerId: workerId }).then(data => setNewList(''));
        }
    }, [scrollToLast]);
    useEffect(() => {
        fetchTodos({ workerId: workerId })
            .then(data => setTasks(data.rows.sort((a, b) => a.id - b.id)));
    }, []);

    const eddTaskList = e => {
        e.preventDefault();
        let isUnique = !(tasks.find(item => item.name === newList)); //!Не работает пока нет обновления!

        if (isUnique && newList) {
            setScrollToLast(true);
        }
        else {
            !newList ? alert('Введите значение!') : alert('Такой список уже есть!');
        }
    }
    return (
        <div className='task__tasks-panel'>
            <MyInput className='task__task-form'
                massege='Добавить список'
                id='AddNewList'
                value={newList}
                onChange={e => setNewList(e.target.value)}
                onSubmit={eddTaskList}
            />
            {!tasks
                ? <h2 className='task__clear'>Нет списков</h2>
                : <section
                    className={`task__task-list ${isHorizontal
                        ? 'task__task-list--horizontal'
                        : ''
                        }`}>
                    {tasks.map(item =>
                        <TaskArticleMemo
                            key={item.id}
                            title={item.name}
                            tasks={item.todo_items}
                            todosId={item.id}
                        />
                    )}
                    <div ref={lastItem}></div>
                </section>
            }

        </div>
    );
}
export const TaskArticleListMemo = React.memo(TaskArticleList);