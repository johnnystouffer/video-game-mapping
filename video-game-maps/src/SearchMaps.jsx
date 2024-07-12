import React, { useState } from 'react'
import maps from './websitedata/items'
import Card from './Card.jsx'
import './SearchMaps.css'

const SearchMaps = () => {

    // Retrieve the text in the textbox whenever it is changed
    const [inputText, setInput] = useState("");
    const handleText = (event) => {
        setInput(event.target.value);
    }

    // Whenever inputed text updates, automatically display map Cards that include the inputed text in its name
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