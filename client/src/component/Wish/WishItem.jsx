import React from 'react';

let WishItem = (props) => {
    return (
        <div className='WishItem'>
            <div><span>{props.id} </span>{props.wish}</div>
            <button>&times;</button>

        </div>
    )
}

export default WishItem
