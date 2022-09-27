import React, { useEffect, useState, useRef } from 'react'
import { TaskArticleMemo } from './TaskArticle.jsx'
import MyInput from './UI/MyInput/MyInput.jsx'

export default function TaskArticleList({ task, isHorizontal, setTask }) {
    //console.log('ArticleList')
    const lastItem = useRef(null);
    const [scrollToLast, setScrollToLast] = useState(false);
    const [newList, setNewList] = useState('');
    useEffect(() => {
        if (scrollToLast) {
            lastItem.current.scrollIntoView({ block: 'end', behavior: 'smooth', inline: 'nearest' })
            setScrollToLast(false)
        }
    }, [scrollToLast])

    const eddTaskList = e => {
        e.preventDefault()
        if (!(task.find(item => item.name === newList)) && newList) {
            setTask((prevState) => [...prevState, {
                name: newList,
                content: []
            }])
            setScrollToLast(true)
        }
        else {
            if (!newList) {
                alert('Введите значение!')
            }
            else {
                alert('Такой список уже есть!')
            }
        }
        setNewList('')
    }

    return (
        <div className='task__tasks-panel'>
            <MyInput className='task__task-form'
                massege='Добавить список'
                id='AddNewList'
                value={newList}
                onChange={e => setNewList(e.target.value)}
                onClick={eddTaskList}
            />
            {!task.length
                ? <h2 className='task__clear'>Нет списков</h2>
                : <section
                    className={`task__task-list ${isHorizontal
                        ? 'task__task-list--horizontal'
                        : ''
                    }`}>
                    {task.map(item => {
                        return <TaskArticleMemo
                            key={item.name}
                            title={item.name}
                            tasks={item.content}
                        />
                    }
                    )}
                    <div ref={lastItem}></div>
                </section>
            }

        </div>
    )
}
export const TaskArticleListMemo = React.memo(TaskArticleList);