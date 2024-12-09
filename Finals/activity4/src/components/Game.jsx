import { useLocation, useNavigate } from "react-router-dom";
import GameReviews from "./GameReviews";

export default function Game() {
    const location = useLocation();
    const navigate = useNavigate();
    const game = location.state?.game;

    if (!game) {
        return (
            <>
                <h1>Game not found</h1>
                <p>It seems you navigated here directly. Please go back to the games list.</p>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </>
        );
    }

    return (
        <>
            <h1>{game.name}</h1>
            <p>{game.description}</p>
            <GameReviews gameId={game.id} />
            <button onClick={() => navigate(-1)}>Back to Games List</button>
        </>
    );
}
