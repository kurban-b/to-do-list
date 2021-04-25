import React from 'react';
import BtnDelete from "./btn-delete";
import Check from "./check";

function Todo(props) {
    return (
        <div className='todo'>
            <Check todo = {props.todo}/>
            <div className="title">
                {props.todo.title}
            </div>
            <BtnDelete />
        </div>
    )
}

export default Todo;