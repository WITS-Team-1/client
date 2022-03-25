import React, { useState, useRef } from 'react';
import './ToDoItem/Todo.css';
import taskButton from '/Users/user/Documents/GitHub/client/src/assets/images/ToDo/coolicon.png';



let counter = 0;
function AddTodo(props) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();

  const updateInput = (e) => {
    setTodo(e.target.value);
  };
  const submitTodo = (e) => {
    e.preventDefault();
    if (counter < 4) {
      props.addTodoFn(todo);
      inputRef.current.value = '';
      counter++;
    }
  };

  return (
    <div className='addTodoContainer'>
      <form onSubmit={submitTodo}>
        <button type='submit'>
          <img src={taskButton} />
        </button>
        <input
          ref={inputRef}
          id='addTodoInput'
          onChange={updateInput}
          type='text'
          placeholder='Add new task'
        ></input>
      </form>
    </div>
  );
}

export default AddTodo;