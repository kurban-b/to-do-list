import Form from "./Form";
import Todos from "./Todos";


function Main(props) {

    return (
        <div className='main'>
            <Form todosArray = {props.todosArray} setArray = {props.setArray}/>
            <Todos todosArray = {props.todosArray} setArray = {props.setArray}/>
        </div>
    );
}

export default Main;