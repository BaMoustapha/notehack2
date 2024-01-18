import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
import { useTodoContext } from './TodoContext';



const App = () => {
   
   const {backgroundColors} = useTodoContext();
  
   
  return (
    
    <div className={`App p-5 ${backgroundColors}`}>
    <Header />
    <TodoList />
    </div>
  );
};

export default App;
