import React, { useState, useRef } from 'react';
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
        return (
            <div className='error-no-map'>
                <h1>ERROR: 404</h1>
                <h2>Map does not exist (yet). Go back to our home page.</h2>
                <Link to='/' className='home-but'><p>Home</p></Link>
            </div>
        );
    }

    const title = `${mapObj.fullName}`;
    const subtitle = `from ${mapObj.game}`;
    const description = `${mapObj.desc}`;
    const imgUrl = `${mapObj.image}`;
    const buttons = mapObj.buttons || [];

    const [buttonStates, setButtonStates] = useState(buttons.map((button) => [false, button[1]]));
    const [isToggled, setToggle] = useState(false);
    const [refreshMap, setRefreshMap] = useState(false);
    const [completionButtons, setCompletion] = useState();
    const [percent, setPercent] = useState(0);

    // Create refs for sidebar and main content
    const sideBarRef = useRef(null);
    const mainContentRef = useRef(null);

    const triggerMapRefresh = () => {
        setRefreshMap((prev) => !prev); // Toggle refresh state to force Leaflet re-render
    };

    const handleSidebarToggle = () => {
        if (sideBarRef.current && mainContentRef.current) {
            sideBarRef.current.classList.toggle('--toggled');
            mainContentRef.current.classList.toggle('--toggled');
        }
        setToggle((prev) => !prev);
        triggerMapRefresh();
    };

    const handleButtonClick = (index) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[index][0] = !newButtonStates[index][0];
        setButtonStates(newButtonStates);
        triggerMapRefresh();
    }

    return (
        <>
            <div className='layout-container'>
                <div id='toggle-sidebar-side'>
                    <img src='../assets/sidebar-icon.svg' onClick={handleSidebarToggle} id='sidebar-arrow' alt='sidebar' />
                </div>
                <div className='side-bar' ref={sideBarRef}>
                    <div className="home">
                        <Link className='home-link' to='/'>
                            <img className='arrow-back' src="/assets/back.png" alt="Back Arrow" />
                            <p className='other-map'>Other Maps</p>
                        </Link>
                    </div>
                    <div className="game-description">
                        <img id="game-photo" src={imgUrl} alt="Picture of Game" className="game-image" />
                        <h1 id='game-title-map'>{title}</h1>
                        <h2 id='game-subtitle-map'>{subtitle}</h2>
                        <p id='game-description-map'>{description}</p><br />
                    </div>
                    <div className='status-container'>
                        <h3 className='button-title'>Status of Map</h3>
                        <div className='status-bar'>
                            <div className='status-progress' style={ { width: `${percent}%` } }></div>
                        </div>
                    </div>
                    <div className='buttons-container'>
                        {buttons.map((btn, index) => (
                            <Buttons 
                                key={index} 
                                value={btn} 
                                isSelected={buttonStates[index][0]} 
                                handleClick={() => handleButtonClick(index)} 
                            />
                        ))}
                    </div>
                </div>
                <div className='main-content' ref={mainContentRef}>
                    <LeafletMap 
                        buttonStates={buttonStates} 
                        mapUrl={mapObj.mapImage} 
                        mapId={mapObj.id} 
                        refreshTrigger={refreshMap} 
                    />
                </div>
            </div>
        </>
    );
}


export default Map;
