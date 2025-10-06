import React, { useState } from "react";
import RecipeCard from "../Component/RecipeCard";

const sampleRecipes = [
  { 
    id: 1, 
    name: "Spaghetti Carbonara", 
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
  },
  { 
    id: 2, 
    name: "Chicken Briyani", 
    image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg"
  },
  { 
    id: 3, 
    name: "Chocolate Cake", 
    image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg"
  }
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredRecipes = sampleRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", color: "white" }}>
      <h1>Welcome to Recipe Finder 🍴</h1>
      <p>Search and explore delicious recipes!</p>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found 🍽️</p>
        )}
      </div>
    </div>
  );
}

export default Home;
