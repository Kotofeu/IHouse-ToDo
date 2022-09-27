import React, { useState } from 'react'
import { TaskItemListMemo } from './TaskItemList'
import MyAddBtn from './UI/MyAddBtn/MyAddBtn'
import MyTextArea from './UI/MyTextArea/MyTextArea'
export default function TaskArticle({ title, tasks, reference, className }) {
  //console.log('Article')
  const rootClasses = ['task__article', className]

  const [inputvalue, setInputvalue] = useState('')
  const [tasksList, setTasksList] = useState(tasks)

  const eddClick = () => {
    if(!(tasksList.find(item => item.text === inputvalue)) && inputvalue){
      setTasksList([...tasksList, { text: inputvalue }])
    }
    else{
      //! Нужна обработка обишки!!!
      if (!inputvalue){
        alert('Введите значение!')
      }
      else{
        alert('Такая задача уже есть!')
      }
    }
    setInputvalue('')
  }
  return (
    <article className={rootClasses.join(' ')} ref={reference}>
      <header className='task__article-header'>
        <h3 className='task__article-header-title'>{title}</h3>
        <form className='task__article-header-add' onSubmit={e => e.preventDefault()}>
          <MyTextArea className='task__article-header-input'
            inputvalue={inputvalue}
            setValue={e => setInputvalue(e.target.value)}
            placeholder='Добавить заметку' />
          <MyAddBtn className='task__article-header-btn' eddClick={eddClick}></MyAddBtn>
        </form>
      </header>
      <TaskItemListMemo props={tasksList} />
    </article>
  )
}
export const TaskArticleMemo = React.memo(TaskArticle);