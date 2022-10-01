import React, { useState } from 'react';
import { TaskItemListMemo } from './TaskItemList';
import MyAddBtn from './UI/MyAddBtn/MyAddBtn';
import MyTextArea from './UI/MyTextArea/MyTextArea';
import { createTodo } from '../API/todosAPI.js';

export default function TaskArticle({ title, tasks, todosId }) {
  const [inputvalue, setInputvalue] = useState('');
  const eddClick = () => {
    let isUnique = !(tasks.find(item => item.title === inputvalue)); //!Не работает пока нет обновления!
    if (isUnique && inputvalue) {
      createTodo({ id: todosId, todoTitle: inputvalue });
      setInputvalue('');
    }
    else {
      !inputvalue ? alert('Введите значение!') : alert('Такой список уже есть!');
    }
  }
  return (
    <article className='task__article'>
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
      <TaskItemListMemo props={tasks} />
    </article>
  );
}
export const TaskArticleMemo = React.memo(TaskArticle);