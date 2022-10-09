import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { deleteTodo } from '../API/todosAPI';
//import edit from '../assets/images/edit.svg';
import expand from '../assets/images/expand.svg';
import TodosStore from '../store/TodosStore';
import MyDeleteBtn from './UI/MyDeleteBtn/MyDeleteBtn';
const TaskItem = React.memo(({ title, id }) => {
    const [editActive, setEditActive] = useState(false);
    const [width, setWidth] = useState();
    const textRef = useRef(null);
    const containerRef = useRef(null);
    useEffect(() => {
        setWidth((containerRef.current.offsetWidth - textRef.current.offsetWidth));
    }, [containerRef?.current?.offsetWidth]);
    const Delete = () => {
        deleteTodo({ todoId: id })
            .then(() => TodosStore.deleteTask(id));
    }
    const Expand = () => {
        setEditActive((prevState) => !prevState);
    }
    return (
        <div className='task__item'>
            <div className='task__item-content' ref={containerRef}>
                <p className={`task__item-text 
                    ${editActive
                        ? 'task__item-text--active'
                        : ''
                    }`}
                    ref={textRef}>
                    {title}
                </p>
            </div>
            <div className='task__item-buttons'>
                {width === 0 ?
                    <button className={`task__item-btn task__item-btn-edit ' 
                        ${editActive
                            ? 'task__item-btn-edit--active'
                            : ''
                        }`}
                        onClick={Expand}>
                        <img src={expand} alt='expand icon' />
                    </button>
                    : null
                }
                <MyDeleteBtn className='task__item-btn' onClick={Delete} />
            </div>
        </div>
    );
    //  <button className='task__item-btn' onClick={Edit}><img src={edit} alt='edit image' /></button>
})
export default TaskItem;