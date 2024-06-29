import React from 'react';
import Buttons from './Buttons.jsx';
import './Map.css';
import mapdata from './assets/mapinfo.js';
import { useParams, Link } from 'react-router-dom';

const Map = () => {
    const { id } = useParams();

    const mapObj = mapdata.find((obj) => obj.id === id);

    if (!mapObj) {
        return <div>There is no map for this game yet :( We are currently working on Super Mario Odyssey Maps</div>;
    }

    const title = `${mapObj.fullName} from ${mapObj.game}`;
    const description = `${mapObj.desc}`;
    const imgUrl = `${mapObj.image}`;
    const buttons = mapObj.buttons || [];

    return (
        <>
            <div>
                <Link to='/'>
                    <button id='home-button'>
                        <img id="home-button-icon" src="src/assets/home-icon.png" alt="Button to go back to the home page"/>
                    </button>
                </Link>
            </div>
            <div className="game-description">
                <h1>{title}</h1>
                <img id="game-photo" src={imgUrl} alt="Picture of Game" className="game-image" />
                <p>{description}</p>
            </div>
            <div className='filter-icons-container'>
                {buttons.map((btn, index) => (
                    <Buttons key={index} value={btn} />
                ))}
            </div>
        </>
    );
}

export default Map;
