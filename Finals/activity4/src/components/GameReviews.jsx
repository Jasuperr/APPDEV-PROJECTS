import React from "react";
import { reviewsAPI } from "../Reviews";

export default function GameReviews({ gameId }) {
    // Fetch reviews based on the passed game ID
    const reviews = reviewsAPI[gameId] || [];

    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}>
                            <strong>{review.username}</strong>: {review.review} 
                            <em> (Source: {review.source})</em>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No reviews available for this game.</p>
            )}
        </div>
    );
}
