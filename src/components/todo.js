import React from 'react';
import BtnDelete from "./btn-delete";
import Check from "./check";

function Todo(props) {
    const user = props.users.find(item => item.id === props.todo.userId)
    return (
        <div className='todo'>
            <Check todo = {props.todo}/>
            <div className="title">
                <div className='autor'>autor: {user.name}</div>
                <div className='text'>{props.todo.title} </div>
            </div>
            <BtnDelete todo = {props.todo}/>
        </div>
    )
}

export default Todo;