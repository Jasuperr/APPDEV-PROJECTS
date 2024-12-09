import React, { useState } from 'react';

export default function GameReview({ games, setGames, isAdmin }) {
    const [gameName, setGameName] = useState('');
    const [gameDescription, setGameDescription] = useState('');
    const [selectedGameIndex, setSelectedGameIndex] = useState(null);
    const [reviewTitle, setReviewTitle] = useState('');
    const [reviewDescription, setReviewDescription] = useState('');

    const handleGameSubmit = (e) => {
        e.preventDefault();
        if (gameName && gameDescription) {
            const newGame = { name: gameName, description: gameDescription, reviews: [] };
            setGames([...games, newGame]);
            setGameName('');
            setGameDescription('');
        }
    };

    const handleGameSelect = (e) => {
        setSelectedGameIndex(e.target.value);
        setReviewTitle('');
        setReviewDescription('');
    };

    const handleReviewSubmit = (e) => {
        e.preventDefault();
        if (reviewTitle && reviewDescription && selectedGameIndex !== null) {
            const date = new Date().toLocaleDateString();
            const updatedGames = [...games];
            updatedGames[selectedGameIndex].reviews.push({
                title: reviewTitle,
                description: reviewDescription,
                date,
            });
            setGames(updatedGames);
            setReviewTitle('');
            setReviewDescription('');
        }
    };

    const handleDeleteGame = (index) => {
        if (isAdmin) {
            const updatedGames = games.filter((_, i) => i !== index);
            setGames(updatedGames);
        }
    };

    return (
        <div className="game-review">
            {isAdmin && (
                <div className="add-game">
                    <h2>Add a Game</h2>
                    <form onSubmit={handleGameSubmit}>
                        <input
                            type="text"
                            placeholder="Game Name"
                            value={gameName}
                            onChange={(e) => setGameName(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Game Description"
                            value={gameDescription}
                            onChange={(e) => setGameDescription(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">Add Game</button>
                    </form>
                </div>
            )}

            <div className="select-game">
                <h2>Select a Game to Review</h2>
                <select onChange={handleGameSelect} value={selectedGameIndex || ''}>
                    <option value="">Select a game</option>
                    {games.map((game, index) => (
                        <option key={index} value={index}>
                            {game.name}
                        </option>
                    ))}
                </select>
            </div>

            {selectedGameIndex !== null && (
                <div className="submit-review">
                    <h2>Submit a Review for {games[selectedGameIndex].name}</h2>
                    <form onSubmit={handleReviewSubmit}>
                        <input
                            type="text"
                            placeholder="Review Title"
                            value={reviewTitle}
                            onChange={(e) => setReviewTitle(e.target.value)}
                            required
                        />
                        <textarea
                            placeholder="Write your review here"
                            value={reviewDescription}
                            onChange={(e) => setReviewDescription(e.target.value)}
                            required
                        ></textarea>
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            )}

            {selectedGameIndex !== null && (
                <div className="game-reviews">
                    <h3>Reviews for {games[selectedGameIndex].name}</h3>
                    <ul>
                        {games[selectedGameIndex].reviews.map((rev, idx) => (
                            <li key={idx}>
                                <h4>{rev.title}</h4>
                                <p>{rev.description}</p>
                                <small>{rev.date}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isAdmin && selectedGameIndex !== null && (
                <button onClick={() => handleDeleteGame(selectedGameIndex)}>Delete Game</button>
            )}
        </div>
    );
}
