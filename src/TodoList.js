import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () =>{

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

  todoList.map((todo)=>console.log(todo));
  // todoList.map((todo)=>console.log(todo.id));
  // todoList.map((todo)=>console.log(todo.id));

  return(
    <div>
      <ul>
        {todoList.map((item)=>(<TodoListItem key={item.id}
        title={item.title} />)
        )}
      </ul>
    </div>
  )
}

export default TodoList;
