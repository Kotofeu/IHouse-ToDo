import React, { useMemo, useState } from 'react';
import TaskItemList from './TaskItemList';
import MyAddBtn from './UI/MyBtn/MyAddBtn/MyAddBtn';
import MyTextArea from './UI/MyTextArea/MyTextArea';
import { createTodo, deleteTodo, updateTodo } from '../API/todosAPI.js';
import TodosStore from '../store/TodosStore';
import MyDeleteBtn from './UI/MyBtn/MyDeleteBtn/MyDeleteBtn';
import MyEditBtn from './UI/MyBtn/MyEditBtn/MyEditBtn';
import MySaveBtn from './UI/MyBtn/MySaveBtn/MySaveBtn';

const TaskArticle = React.memo(({ todosId }) => {
  const [inputvalue, setInputvalue] = useState('');
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [todosTitle, setTodosTitle] = useState();
  const currentTodo = useMemo(() => {
    setTodosTitle(TodosStore.todos.find(item => item.id === todosId).name)
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
  const Delete = () => {
    setIsDeleted(true)
    setTimeout(() => deleteTodo({ id: todosId }).then(() => TodosStore.deleteTodo(todosId)), 300);
  }
  const Edit = () => {
    setIsEdit((prevState) => !prevState);
  }
  const Save = (e) => {
    e.preventDefault();
    setIsEdit((prevState) => !prevState);
    updateTodo({ id: todosId, name: todosTitle });
  }
  return (
    <article className={`task__article ${isDeleted
      ? 'task__article--deleted'
      : ''
      }`}>
      <header className='task__article-header'>
        <div className='task__article-header-title-box'>
          <form className='task__article-title-form' onSubmit={Save}>
            <label
              className='task__article-title-title'
              htmlFor={todosId}>
              {todosTitle}
            </label>
            <input className={`task__article-title-input ${isEdit
              ? 'task__article-title-input--active'
              : ''
              }`}
              id={todosId}
              value={todosTitle}
              onChange={e => setTodosTitle(e.target.value)}
            />
          </form>
          <div className='task__article-header-btns'>
            {isEdit
              ? <MySaveBtn className='task__article-header-btn' onClick={Save} />
              : <MyEditBtn className='task__article-header-btn' onClick={Edit} />
            }
            <MyDeleteBtn className='task__article-header-btn' onClick={Delete} />

          </div>

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