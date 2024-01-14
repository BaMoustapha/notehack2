import React, { useContext } from 'react';
import TodoContext from './TodoContext';
 
const TodoList = () => {
  const { tasks, deleteTask, editTask } = useContext(TodoContext);
 
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.taskName}
          <button onClick={() => editTask(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;