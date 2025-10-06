import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => {
      if (!prev.find((r) => r.id === recipe.id)) return [...prev, recipe];
      return prev;
    });
  };

  const removeFromFavorites = (id) => {
    setFavorites((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
