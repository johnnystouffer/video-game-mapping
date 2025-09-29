import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/MapProgress.css';
import { retreiveData, getMaxLimit } from '../services/progress'; // removed overlayRight (unused)
import Loading from './Loading';
import mapData from '../mapinfo';
import { BASE_PROGRESS_STRING } from './LeafletMap';

function toReadableName(phrase) {
  return phrase
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const MapProgress = () => {
  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    if (!mapData.some(each => each.id === id)) {
      nav('/');
    }
  }, [id, nav]);

  const [loading, setLoading] = useState(true);
  const [completedMarkers, setCompletedMarkers] = useState(0);
  const [totalMarkers, setTotalMarkers] = useState(0);
  const [progress, setProgress] = useState('');
  const [markers, setMarkers] = useState([]);
  const [completeData, setCompleteData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      nav('/auth/login');
    }
  }, [nav]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        setLoading(true);

        const response = await fetch(`../markers/${id}.json`);
        if (!response.ok) throw new Error(response.status);
        const latestInfo = await response.json();
        setMarkers(latestInfo);

        const maxProgress = await getMaxLimit(id);
        if (!maxProgress) {
          setLoading(false);
          return;
        }

        const total = [...maxProgress].filter(c => c === '1').length;
        
        const binProgress = await retreiveData(id, total);
        if (!binProgress) {
          setLoading(false);
          return;
        }

        const completed = [...binProgress].filter(c => c === '1').length;

        setCompletedMarkers(completed);
        setTotalMarkers(total);

        const progString = '0'.repeat(total);
        setProgress(binProgress === BASE_PROGRESS_STRING ? progString : binProgress);
      } catch (e) {
        console.error('Failed to fetch progress:', e);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, [id]);

  useEffect(() => {
    if (!progress || markers.length === 0) return;

    const completedMarkerData = [];
    
    for (let i = totalMarkers-1; i >= 0; i--) {
        const bit = progress[i];

        if (bit === '1') {
            const compId = totalMarkers - i;
            const marker = markers.find(m => m.completionId === compId);
            if (marker) {
                completedMarkerData.push(marker);
            } else {
            }
        }
    }
    setCompleteData(completedMarkerData);
  }, [progress, markers]);

  if (loading) return <Loading />;

  return (
    <div className="map-progress-container">
      <h2 className="map-progress-title">{toReadableName(id)}</h2>

      {totalMarkers > 0 && (
        <div className='map-progress-overall'>
          <p>
            {completedMarkers}/{totalMarkers} ({((completedMarkers / totalMarkers) * 100).toFixed(1)}%)
          </p>
          <div className='map-progress-total-bar'>
            <div
              className='map-progress-gold-fill'
              style={{ width: `${(completedMarkers / totalMarkers) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="map-progress-list">
        {completeData.length > 0 ? (
          completeData.map((item, index) => (
            <a
              key={index}
              href={item.popupInfo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="map-progress-entry-link"
            >
              <div className="map-progress-entry">
                <img src={item.iconUrl} alt={item.name} className="map-progress-icon" />
                <div className='map-progress-description'>
                  <h2 className='item-title'>{item.name}</h2>
                  <p className='item-description'>{item.popupInfo.description}</p>
                </div>
              </div>
            </a>
          ))
        ) : (
          <div className='map-progress-empty-container'>
            <h3 className="map-progress-empty-text">
              When you start tracking your progress it will show here!
            </h3>
          </div>
        )}
      </div>

      <div className="map-progress-nav-buttons">
        <button className="map-progress-button" onClick={() => nav('/')}>Home</button>
        <button className="map-progress-button" onClick={() => nav(`/${id}`)}>See Map</button>
        <button className="map-progress-button" onClick={() => nav('/profile')}>Profile</button>
      </div>
    </div>
  );
};

export default MapProgress;
