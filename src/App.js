import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";
import TodoProvider from './components/TodoProvider';

  function App() {
  
    return (
      <>
      <TodoProvider>
        <div className='App'>
          <TodoForm />
          <TodoList />
        </div>
      </TodoProvider>
    </>
    );
}

export default App;
