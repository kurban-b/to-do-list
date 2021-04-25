const initialState = {
    todos: [],
    loading: true
}

export function reducer (state = initialState, action) {
    switch (action.type){
        case 'loading-start':
            return {
                ...state,
                loading: true
            }
        case 'changeCheckbox':
            return {
                ...state,
                todos: state.todos.map((todo)=> {
                    if (todo.id === action.payload){
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo
                })
            }
        case 'delete':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            }
        case 'dataTodos':
            return {
                loading: false,
                todos: action.payload
            };
        default:
            return state;
    }
}