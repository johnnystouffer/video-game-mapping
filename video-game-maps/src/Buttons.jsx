import React, { useState } from 'react'
import './Buttons.css'

const Buttons = (props) => {

    const altId = `Pic location: ${props.value}`;

    const [isSelected, setIsSelected] = useState(false);
    function handleClick() {
        setIsSelected(prevState => !prevState);
    }

    return (
        <>
            <div className={isSelected ? 'filter-button-selected' : 'filter-button-unselected'} onClick={handleClick}>
                <img className='filter-button-pic'src={props.value} alt={altId}/>
                <p className='filter-button-name'>Item</p>
            </div>
        </>
    )
}

export default Buttons
