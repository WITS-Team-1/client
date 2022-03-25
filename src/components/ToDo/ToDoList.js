import React from 'react';
import TodoItem from './ToDoItem/ToDoItem';



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