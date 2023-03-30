import React from 'react';

export const AddTodoForm = () => {
    return(
        <div>
            <form >
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle" type="text"/>
                <button>Add</button>
            </form>
        </div>
    )
}