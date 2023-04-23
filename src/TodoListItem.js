import React from 'react';

const TodoListItem = (props) =>{
    console.log(props);
    return (
        <div>
            {/*<li>{props.todoAttribute.title}</li>*/}
          <li>{props.title}</li>          
        </div>
    )

}

export default TodoListItem;