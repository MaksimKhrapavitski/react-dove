import React from 'react';

const todoList = [
  {
    "id":1,
    "title":"complete assignment",
  },
  {
    "id":2,
    "title":"complete mindset",
  },
  {
    "id":3,
    "title":"sent the GitHub link to the reviewer",
  },
]

function App() {
  return (
    <div>
      <h1>Todo List</h1>
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

export default App;

  //   <div style={{ textAlign: 'center' }}>
  //     <header>
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
  //         Learn React
  //       </a>
  //     </header>
  //   </div>