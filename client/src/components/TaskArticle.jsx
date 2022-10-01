import React, { useMemo, useState } from 'react';
import { TaskItemListMemo } from './TaskItemList';
import MyAddBtn from './UI/MyAddBtn/MyAddBtn';
import MyTextArea from './UI/MyTextArea/MyTextArea';
import { createTodo } from '../API/todosAPI.js';
import TodosStore from '../store/TodosStore';

export default function TaskArticle({ todosId }) {
  const [isAdding, setIsAdding] = useState(false)
  const currentTodo = useMemo(() => {
    return TodosStore.todos.find(item => item.id === todosId);
  }, [isAdding])
  const [inputvalue, setInputvalue] = useState('');
  const eddClick = () => {
    let isUnique = !(currentTodo.todo_items.find(item => item.title === inputvalue));
    if (isUnique && inputvalue) {
      createTodo({ id: todosId, todoTitle: inputvalue })
        .then(data => TodosStore.addTask(todosId, data))
        .then(() => setIsAdding(!isAdding))
      setInputvalue('');
    }
    else {
      !inputvalue ? alert('Введите значение!') : alert('Такой список уже есть!');
    }
  }

  return (
    <article className='task__article'>
      <header className='task__article-header'>
        <h3 className='task__article-header-title'>{currentTodo.name}</h3>
        <form className='task__article-header-add' onSubmit={e => e.preventDefault()}>
          <MyTextArea className='task__article-header-input'
            inputvalue={inputvalue}
            setValue={e => setInputvalue(e.target.value)}
            placeholder='Добавить заметку' />
          <MyAddBtn className='task__article-header-btn' eddClick={eddClick}></MyAddBtn>
        </form>
      </header>
      <TaskItemListMemo props={currentTodo.todo_items} />
    </article>
  );
}