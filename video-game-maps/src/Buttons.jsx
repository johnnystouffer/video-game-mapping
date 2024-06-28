import React from 'react'

const Buttons = (props) => {

    const altId = `Pic of ${props.value}`;

    return (
        <div className='button-container'>
            <img src={props.img} alt={altId} />
            <p> {props.value} </p>
        </div>
    )
}

export default Buttons
