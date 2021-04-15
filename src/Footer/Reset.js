import React from 'react';

function Reset(props) {
    return (
        <div className='reset'>
            <button
                className='reset_btn'
                onClick={()=>{
                    props.setArray([])
                }}
            >
                Удалить все дела
            </button>
        </div>
    );
}

export default Reset;