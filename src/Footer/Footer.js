import React from 'react';
import Statistics from "./Statistics";
import Reset from "./Reset";

function Footer(props) {
    return (
        <div className='footer'>
            <Statistics todosArray = {props.todosArray}/>
            <Reset todosArray = {props.todosArray} setArray = {props.setArray}/>
        </div>
    );
}

export default Footer;