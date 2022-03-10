import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import TodoList from './ToDoList/ToDoList';

import AddTodo from './AddTodo/addTodo';
import './App.css';

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

/**class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:[]
    };
  }

  render(){
    return (
      <div>
        <AddTodo addTodoFn={this.addTodo}></AddTodo>
        <TodoList updateTodoFn ={this.updateTodo} todos={this.state.todos}></TodoList>
        
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos  });
    }
    else{
      console.log('No todos');
    }
  }

  addTodo = async (todo) => {
    await this.setState({ todos: [...this.state.todos, {
      text: todo, 
      completed: false
    }] });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'));
  }


  updateTodo = async (todo) => {
    const newTodos =this.state.todos.map(_todo => {
      if(todo === _todo)
        return{
          text: todo.text,
          completed: !todo.completed
        }
      else
        return _todo
    });
    await this.setState({ todos: newTodos })
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }



}**/

function App (props) {

  const [todo, setTodo] = useState([])

  useEffect(()=>{
    const todos = localStorage.getItem('todos');
    if(todos) {
      const savedTodos = JSON.parse(todos);
      // this.setState({ todos: savedTodos  });
      setTodo(savedTodos)
    }
    else{
      console.log('No todos');
    }
  }, [])

  // const componentDidMount = () => {
  //   const todos = localStorage.getItem('todos');
  //   if(todos) {
  //     const savedTodos = JSON.parse(todos);
  //     this.setState({ todos: savedTodos  });
  //   }
  //   else{
  //     console.log('No todos');
  //   }
  // }

  const addTodo = async (todo) => {
    // await this.setState({ todos: [...this.state.todos, {
    //   text: todo, 
    //   completed: false
    // }] });

    // console.log(todo)
    await setTodo((prev)=>{
      const todoObj = {
        text: todo,
        completed: false,
      }
      console.log(todoObj)
      return {
        ...prev,
        todoObj
      }
    })
  
    localStorage.setItem('todos', JSON.stringify(todo));
    console.log(localStorage.getItem('todos'));
  }


  const updateTodo = async (todo) => {
    const newTodos = todo.map(_todo => {
      if(todo === _todo)
        return{
          text: todo.text,
          completed: !todo.completed
        }
      else
        return _todo
    });
    // await this.setState({ todos: newTodos })
    await setTodo((prev)=>{
      return {
        ...prev,
        newTodos
      }
    })
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }


    return (
      <div>
        <AddTodo addTodoFn={addTodo}></AddTodo>
        <TodoList updateTodoFn ={updateTodo} todos={todo}></TodoList>
        
      </div>
    );
  

  



}




export default App;
