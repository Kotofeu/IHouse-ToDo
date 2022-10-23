import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteTodo, updateTodo } from '../API/todosAPI';
import expand from '../assets/images/expand.svg';
import TodosStore from '../store/TodosStore';
import MyDeleteBtn from './UI/MyBtn/MyDeleteBtn/MyDeleteBtn.jsx';
import MyEditBtn from './UI/MyBtn/MyEditBtn/MyEditBtn.jsx';
import MySaveBtn from './UI/MyBtn/MySaveBtn/MySaveBtn.jsx';
const TaskItem = React.memo(({ title, id }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isExpand, setIsExpand] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [width, setWidth] = useState();
    const [todo, setTodo] = useState(title);
    const textRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        setWidth((containerRef.current.offsetWidth - textRef.current.offsetWidth));
    }, [containerRef?.current?.offsetWidth, isEdit]);
    const Delete = () => {
        setIsDeleted(true);
        setTimeout(() => deleteTodo({ todoId: id }).then(() => TodosStore.deleteTask(id)), 300);
    }
    const Edit = () => {
        setIsEdit((prevState) => !prevState);
        setIsExpand(false);
    }
    const Save = (e) => {
        e.preventDefault();
        updateTodo({ idTodo: id, todoTitle: todo });
        setIsEdit(false);
    }
    const Expand = () => {
        setIsExpand((prevState) => !prevState);
    }
    return (
        <div className={`task__item ${isDeleted
            ? 'task__item--deleted'
            : ''
            }`}>
            <form className='task__item-form' ref={containerRef} onSubmit={Save}>
                <label
                    className={`task__item-text ${isExpand
                        ? 'task__item-text--active'
                        : ''
                        }`} htmlFor={id}
                    ref={textRef}>
                    {todo}
                </label>
                <input className={`task__item-input ${isEdit
                    ? 'task__item-input--active'
                    : ''
                    }`}
                    id={id}
                    value={todo}
                    onChange={e => setTodo(e.target.value)}
                />
            </form>
            <div className='task__item-buttons'>
                {width === 0 && !isEdit
                    ? <button className={`task__item-btn task__item-btn-expand ${isExpand
                        ? 'task__item-btn-expand--active'
                        : ''
                        }`}
                        onClick={Expand}>
                        <img src={expand} alt='expand icon' />
                    </button>
                    : null
                }
                {isEdit
                    ? <MySaveBtn className='task__item-btn'  onClick={Save}/>
                    : <MyEditBtn className='task__item-btn' onClick={Edit}/>
                }
                <MyDeleteBtn className='task__item-btn' onClick={Delete} />
            </div>
        </div>
    );
})
export default TaskItem;