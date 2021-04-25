import React from 'react';

function Loader(props) {
    return (
        <div className='loading'>
            <h2>loading...</h2>
            <div className='load'>
                <div className='load_item'/>
                <div className='load_item'/>
                <div className='load_item'/>
            </div>
        </div>
    );
}

export default Loader;