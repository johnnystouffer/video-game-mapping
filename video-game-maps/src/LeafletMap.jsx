import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './LeafletMap.css';

const LeafletMap = (props) => {
    const url = "/src/assets/maps/cap-kingdom.png"; 
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

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
            </MapContainer>
        </>
    );
};

export default LeafletMap;
