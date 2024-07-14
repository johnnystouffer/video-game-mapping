import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import './LeafletMap.css';
import checkpoint_markers from './markers.js';

const LeafletMap = (props) => {
    const url = `${props.mapUrl}`
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

    // Filter markers based on buttonStates and the map it belongs to
    const filteredMarkers = checkpoint_markers.filter(marker => {
        const currState = props.buttonStates.find(state => state[1] === marker.type);
        return (currState ? currState[0] : true) && (marker.map == props.mapId);
    });

    return (
        <>
            <MapContainer
                center={[666, 660]} 
                zoom={0} 
                minZoom={-2} 
                maxZoom={1} 
                crs={L.CRS.Simple} 
            >
                <ImageOverlay
                    url={url}
                    bounds={bounds}
                />
                {filteredMarkers.map((marker, index) => {
                    const icon = new L.Icon({
                        iconUrl: marker.iconUrl,
                        iconSize: marker.type === 'odyssey' ? [30, 60] : [30, 30],
                    });

                    return (
                        <Marker key={index} position={marker.position} icon={icon}>
                            <Popup>
                                <a target='_blank' href={marker.popupInfo.link}><h4>{marker.name}</h4></a>
                                {marker.popupInfo.description}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </>
    );
};

export default LeafletMap;
