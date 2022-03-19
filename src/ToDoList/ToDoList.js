import React from 'react';
import TodoItem from '../ToDoItem/ToDoItem';

/**class TodoList extends React.Component {

    render(){

        const{ todos} = this.props;

        return(
        <div className='todoListContainer'>

            {
                todos.map((_todo, _index) => {
                    return(
                        <TodoItem updateTodoFn = {this.updateTodo} key={_index} todo={_todo}></TodoItem>
                    )
                })
            }
        </div>
        );
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }

}**/

function TodoList(props) {
  const { todos } = props;

  const updateTodo = (todo) => {
    props.updateTodoFn(todo);
  };
  return (
    <div className='todoListContainer'>
      {todos.map((_todo, _index) => {
        return (
          <TodoItem
            updateTodoFn={updateTodo}
            key={_index}
            todo={_todo}
          ></TodoItem>
        );
      })}
    </div>
  );
}

export default TodoList;
