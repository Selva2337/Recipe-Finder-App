import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe, isFavoritePage }) {
  const addToFavorites = () => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    const isAlready = existing.find((r) => r.id === recipe.id);
    if (!isAlready) {
      localStorage.setItem("favorites", JSON.stringify([...existing, recipe]));
      alert(`${recipe.name} added to favorites!`);
    } else {
      alert(`${recipe.name} is already in favorites!`);
    }
  };

  const removeFromFavorites = () => {
    const existing = JSON.parse(localStorage.getItem("favorites")) || [];
    const filtered = existing.filter((r) => r.id !== recipe.id);
    localStorage.setItem("favorites", JSON.stringify(filtered));
    alert(`${recipe.name} removed from favorites!`);
    window.location.reload(); // refresh to update the Favorites page
  };

  return (
    <div
      style={{
        border: "1px solid #fff",
        borderRadius: "12px",
        padding: "16px",
        margin: "16px",
        width: "250px",
        textAlign: "center",
        backgroundColor: "#1a1a1a",
        color: "white",
        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "100%", borderRadius: "12px" }}
      />
      <h3 style={{ marginTop: "12px" }}>{recipe.name}</h3>

      {!isFavoritePage ? (
        <button
          onClick={addToFavorites}
          style={{
            display: "inline-block",
            margin: "8px 0 12px",
            padding: "8px 16px",
            backgroundColor: "#ff6b6b",
            color: "white",
            borderRadius: "6px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ❤️ Add to Favorites
        </button>
      ) : (
        <button
          onClick={removeFromFavorites}
          style={{
            display: "inline-block",
            margin: "8px 0 12px",
            padding: "8px 16px",
            backgroundColor: "#ff6b6b",
            color: "white",
            borderRadius: "6px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ❌ Remove from Favorites
        </button>
      )}

      <br />
      <Link
        to={`/recipe/${recipe.id}`}
        style={{ color: "#646cff", fontWeight: "bold" }}
      >
        View Recipe
      </Link>
    </div>
  );
}

export default RecipeCard;
