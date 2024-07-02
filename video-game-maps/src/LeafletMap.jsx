import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import './LeafletMap.css';

const LeafletMap = (props) => {


    const url = "/src/assets/maps/cap-kingdom.png"; 
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

    const newIcon = new L.Icon({
        iconUrl: "/src/assets/checkpoint.png",
        iconSize: [35, 55]
    })

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
                <Marker position={[500, 500]} icon={newIcon}></Marker>
            </MapContainer>
        </>
    );
};

export default LeafletMap;
