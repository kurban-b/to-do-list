import React from 'react';
import active from "./icons/Vector1.svg";
import deactive from "./icons/Vector2.svg";
import {useDispatch} from "react-redux";
import {changeComplited} from "../redux/actionss";

function Check(props) {
    const dispatcher = useDispatch();

    function handleChange(id, completed) {
        dispatcher(changeComplited(id, completed))
    }

    return (
        <div className='check'>
            <label htmlFor={props.todo.id}>
                {props.todo.completed ?
                    <img src={active} alt=""/>
                    :
                    <img src={deactive} alt=""/>
                }
            </label>
            <input
                id={props.todo.id}
                type="checkbox"
                checked={props.todo.completed}
                onChange={()=>{
                    handleChange(props.todo.id, props.todo.completed)
                }}
            />
        </div>
    );
}

export default Check;