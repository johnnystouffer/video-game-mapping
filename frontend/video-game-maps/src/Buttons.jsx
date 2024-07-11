import React, { useState } from 'react'
import './Buttons.css'

const Buttons = (props) => {

    const altId = `Pic of ${props.value[0]}`;

    const [isSelected, setIsSelected] = useState(false);
    function handleClick() {
        setIsSelected(prevState => !prevState);
    }

    return (
        <>
            <div className={isSelected ? 'filter-button-selected' : 'filter-button-unselected'} onClick={handleClick}>
                <img className='filter-button-pic'src={props.value[1]} alt={altId}/>
                <p className='filter-button-name'>{props.value[0]}</p>
            </div>
        </>
    )
}

export default Buttons
