import React from 'react';
import {deleteTodo} from "../redux/actionss";
import {useDispatch} from "react-redux";
import ReactLoading from "react-loading";

function BtnDelete(props) {
    const dispatcher = useDispatch();

    function handleDelete(id) {
        dispatcher(deleteTodo(id))
    }

    return (
        <div className="delete">
            <button
                disabled={props.todo.disabled}
                onClick={()=>{
                    handleDelete(props.todo.id)
                }}
            >
                {
                    props.todo.disabled ?
                        <ReactLoading type="spin" width='16px' height='16px' color='white'/>
                        :
                    <>&#10006;</>
                }

            </button>
        </div>
    );
}

export default BtnDelete;