import React, { useState, useRef } from 'react';
import '../ToDoItem/Todo.css';
import taskButton from '../assets/images/coolicon.png';
/**class AddTodo extends React.Component {

    constructor(){
        super();
        this.state = {
            todo: ''
        };
    }

    render(){
        return(
        <div className = 'addTodoContainer'>


            <form onSubmit={(e) => this.submitTodo(e)}>

                <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text'></input>

        

            
                <button type='submit'>Add new task</button>
            </form>
        </div>
        );
    }
    updateInput = (e) => {
        this.setState({ todo: e.target.value })
    }
    submitTodo = (e) => {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = '';
    }

}**/
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
