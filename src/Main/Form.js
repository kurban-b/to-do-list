import React, {useState} from 'react';

function Form(props) {
    const [name, setName] = useState('')
    console.log(props.todosArray)
    return (
        <form className='formAdd' action="#">
            <input
                type="text"
                placeholder='введите текст...'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
            <button
                className="btnAdd"
                onClick={()=>{
                    props.setArray([{name: name, favorites: false, selected: false}, ...props.todosArray])
                    setName('')
                }}
            >
                Добавить
            </button>
        </form>
    );
}

export default Form;