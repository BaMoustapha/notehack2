import React, { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [newTask, setNewTask] = useState('');
  const { addTask, editTask, editIndex } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      
      editTask(editIndex, { taskName: newTask });
    } else {
      addTask({ taskName: newTask });
    }

    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
