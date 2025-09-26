import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, ImageOverlay, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../css/LeafletMap.css';
import { getMaxLimit, retreiveData, overlayRight, sendUserProgress } from '../services/progress.js';
import Loading from './Loading';
import ProgressBar from './ProgressBar.jsx';
import '../css/Loading.css';

const MapReset = ({ refreshTrigger }) => {
    const map = useMap();

    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 400);
    }, [map, refreshTrigger]);

    return null;
};

const LeafletMap = ({ mapUrl, mapId, buttonStates, refreshTrigger, filterMode }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState(null);
    const bounds = [
        [0, 0],
        [1333, 1319]
    ];

    const CompletionButton = ({ totalMarker, progress, completionId }) => {
        const isUpdating = updatingId === completionId;
        const isComplete = progress[totalMarker - completionId] === '1';

        const handleClick = () => {
            if (isComplete) {
                handleIncomplete(completionId);
            } else {
                handleCompleted(completionId);
            }
        };

        return (
            <div onClick={handleClick} id="completed-button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {isComplete ? 'Completed' : 'Mark Complete'}
                {isUpdating && <span className="spinner" />}
            </div>
        );
    };

    const [checkpointMarkers, setCheckpointMarkers] = useState([]);
    const [completedMarkers, setCompletedMarkers] = useState(0);
    const [totalMarkers, setTotalMarkers] = useState(0);
    const [progress, setProgress] = useState('');

    const setCharAt = (str, index, char) => {
        return str.substring(0, index) + char + str.substring(index + 1);
    };

    const handleCompleted = async (completionId) => {
        if (totalMarkers === 0) {
            navigate('/auth/login');
            return;
        } else if (totalMarkers === 3) {
            return;
        }

        const index = totalMarkers - completionId;
        if (progress[index] === '1') return;

        setUpdatingId(completionId);
        console.log(index)
        const updatedProgress = setCharAt(progress, index, '1');

        await sendUserProgress(mapId, updatedProgress);

        setProgress(updatedProgress);
        setCompletedMarkers(prev => prev + 1);
        setUpdatingId(null);
    };

    const handleIncomplete = async (completionId) => {
        if (totalMarkers === 0) {
            navigate('/auth/login');
            return;
        }

        const index = totalMarkers - completionId;
        if (progress[index] === '0') return;

        setUpdatingId(completionId);
        const updatedProgress = setCharAt(progress, index, '0');

        await sendUserProgress(mapId, updatedProgress);

        setProgress(updatedProgress);
        setCompletedMarkers(prev => prev - 1);
        setUpdatingId(null);
    };

    useEffect(() => {
        const fetchMarkers = async () => {
            try {
                const response = await fetch(`../markers/${mapId}.json`);
                if (!response.ok) throw new Error(response.status);
                const data = await response.json();
                setCheckpointMarkers(data);
            } catch (error) {
                throw new Error(error);
            }
        };

        fetchMarkers();
    }, [mapId]);

    const filteredMarkers = checkpointMarkers.filter((marker) => {
        const state = buttonStates.find((s) => s[1] === marker.type);
        const isButtonActive = state ? state[0] : true;
        const matchesFilter =
            filterMode === 'all' ||
            (filterMode === 'completed' && progress[totalMarkers - marker.completionId] === '1') ||
            (filterMode === 'incomplete' && (!marker.completionId || progress[totalMarkers - marker.completionId] === '0'));

        return isButtonActive && marker.map === mapId && matchesFilter;
    });

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                setLoading(true);
                const binProgress = await retreiveData(mapId);
                if (!binProgress) return;

                const maxProgress = await getMaxLimit(mapId);
                if (!maxProgress) return;

                const completed = [...binProgress].filter((c) => c === '1').length;
                const total = [...maxProgress].filter((c) => c === '1').length;

                setCompletedMarkers(completed);
                setTotalMarkers(total);

                const progString = '0'.repeat(maxProgress.length);

                setProgress(binProgress, progString);
            } catch (e) {
                console.error('Failed to fetch progress:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchProgress();
    }, [mapId]);

    if (loading) {
        return (<Loading/>);
    }

    return (
        <div className='wrapper'>
            <ProgressBar
                totalMarkers={totalMarkers}
                completedMarkers={completedMarkers}
                mapId={mapId}
            />

            <div className='fill-container'>
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
                        iconSize: marker.type === 'odyssey' ? [30, 60] : [30, 30]
                    });

                    return (
                        <Marker key={index} position={marker.position} icon={icon}>
                            <Popup>
                                <a target="_blank" rel="noopener noreferrer" href={marker.popupInfo.link}>
                                    <h4 id="marker-name">{marker.name}</h4>
                                </a>
                                <p>{marker.popupInfo.description}</p>
                                {marker.completionId && (
                                    <CompletionButton
                                        totalMarker={totalMarkers}
                                        progress={progress}
                                        completionId={marker.completionId}
                                    />
                                )}
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
            </div>
            
        </div>
    );
};

export default LeafletMap;
