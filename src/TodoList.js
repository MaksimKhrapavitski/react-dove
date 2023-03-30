import React from 'react';

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

  const listItems = todoList.map((item) =>
    <li key={item.id}>{item.title}</li>
  );


export const TodoList = ()=> {
    return (
        <div>
            <ul>
        {todoList.map(function (item) {
        return (
          <div>
            <li key={item.id}>{item.title}</li>
          </div>
        );
        })}
            </ul>
        </div>
    );
}

