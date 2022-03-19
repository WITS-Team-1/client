import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import TodoList from './ToDoList/ToDoList';
import closeButton from './assets/images/x_button.png';
import AddTodo from './AddTodo/addTodo';

import './App.css';
import './ToDoItem/Todo.css';
import ClockComponent from './ClockComponent/ClockComponent';
import DateComponent from './ClockComponent/DateComponent';
import ChooseTheme from './ChooseThemeComponent/ChooseTheme';

import SplashScreen from './SplashScreen/SplashScreen';

/**function App() {

  return (
    <div className='App'>
      <ChooseTheme /> 
      <div className='font-face'>
        <header className='App-header'>

          <ClockComponent />
          <DateComponent />
          <SplashScreen />
          <TodoItem/>
          <TodoList/>
        </header>
      </div>
    </div>
  );

}**/

function App(props) {
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
    <div className='widgetcontainer' style={{ display: 'flex' }}>
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

export default App;
