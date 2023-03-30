import React from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm/>
      <TodoList/>
      
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