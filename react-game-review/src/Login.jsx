import React, { useState } from 'react';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const users = [
        { username: 'username', password: 'password', role: 'user' },
        { username: 'admin', password: 'admin', role: 'admin' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const loggedInUser = users.find(
            (user) => user.username === username && user.password === password
        );
        
        if (loggedInUser) {
            onLogin(true, loggedInUser.role);
            setError('');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-form">
            <h4>Login to Continue:</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}
