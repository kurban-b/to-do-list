import React, {useState} from 'react';

function Statistics(props) {

    return (
        <div className='statistics'>
            <ul>
                <li>Количество дел всего: <span>{props.todosArray.length}</span></li>
                <li>Количество выполненных дел: <span>{props.todosArray.reduce((sum, item)=>{
                    if (item.selected){
                        return sum + 1
                    } else {
                        return sum + 0
                    }
                },0)}</span></li>
                <li>Количество избранных дел: <span>{props.todosArray.reduce((sum, item)=>{
                    if (item.favorites){
                        return sum + 1
                    } else {
                        return sum + 0
                    }
                },0)}</span></li>
            </ul>
        </div>
    );
}

export default Statistics;