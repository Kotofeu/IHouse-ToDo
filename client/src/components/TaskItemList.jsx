import React from 'react';
import TaskItem from './TaskItem';
const TaskItemList = React.memo(({ todo_items }) => {
  if (!todo_items.length) {
    return (<h3 className='task__article-list-empty'>Нет заметок</h3>);
  }
  return (
    <ul className='task__article-list'>
      {todo_items.map(item =>
        <li className='task__article-item' key={item.id}>
          <TaskItem title={item.title} id={item.id} />
        </li>
      )}
    </ul>
  );
})
export default TaskItemList;