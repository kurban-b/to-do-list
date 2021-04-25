import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadingData} from "../redux/actionss";
import Todo from "./todo";
import Loader from "./loader";

function Todos() {
    const dispatcher = useDispatch();
    const todos = useSelector(state => state.todos);
    const loading = useSelector(state => state.loading)

    useEffect(()=>{
        dispatcher(loadingData())
    },[])

    return (
        <div className='todos'>
            {loading ? <Loader /> : todos.map( todo => <Todo todo={todo} /> )}
        </div>
    );
}

export default Todos;