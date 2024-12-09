import React, { useState } from 'react';
import Login from './Login';
import GameReview from './Reviews';
import './index.css';

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState('');
    const [games, setGames] = useState([]);

    const handleLogin = (loggedIn, role) => {
        setIsLoggedIn(loggedIn);
        setUserRole(role);
    };

    return (
        <div className="app">
            <h1>Welcome to Wormmmy's Game Reviews!</h1>
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <GameReview 
                    games={games} 
                    setGames={setGames} 
                    isAdmin={userRole === 'admin'} 
                />
            )}
        </div>
    );
}
