import React from 'react';
import {TaskItemMemo} from './TaskItem';
export default function TaskItemList({ props }) {
  try{
    if (!props.length){
      return (<h3 className='task__clear'>Нет заметок</h3>)
    }
  }
  catch{
    return (<h3 className='task__clear'>Нет заметок</h3>)
  }
  return (
    <ul className='task__article-list'>
      {props.map(item =>
        <li className='task__article-item' key={item.id}>
          <TaskItemMemo text={item.title} />
        </li>
      )}
    </ul>
  );
}
export const TaskItemListMemo = React.memo(TaskItemList);