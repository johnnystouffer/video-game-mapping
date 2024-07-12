import React from 'react';
import './Buttons.css';

const Buttons = (props) => {
    const { value, isSelected, handleClick } = props;
    const altId = `Pic of ${value[0]}`;

    return (
        <>
            <div
                className={isSelected ? 'filter-button-selected' : 'filter-button-unselected'}
                onClick={handleClick}
            >
                <img className='filter-button-pic' src={value[2]} alt={altId} />
                <p className='filter-button-name'>{value[0]}</p>
            </div>
        </>
    );
};

export default Buttons;
