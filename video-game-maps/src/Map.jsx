import React, { useState } from 'react';
import Buttons from './Buttons.jsx';
import './Map.css';
import mapdata from './mapinfo.js';
import { useParams, Link } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import LeafletMap from './LeafletMap.jsx';

const Map = () => {
    const { id } = useParams();

    const mapObj = mapdata.find((obj) => obj.id === id);

    if (!mapObj) {
        return <div className='error-no-map'>
            <h1>ERROR: 404</h1>
            <h2>Map does not exist (yet) Go back to our home page</h2>
            <Link to='/' className='home-but'><p>Home</p></Link>
        </div>;
    }

    const title = `${mapObj.fullName}`;
    const subtitle = `from ${mapObj.game}`;
    const description = `${mapObj.desc}`;
    const imgUrl = `${mapObj.image}`;
    const buttons = mapObj.buttons || [];

    const [buttonStates, setButtonStates] = useState(buttons.map((button) => [false, button[1]]));

    const handleButtonClick = (index) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[index][0] = !newButtonStates[index][0];
        setButtonStates(newButtonStates);
    };

    return (
        <>
            <div className='layout-container'>
                <div className='side-bar'>
                    <div className="home">
                        <Link className='home-link' to='/'><img className='arrow-back' src="/assets/back.png" alt="Back Arrow" /><p className='other-map'>Other Maps</p></Link>
                    </div>
                    <div className="game-description">
                        <img id="game-photo" src={imgUrl} alt="Picture of Game" className="game-image" />
                        <h1 id='game-title-map'>{title}</h1>
                        <h2 id='game-subtitle-map'>{subtitle}</h2>
                        <p id='game-description-map'>{description}</p><br />
                    </div>
                    <div className='button-title'><h3>Toggle Map Elements</h3></div>
                    <div className='buttons-container'>
                        {buttons.map((btn, index) => (
                            <Buttons key={index} value={btn} isSelected={buttonStates[index][0]} handleClick={() => handleButtonClick(index)} />
                        ))}
                    </div>
                </div>
                <div className='main-content'>
                    <LeafletMap buttonStates={buttonStates} mapUrl={mapObj.mapImage} mapId={mapObj.id}/>
                </div>
            </div>
        </>
    );
}

export default Map;
