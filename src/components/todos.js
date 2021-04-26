import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadingData, loadingUsers} from "../redux/actionss";
import Todo from "./todo";
import Loader from "./loader";

function Todos() {
    const dispatcher = useDispatch();
    const todos = useSelector(state => state.todos);
    const users = useSelector(state => state.users)
    const loading = useSelector(state => state.loading);
    const loadUsers = useSelector(state => state.loadingUsers)


    useEffect(()=>{
        dispatcher(loadingData())
        dispatcher(loadingUsers())
    },[])

    return (
        <div className='todos'>
            {loading || loadUsers ? <Loader /> :
                todos.map( todo => <Todo todo={todo} users = {users} key={todo.id}/> )}
        </div>
    );
}

export default Todos;