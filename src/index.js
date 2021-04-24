import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const initialState = {
    todos: [],
    loading: true
}

function reducer (state = initialState, action) {
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

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById("root")
)