import { Link } from "react-router-dom";


const games = [
    { 
        id: 1, 
        name: 'Wuthering Waves', 
        description: 'Best Gacha Game!', 
        image: 'https://external-preview.redd.it/wuthering-waves-ascension-planner-beta-all-feedback-v0-iwEXfao_DCU_XSFAuLbwHZtOlZ_L9bcl_QEVMfbBDjU.jpg?auto=webp&s=b3af0d538577020f860a1ca37fe0a68fc593f108' // Image URL for Wuthering Waves
    },
    { 
        id: 2, 
        name: 'Fate Grand Order', 
        description: 'Most F2p Friendly Game!', 
        image: 'https://didongviet.vn/dchannel/wp-content/uploads/2022/10/fate-grand-order-didongviet-cover.jpg' // Image URL for Fate Grand Order
    },
    { 
        id: 3, 
        name: 'Apex Legends', 
        description: 'No.1 Battle Royale!', 
        image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1172470/ffbb3e6e82ceb4b3fa219d2e207c98b566a0a33e/capsule_616x353.jpg?t=1730895196' // Image URL for Apex Legends
    },
    { 
        id: 4, 
        name: 'Honkai Star Rail', 
        description: 'Best Turn Based Game!', 
        image: 'https://i.ytimg.com/vi/RSg-JRqQ8QA/maxresdefault.jpg' // Image URL for Honkai Star Rail
    },
    { 
        id: 5, 
        name: 'Genshin Impact', 
        description: 'The Most Toxic Community, on Par with League of Legends!', 
        image: 'https://i.ytimg.com/vi/BdMP7OZG1DE/maxresdefault.jpg' // Image URL for Genshin Impact
    },
];

export default function Games() {
    return (
        <div>
            <h1>Games List</h1>
            <ul className="games-list">
                {games.map((game) => (
                    <li key={game.id} className="game-item">
                        <Link to={`/games/${game.id}`} state={{ game }}>
                            <div className="game-info">
                                <img 
                                    src={game.image} 
                                    alt={game.name} 
                                    className="game-image" 
                                    width="1000" 
                                    height="500" 
                                />
                                <div className="game-details">
                                    <h2>{game.name.toUpperCase()}</h2>
                                    <p>{game.description}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
