import React from 'react';

const AddTodoForm = (props) =>{
    console.log("here is my props property:", props);

    const handleAddTodo = (event) =>{
        console.log(event);
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log("todoTitle:", todoTitle);
        props.onAddTodo(todoTitle);
        event.target.reset();
    }

    return(
        <div>
            <form onSubmit = {handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                <input name = "title" id = "todoTitle"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddTodoForm;