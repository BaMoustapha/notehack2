import React, { createContext, useContext, useState, useEffect } from 'react';
import './App.css';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [backgroundColors, setbackgroundColor] = useState('gradient1');


  const handleColorChange = (color) => {
    setbackgroundColor(color);

  }


  const handleAddTodo = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = { text: newTodo, date: new Date() };
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, { text: newTodo, date: new Date() }]);
    }
    setNewTodo('');
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditIndex(null);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setNewTodo(todos[index].text);
  };

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        newTodo,
        editIndex,
        setTodos,
        setNewTodo,
        setEditIndex,
        handleAddTodo,
        handleDeleteTodo,
        handleDeleteAll,
        handleEditTodo,
        backgroundColors,
        handleColorChange
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
