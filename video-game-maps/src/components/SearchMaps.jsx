import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import maps from '../items.js'
import Card from './Card.jsx'
import PageLoading from './PageLoading.js'
import useImagesLoaded from '../util/imageLoading.js'
import '../css/SearchMaps.css'

const AuthButtons = () => {
  return (
    <>
      <button className="auth-button"><Link className='auth-text' to='/auth/login'><p>Sign In</p></Link></button>
    </>
  );
}

const AuthConfirmed = (params) => {
  return (
    <>
      <Link to={'/profile'} id='profile-button'>
        <i class="lar la-user gold"></i>
      </Link>
    </>
  );
}

const SearchMaps = () => {

    const [inputText, setInput] = useState("");

    const allImageUrls = (maps || []).map(m => m.image);
    const imagesReady = useImagesLoaded(allImageUrls);

    const handleText = (event) => {
        setInput(event.target.value);
    }

    // Whenever inputed text updates, automatically display map Cards that include the inputed text in its name
    const querySearch = (text) => {
        return maps.filter((map) => {
            return map.name.toLowerCase().includes(text.toLowerCase()) || map.game.toLowerCase().includes(text.toLowerCase())
        });
    };

    const filteredData = querySearch(inputText);

    if (!imagesReady) {
      return (<PageLoading/>);
    }

    return (
      <>
        <div className='background-top'>
          <div className="auth-buttons">
            {localStorage.getItem('token') ? <AuthConfirmed username={localStorage.getItem('username')}/> : <AuthButtons/>}
          </div>
          <div className='header-text'>
            <h1>Odyssey Maps</h1>
          </div>
        </div>
        <div className='search-container'>
          <div className='search-box'>
            <i className="las la-search" aria-hidden='true'></i>
            <input id='search-text' type="text" placeholder='Search through maps...' value={inputText} onChange={handleText}></input> 
          </div>
        </div>
        <div className='map-cards'>
          {filteredData.map((map) => (
            <Card key={map.id} id={map.id} image={map.image} name={map.name} game={map.game}/>
          ))}
        </div>
      </>
    );
}

export default SearchMaps