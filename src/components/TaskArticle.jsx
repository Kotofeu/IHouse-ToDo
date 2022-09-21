import React, { useState } from 'react'
import { TaskItemListMemo } from './TaskItemList'
import MyEddBtn from './UI/MyEddBtn/MyEddBtn'
import MyTextArea from './UI/MyTextArea/MyTextArea'
export default function TaskArticle({ title, tasks, reference, className }) {
  //console.log('Article')
  const [inputvalue, setInputvalue] = useState('')
  const [tasksList, setTasksList] = useState(tasks)
  const rootClasses = ['task__article', className]
  const setValue = e => {
    setInputvalue(e.target.value)
  }

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
            setValue={setValue}
            placeholder='Добавить задачу' />
          <MyEddBtn className='task__article-header-btn' eddClick={eddClick}></MyEddBtn>
        </form>
      </header>
      <TaskItemListMemo props={tasksList} />
    </article>
  )
}
export const TaskArticleMemo = React.memo(TaskArticle);