import React, { useEffect, useState } from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import './LeafletMap.css';
import checkpoint_markers from './markers.js';

const MapReset = ({ refreshTrigger }) => {
    const map = useMap();

    useEffect(() => {
        if (refreshTrigger) {
            setTimeout(() => {
                map.invalidateSize();
            }, 300); 
        }
    }, [refreshTrigger, map]);

    return null;
};

const LeafletMap = ({ mapUrl, mapId, buttonStates, refreshTrigger }) => {
    
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

    const handleCompleted = () => {
        console.log("Got it connected");
    }

    // Filter markers based on buttonStates and the map it belongs to
    const filteredMarkers = checkpoint_markers.filter(marker => {
        const currState = buttonStates.find(state => state[1] === marker.type);
        return (currState ? currState[0] : true) && (marker.map === mapId);
    });

    const [completedMarkers, setMarkersCompleted] = useState(8);
    const [totalMarkers, setTotalMarkers] = useState(25);

    return (
        <>
            <div className='top-container'>
                <div className='status-container'>
                    <h3 id='status-text'>Progress: </h3>
                    <div id='bar-container'>
                        <div id='actual-bar' style={{width: (completedMarkers / totalMarkers)*100 + '%'}}></div>
                    </div>
                    <h3>{completedMarkers}/{totalMarkers} - {(completedMarkers / totalMarkers)*100}%</h3>
                </div>
            </div>
            <MapContainer
                center={[666, 660]} 
                zoom={0} 
                minZoom={-2} 
                maxZoom={1} 
                crs={L.CRS.Simple} 
            >
                <MapReset refreshTrigger={refreshTrigger} /> 

                <ImageOverlay url={mapUrl} bounds={bounds} />

                {filteredMarkers.map((marker, index) => {
                    const icon = new L.Icon({
                        iconUrl: marker.iconUrl,
                        iconSize: marker.type === 'odyssey' ? [30, 60] : [30, 30],
                    });

                    return (
                        <Marker key={index} position={marker.position} icon={icon}>
                            <Popup > 
                                <a target='_blank' rel="noopener noreferrer" href={marker.popupInfo.link}>
                                    <h4 id='marker-name'>{marker.name}</h4>
                                </a>
                                <p>{marker.popupInfo.description}</p>
                                <div onClick={handleCompleted} id='completed-button'>Mark Complete</div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </>
    );
};

export default LeafletMap;
