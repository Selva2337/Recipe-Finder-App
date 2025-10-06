import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams(); // get the recipe id from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // These are your sample recipes (same as Home.jsx)
    const sampleRecipes = [
      { 
        id: 1, 
        name: "Spaghetti Carbonara", 
        image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
        description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper."
      },
      { 
        id: 2, 
        name: "Chicken Biryani", 
        image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
        description: "A flavorful Indian rice dish with chicken, spices, and herbs."
      },
      { 
        id: 3, 
        name: "Chocolate Cake", 
        image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
        description: "A rich, moist chocolate cake perfect for dessert lovers."
      }
    ];

    // find the recipe that matches the id
    const foundRecipe = sampleRecipes.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p style={{ textAlign: "center" }}>Recipe not found 😔</p>;
  }

  return (
    <div style={{ textAlign: "center", color: "white", padding: "20px" }}>
      <h1>{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        style={{ width: "300px", borderRadius: "12px", margin: "20px 0" }}
      />
      <p style={{ maxWidth: "600px", margin: "0 auto" }}>{recipe.description}</p>
    </div>
  );
}

export default RecipeDetails;
