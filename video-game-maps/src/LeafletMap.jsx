import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './LeafletMap.css';

const LeafletMap = (props) => {
    const url = "/src/assets/maps/cap-kingdom.png"; // Ensure this path is correct
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

    return (
        <>
            <MapContainer
                center={[666, 660]} // Center the map based on image dimensions
                zoom={0} // Initial zoom level
                minZoom={-2} // Minimum zoom level
                maxZoom={1} // Maximum zoom level
                crs={L.CRS.Simple} // Use simple coordinate reference system
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
