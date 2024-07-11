import React, { useState } from 'react'
import maps from './assets/items'
import Card from './Card.jsx'
import './SearchMaps.css'

const SearchMaps = () => {

    const [inputText, setInput] = useState("");

    const handleText = (event) => {
        setInput(event.target.value);
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
      <div className='background-top'>
        <div className='header-text'>
          <h1>Video Game Maps</h1>
        </div>
        <div className='search-box'>
          <input id='search-text' type="text" placeholder='Search through maps...' value={inputText} onChange={handleText}></input> 
        </div>
      </div>
      <div className='map-cards'>
        {filteredData.map((map) => (
            <Card key={map.id} id={map.id} image={map.image} name={map.name} game={map.game}/>
        ))}
      </div>
    </>
  )
}

export default SearchMaps