import React from 'react';

let WishItem = (props) => {
    return (
        <div className='WishItem'>
            <div>{props.wish}</div>
            <button>&times;</button>

        </div>
    )
}

export default WishItem
