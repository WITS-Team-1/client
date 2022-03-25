import React, { useState, useEffect, useRef } from 'react';
import TodoList from './ToDoList';
import closeButton from '../../assets/images/ToDo/closeButton.png';
import AddTodo from './addTodo';


import './ToDoItem/Todo.css';



function ToDoMaster(props) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    console.log(todos);
    if (todos) {
      const savedTodos = JSON.parse(todos);
      setTodos(savedTodos);
    } else {
      console.log('No todos');
    }
  }, []);

  const addTodo = async (todo) => {
    await setTodos((prev) => {
      localStorage.setItem(
        'todos',
        JSON.stringify([
          ...prev,
          {
            text: todo,
            completed: false,
          },
        ])
      );

      return [
        ...prev,
        {
          text: todo,
          completed: false,
        },
      ];
    });

    console.log(localStorage.getItem('todos'));
  };

  const updateTodo = async (todo) => {
    const newTodos = todos.map((_todo) => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed,
        };
      else return _todo;
    });

    await setTodos((prev) => {
      localStorage.setItem('todos', JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const modalHandler = (e) => {
    e.preventDefault();
    props.setHide();
  };
  const inputRef = useRef();

  return (
    <div className='widgetcontainer' style={{ display: props.show ? 'flex' : 'none' }}>
      <div className='widgetheader'>
        <input
          ref={inputRef}
          id='title'
          type='text'
          placeholder='List Item'
        ></input>
        <button onClick={modalHandler}>
          <img src={closeButton} alt='close' width={14} />
        </button>
      </div>
      <TodoList updateTodoFn={updateTodo} todos={todos}></TodoList>
      <AddTodo addTodoFn={addTodo}></AddTodo>
    </div>
  );
}

export default ToDoMaster;