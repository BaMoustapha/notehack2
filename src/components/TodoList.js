import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { TrashFill, PencilFill } from 'react-bootstrap-icons';
import { useTodoContext } from './TodoContext'; 

const TodoList = () => {
  const {
    todos,
    newTodo,
    editIndex,
    setNewTodo,
    handleAddTodo,
    handleDeleteTodo,
    handleDeleteAll,
    handleEditTodo,
  } = useTodoContext();

  const handleOnchange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <main className='container'>
      <form className='d-flex bg-light my-5 p-4'>
        <input
          type="text"
          value={newTodo}
          onChange={handleOnchange}
          name="tache"
          className="form-control border border-dark border-1 w-100 me-2 mx-auto"
        />
        <button className='btn btn-success my-auto' onClick={handleAddTodo}>
          {editIndex !== null ? 'Modifier' : 'Ajouter'}
        </button>
      </form>

      <div className='container bg-white h-100 p-4'>
        <div className='d-flex justify-content-between'>
          <button type="button" className="btn btn-primary">
            Notifications <span className="badge bg bg-secondary">{todos.length}</span>
          </button>
          <button className='btn btn-primary' onClick={handleDeleteAll}>clear all</button>
        </div>
        <hr className='fs-3 fw-bold my-4'></hr>
        <div>
          {todos.map((todo, index) => (
            <div className='bg-white text-black w-50 mx-auto content' key={index}>
              <div className="mx-auto d-flex justify-content-between my-2">
                <p className="text-center fs-4 mt-2 ms-3">{todo.text}</p>
                <div>
                  <TrashFill className="text-danger fs-4" onClick={() => handleDeleteTodo(index)} />
                  <PencilFill className="text-primary fs-4 ms-2" onClick={() => handleEditTodo(index)} />
                </div>
              </div>
              <div>
                <p className='text-start ms-2'>{todo.date.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default TodoList;
