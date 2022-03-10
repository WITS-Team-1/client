import React, { useState, useRef } from "react"
// import '/Users/user/Documents/GitHub/client/src/ToDoItem/Todo.css';
import '../ToDoItem/Todo.css'

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

function AddTodo(props) {

    const [todo, setTodo] = useState('')
    const inputRef = useRef();


    const updateInput = (e) => {
        setTodo(e.target.value)
    }
    const submitTodo = (e) => {
        e.preventDefault();
        props.addTodoFn(todo);
        inputRef.current.value = ""
    }

    return (
        <div className='addTodoContainer'>
            <form onSubmit={submitTodo}>

                <input ref={inputRef} id='addTodoInput' onChange={updateInput} type='text'></input>

                <button type='submit'>Add new task</button>
            </form>
        </div>
    );



}

export default AddTodo;