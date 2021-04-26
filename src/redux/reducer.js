const initialState = {
    todos: [],
    loading: false,
    loadingUsers: false
}

export function reducer (state = initialState, action) {
    switch (action.type){
        case 'todos/loading/start':
            return {
                ...state,
                loading: true
            }
        case 'users/loading/start':
            return {
                ...state,
                loadingUsers: true
            }
        case 'todos/todo/get-todos':
            return {
                ...state,
                loading: false,
                todos: action.payload
            };
        case 'users/load/getUsers' :
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            }
        case 'todo/checkbox/loader':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload){
                        return {
                            ...todo,
                            checking: true
                        }
                    }
                    return todo
                })
            }
        case 'todo/checkbox/change':
            return {
                ...state,
                todos: state.todos.map((todo)=> {
                    if (todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed,
                            checking: false
                        }
                    }
                    return todo
                })
            }
        case 'todo/btn-delete/disabled':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload){
                        return {
                            ...todo,
                            disabled: true
                        }
                    }
                    return todo
                })
            }
        case 'todo/btn-delete/delete':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        default:
            return state;
    }
}