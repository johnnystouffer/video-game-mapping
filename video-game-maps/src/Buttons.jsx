import React, { useState } from 'react'
import './Buttons.css'

const Buttons = (props) => {

    const altId = `Pic of ${props.value}`;

    const [isSelected, setIsSelected] = useState(false);
    function handleClick() {
        setIsSelected(prevState => !prevState);
    }

    return (
        <div className={isSelected ? 'filter-button-selected' : 'filter-button-unselected'} onClick={handleClick}>
            <img className='filter-button' src={props.value} alt={altId}/>
        </div>
    )
}

export default Buttons
