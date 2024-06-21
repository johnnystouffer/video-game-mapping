import React, { useState } from 'react'
import searchIcon from './assets/search-icon.png'

const SearchMaps = () => {

    const [currText, setText] = useState("");
    const [inputText, setInput] = useState("");

    const handleText = (event) => {
        setInput(event.target.value);
    }

    function changeText() {
        setText(inputText);
    }

  return (
    <div className='search-bar'>
      <input id='search-text' type="text" placeholder='Search through maps...' value={inputText} onChange={handleText}></input> 
      <button onClick={changeText} id='search-button'><img src={searchIcon} alt="Search Icon" /></button>
      <p>the current text is: {currText}</p>
    </div>
  )
}

export default SearchMaps
