import React, { useEffect, useState } from "react";
import RecipeCard from "../Component/RecipeCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>My Favorites ❤️</h1>
      {favorites.length === 0 ? (
        <p>You have no favorite recipes yet!</p>
      ) : (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {favorites.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} isFavoritePage={true} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
