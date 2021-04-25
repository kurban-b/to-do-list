import React from 'react';
import {deleteTodo} from "../redux/actionss";
import {useDispatch} from "react-redux";

function BtnDelete(props) {
    const dispatcher = useDispatch();

    function handleDelete(id) {
        dispatcher(deleteTodo(id))
    }
    return (
        <div className="delete">
            <button onClick={()=>{
                handleDelete(props.todo.id)
            }}>
                &#10006;
            </button>
        </div>
    );
}

export default BtnDelete;