import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/UserProgress.css';
import { getAllUserData } from '../services/progress';

const userMap = {
    "cap-kingdom": ["Cap Kingdom", 9, 10],
    "cascade-kingdom": ["Cascade Kingdom", 19, 20],
    "sand-kingdom": ["Sand Kingdom", 4, 30],
    "lake-kingdom": ["Lake Kingdom", 1, 10],
    "wooded-kingdom": ["Wooded Kingdom", 0, 10],
    "snow-kingdom": ["Snow Kingdom", 10, 10],
    "shiveria": ["Shiveria", 8, 12],
    "deep-woods": ["Deep Woods", 9, 12],
    "cloud-kingdom": ["Cloud Kingdom", 0, 10],
    "lost-kingdom": ["Lost Kingdom", 3, 10],
    "metro-kingdom": ["Metro Kingdom", 15, 92],
    "seaside-kingdom": ["Seaside Kingdom", 10, 10],
    "ruined-kingdom": ["Ruined Kingdom", 4, 10],
    "moon-kingdom": ["Moon Kingdom", 23, 50],
    "darker-side": ["Darker Side", 97, 100],
    "dark-side": ["Dark Side", 1, 10],
    "bowser-kingdom": ["Bowser Kingdom", 10, 10],
    "mushroom-kingdom": ["Mushroom Kingdom", 9, 10],
};



const UserProgress = () => {

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
        }
        getUserData();
    }, []);

    const sum = Array.from(Object.values(userMap)).reduce((acc, curr) => acc + curr[1], 0);
    const total = Array.from(Object.values(userMap)).reduce((acc, curr) => acc + curr[2], 0);

    return (
        <div className="user-progress">
            <h2 className="title-bar">USER PROGRESS</h2>
            <div className='game-total'>
                <p>{sum}/{total} ({((sum/total)*100).toFixed(1)}%)</p>
                <div className='total-container'>
                    <div className={((sum/total)*100) == 100 ? 'gold-bar' : 'actual-bar'} style={{width: (sum / total)*100 + '%'}}></div>
                </div>
            </div>
            <div className="progress-bar-container">
                {Object.keys(userMap).map((key) => (
                    <div className='progress-bar' key={key}>
                        <h3 className='map-title'>{userMap[key][0]} - {userMap[key][1]}/{userMap[key][2]}</h3>
                        <div className='bar-container'>
                            <div className={((userMap[key][1] / userMap[key][2])*100) == 100 ? 'gold-bar' : 'actual-bar'} style={{width: (userMap[key][1] / userMap[key][2])*100 + '%'}}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="nav-container">
                <button className="nav-button" onClick={() => {
                    nav('/');
                }}>
                    Home
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