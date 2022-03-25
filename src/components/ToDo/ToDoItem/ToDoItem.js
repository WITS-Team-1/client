import React from 'react';
import './Todo.css'


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