import React from 'react';
import TodoListItem from './TodoListItem';


const todoList = [
    {
      "id":1,
      "title":"Complete assignment",
    },
    {
      "id":2,
      "title":"Complete mindset",
    },
    {
      "id":3,
      "title":"Sent the GitHub link to the reviewer",
    },
  ];

  const TodoList = ({ todoList }) => {
    return (
        <ul>
            {todoList.map((todo) => (
                <TodoListItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};

export default TodoList;
