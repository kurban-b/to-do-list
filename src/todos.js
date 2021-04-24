import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeComplited, deleteTodo, loadingData} from "./actionss";
import active from "./Vector1.svg"
import deactive from "./Vector2.svg"

function Todos() {
    const dispatcher = useDispatch();
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)

    useEffect(()=>{
        dispatcher(loadingData())
    },[])

    function handleChange(id, completed) {
        dispatcher(changeComplited(id, completed))
    }

    function handleDelete(id) {
        dispatcher(deleteTodo(id))
    }

    return (
        <div className='todos'>
            {loading ?
                <div className='loading'>
                    <h2>loading...</h2>
                    <div className='load'>
                        <div className='load_item'/>
                        <div className='load_item'/>
                        <div className='load_item'/>
                    </div>
                </div>
                :
                todos.map((todo) => {
                    return (
                        <div className='todo'>
                            <div className='check'>
                                <label htmlFor={todo.id}>
                                    {todo.completed ?
                                        <img src={active} alt=""/>:
                                        <img src={deactive} alt=""/>
                                    }
                                </label>
                                <input
                                    id={todo.id}
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={()=>{
                                        handleChange(todo.id, todo.completed)
                                    }}
                                />
                            </div>
                            <div className="title">
                                {todo.title}
                            </div>
                            <div className="delete">
                                <button onClick={()=>{
                                    handleDelete(todo.id)
                                }}>
                                    &#10006;
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Todos;