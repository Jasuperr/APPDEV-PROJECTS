// src/components/GroceryItem.jsx
import React from 'react';

const GroceryItem = ({ item, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="grocery-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default GroceryItem;
