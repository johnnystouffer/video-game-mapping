import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup, } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import './LeafletMap.css';
import checkpoint_markers from './assets/markers';

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
                {checkpoint_markers.map((marker, index) => {
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
