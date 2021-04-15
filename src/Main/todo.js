import Complited from './icons/completed.svg';
import DeleteBtn from './icons/delete.svg';
import Star1 from './icons/Star1.svg';
import Star2 from './icons/Star2.svg';
import Plus from './icons/plus.svg'

function Todo(props) {
    return (
            <>
                {props.todosArray.map((item, index)=>{
                    return (
                        <div className='todo'>
                            <div className='todo_left'>
                                <button
                                    className = {`btn_complited ${item.selected ? 'active':''}`}
                                    onClick = {() => {
                                        props.setArray(props.todosArray.map((el, i) => {
                                            if (index === i) {
                                                el.selected = !el.selected
                                                return el
                                            } return el
                                        }))
                                    }}
                                >
                                    <img src={item.selected ? Complited : Plus} alt="1"/>
                                </button>
                            </div>
                            <div className={`todo_info ${item.selected ? 'active':''}`}>
                                {item.name}
                            </div>
                            <div className='todo_favority'>
                                <button
                                    className='btn_favority'
                                    onClick = {()=>{
                                        props.setArray(props.todosArray.map((el, i) => {
                                            if (index === i) {
                                                el.favorites = !el.favorites
                                                return el
                                            } return el
                                        }))
                                    }}
                                >
                                    <img src={item.favorites ? Star2 : Star1} alt="2"/>
                                </button>
                            </div>
                            <div className='todo_delete'>
                                <button
                                    className='btn_delete'
                                    onClick = {() => {
                                        props.setArray(props.todosArray.filter((el, i) => {
                                            return index === i ? false : true
                                        }))
                                    }}
                                >
                                    <img src={DeleteBtn} alt="3"/>
                                </button>
                            </div>
                        </div>
                    )
                })}
            </>
    );
}

export default Todo;