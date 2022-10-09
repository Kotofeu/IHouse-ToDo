import React, { useMemo, useState } from 'react';
import TaskItemList from './TaskItemList';
import MyAddBtn from './UI/MyAddBtn/MyAddBtn';
import MyTextArea from './UI/MyTextArea/MyTextArea';
import { createTodo, deleteTodo } from '../API/todosAPI.js';
import TodosStore from '../store/TodosStore';
import MyDeleteBtn from './UI/MyDeleteBtn/MyDeleteBtn';

const TaskArticle = React.memo(({ todosId }) => {
  const [inputvalue, setInputvalue] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  const currentTodo = useMemo(() => {
    return TodosStore.todos.find(item => item.id === todosId);
  }, [TodosStore.todos]);
  const addClick = () => {
    let isUnique = !(currentTodo.todo_items.find(item => item.title === inputvalue));
    if (isUnique && inputvalue) {
      createTodo({ id: todosId, todoTitle: inputvalue })
        .then(data => TodosStore.addTask(todosId, data));
      setInputvalue('');
    }
    else {
      !inputvalue ? alert('Введите значение!') : alert('Такой список уже есть!');
    }
  }
  const deleteClick = () => {
    setIsDeleted(true)
    setTimeout(() => deleteTodo({ id: todosId }).then(() => TodosStore.deleteTodo(todosId)), 300);
  }
  return (
    <article className={`task__article ${isDeleted
      ? 'task__article--deleted'
      : ''
      }`}>
      <header className='task__article-header'>
        <div className='task__article-header-title-box'>
          <h3 className='task__article-header-title'>{currentTodo.name}</h3>
          <MyDeleteBtn className='task__article-header-delete' onClick={deleteClick} />
        </div>
        <form className='task__article-header-add' onSubmit={e => e.preventDefault()}>
          <MyTextArea className='task__article-header-input'
            inputvalue={inputvalue}
            setValue={e => setInputvalue(e.target.value)}
            placeholder='Добавить заметку' />
          <MyAddBtn className='task__article-header-edit' onClick={addClick}></MyAddBtn>
        </form>
      </header>
      <TaskItemList todo_items={
        currentTodo.todo_items.sort((a, b) => a.id - b.id)
      } />
    </article>
  );
})
export default TaskArticle;