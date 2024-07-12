import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import './LeafletMap.css';
import checkpoint_markers from './websitedata/markers';

const LeafletMap = (props) => {
    const url = `${props.mapUrl}`
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

    // Filter markers based on buttonStates
    const filteredMarkers = checkpoint_markers.filter(marker => {
        const currState = props.buttonStates.find(state => state[1] === marker.type);
        return currState ? currState[0] : true;
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
                        iconSize: [25, 25],
                    });

                    return (
                        <Marker key={index} position={marker.position} icon={icon}>
                            <Popup>
                                <h4>{marker.name}</h4>
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
