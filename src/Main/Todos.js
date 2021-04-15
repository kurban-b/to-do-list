import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    if (props.todosArray.length === 0){
        return (
            <div className='todos'>
                <h3 className='titleForTodo'>
                    Ваш список дел пуст!
                </h3>
            </div>
        )
    }
    return (
        <div className='todos'>
            <Todo todosArray = {props.todosArray} setArray = {props.setArray}/>
        </div>
    );
}

export default Todos;