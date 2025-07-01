import React, { useState, useRef } from 'react';
import Buttons from './Buttons.jsx';
import '../css/Map.css';
import mapdata from '../mapinfo.js';
import { useParams, Link, useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import LeafletMap from './LeafletMap.jsx';

const SideBar = () => {
    const { id } = useParams();
    const mapObj = mapdata.find((obj) => obj.id === id);
    const nav = useNavigate();

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
    const [refreshMap, setRefreshMap] = useState(false);
    const [filterMode, setFilterMode] = useState('all');
    const [toggle, setToggle] = useState(false); 

    const sideBarRef = useRef(null);
    const mainContentRef = useRef(null);

    const triggerMapRefresh = () => {
        setRefreshMap((prev) => !prev);
    };

    const handleSidebarToggle = () => {
        if (sideBarRef.current && mainContentRef.current) {
            sideBarRef.current.classList.toggle('--toggled');
            mainContentRef.current.classList.toggle('--toggled');
        }
        setToggle((prev) => !prev);
        setTimeout(triggerMapRefresh, 350);
    };

    const handleFiltering = (change) => {
        if (!localStorage.getItem('token')) {
            nav('/auth/login');
        }
        setFilterMode(change.target.value);
    };

    const handleButtonClick = (index) => {
        const newButtonStates = [...buttonStates];
        newButtonStates[index][0] = !newButtonStates[index][0];
        setButtonStates(newButtonStates);
    };

    return (
        <div className='layout-container'>
            <div id='toggle-sidebar-side'>
                <img
                    src='../assets/sidebar-icon.svg'
                    onClick={handleSidebarToggle}
                    id='sidebar-arrow'
                    alt='sidebar'
                    aria-label='Toggle sidebar'
                    role='button'
                    tabIndex={0}
                />
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

                <div className="filter-dropdown">
                    <label htmlFor="progress-filter">Filter: </label>
                    <select
                        id="progress-filter"
                        value={filterMode}
                        onChange={handleFiltering}
                    >
                        <option value="all">Show Everything</option>
                        <option value="incomplete">Show Only Incomplete</option>
                        <option value="completed">Show Only Completed</option>
                    </select>
                </div>
            </div>

            <div className='main-content' ref={mainContentRef}>
                <LeafletMap 
                    buttonStates={buttonStates} 
                    mapUrl={mapObj.mapImage} 
                    mapId={mapObj.id} 
                    refreshTrigger={refreshMap} 
                    filterMode={filterMode}
                />
            </div>
        </div>
    );
};

export default SideBar;
