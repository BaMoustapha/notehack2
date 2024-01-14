import React, { useState } from 'react';
import TodoContext from './TodoContext';
 
const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
 
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const editTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
  };
 

  const deleteTask = (index) => {
    const updatedTodos = [...tasks];
    updatedTodos.splice(index, 1);
    setTasks(updatedTodos);
    setEditIndex(null);
  };
 
  return (
    <TodoContext.Provider value={{ tasks, addTask, deleteTask, editTask, editIndex }}>
      {children}
    </TodoContext.Provider>
  );
};
 
export default TodoProvider;