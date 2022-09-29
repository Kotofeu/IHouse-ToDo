import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import del from '../assets/images/delete.svg';
//import edit from '../assets/images/edit.svg';
import expand from '../assets/images/expand.svg';
export default function TaskItem({ text }) {
    const [editActive, setEditActive] = useState(false);
    const [width, setWidth] = useState();
    const textRef = useRef(null);
    const containerRef = useRef(null);
    const Expand = () => {
        setEditActive((prevState) => !prevState);
    }
    useEffect(() => {
        setWidth((containerRef.current.offsetWidth - textRef.current.offsetWidth));
    }, [containerRef?.current?.offsetWidth]);
    const Delete = () => {

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
                    {text}
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
                <button className='task__item-btn' onClick={Delete}><img src={del} alt='delete icon' /></button>
            </div>
        </div>
    );
    //  <button className='task__item-btn' onClick={Edit}><img src={edit} alt='edit image' /></button>
}
export const TaskItemMemo = React.memo(TaskItem);