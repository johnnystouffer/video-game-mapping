import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/UserProgress.css';
import { getAllUserData } from '../services/progress';
import Loading from './Loading';

function toReadableName(phrase) {
    return phrase
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


const UserProgress = () => {
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([]);
    const nav = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            nav('/auth/login');
        }
    }, [nav]);

    useEffect(() => {
        const getUserData = async () => {
            const data = await getAllUserData();
            setUserData(data);
            setLoading(false);
        };
        getUserData();
    }, []);

    const totalCompleted = userData.reduce((acc, curr) => acc + curr.completed, 0);
    const totalMax = userData.reduce((acc, curr) => acc + curr.max, 0);


    if (loading) {
        return (<Loading/>);
    }
    return (
        <div className="user-progress">
            <h2 className="title-bar">Progress of {localStorage.getItem('username')}</h2>

            {totalMax > 0 && (
                <div className='game-total'>
                    <p>{totalCompleted}/{totalMax} ({((totalCompleted / totalMax) * 100).toFixed(1)}%)</p>
                    <div className='total-container'>
                        <div
                            className='gold-bar'
                            style={{ width: `${(totalCompleted / totalMax) * 100}%` }}
                        ></div>
                    </div>
                </div>
            )}

            <div className="progress-bar-container">
                {userData.length > 0 && userData.map(({ mapId, completed, max }) => (
                    <Link to={`/${mapId}`} className='progress-bar' key={mapId}>
                        <h3 className='map-title'>
                            {toReadableName(mapId) || mapId} - {completed}/{max}
                        </h3>
                        <div className='bar-container'>
                            <div
                                className={(completed / max) * 100 === 100 ? 'gold-bar' : 'actual-bar'}
                                style={{ width: `${(completed / max) * 100}%` }}
                            ></div>
                        </div>
                    </Link>
                ))}

                {userData.length === 0 && (
                    <div className='empty-text-container'>
                       <h3 className="empty-text"> When you start tracking your progress will show here!</h3>
                    </div>
                )}
            </div>

            <div className="nav-container">
                <button className="nav-button" onClick={() => nav('/')}>
                    Go Home
                </button>
                <button className="nav-button" onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('username');
                    nav('/');
                }}>
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default UserProgress;
