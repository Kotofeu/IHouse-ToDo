import React from 'react';
import {TaskItemMemo} from './TaskItem';
export default function TaskItemList({ props }) {
  return (
    <ul className='task__article-list'>
      {!props.length ? <h2 className='task__clear'>Нет заметок</h2> : null}
      {props.map(item =>
        <li className='task__article-item' key={item.id}>
          <TaskItemMemo text={item.title} />
        </li>
      )}
    </ul>
  );
}
export const TaskItemListMemo = React.memo(TaskItemList);