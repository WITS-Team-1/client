import React from 'react';
import './Todo.css';

/**class TodoItem extends React.Component {

    render(){

        const { todo } = this.props;

        return(
            
            <div className = {'todoItem' + (todo.completed ? ' completed' : '')}  onClick={this.toggleTodo}>{todo.text}</div>
        );
    }

    toggleTodo = () => {
        this.props.updateTodoFn(this.props.todo);

    }

}**/

function TodoItem(props) {
  const { todo } = props;

  const toggleTodo = () => {
    props.updateTodoFn(props.todo);
  };

  return (
    <div
      className={'todoItem' + (todo.completed ? ' completed' : '')}
      onClick={toggleTodo}
    >
      {todo.text}
    </div>
  );
}

export default TodoItem;
