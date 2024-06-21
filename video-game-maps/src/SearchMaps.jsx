import React, { useState } from 'react'
import maps from './assets/items'
import Card from './Card.jsx'

const SearchMaps = () => {

    const [inputText, setInput] = useState("");

    const handleText = (event) => {
        setInput(event.target.value);
    }

    function changeText() {
        setText(inputText);
    }

    const querySearch = (text) => {
        if (inputText === "") {
            return [];
        }
        return maps.filter((map) => {
            return map.name.toLowerCase().includes(text.toLowerCase()) || map.game.toLowerCase().includes(text.toLowerCase())
        });
    };

    const filteredData = querySearch(inputText);

  return (
    <>
      <div className='search-bar'>
        <input id='search-text' type="text" placeholder='Search through maps...' value={inputText} onChange={handleText}></input> 
      </div>
      <div className='map-cards'>
        {filteredData.map((map) => (
            <Card mapid={map.id} image={map.image} name={map.name} game={map.game}/>
        ))}
      </div>
    </>
  )
}

export default SearchMaps