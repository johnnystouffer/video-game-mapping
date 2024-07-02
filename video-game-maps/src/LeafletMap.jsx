import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import './LeafletMap.css'

const LeafletMap = () => {

    const url = "/src/assets/maps/cap-kingdom.png";
    const bounds = [
        [0, 0]
        [1333, 1319]
    ]

  return (
    <>
        <MapContainer center={[666, 660]}
        >
            <ImageOverlay
                url={url} bounds={bounds} 
            ></ImageOverlay>
        </MapContainer>
    </>
  )
}

export default LeafletMap
