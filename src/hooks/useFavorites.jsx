import { useState, useEffect } from 'react';

const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (article) => {
    setFavorites((prevFavorites) => [...prevFavorites, article]);
  };

  const removeFavorite = (article) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.title !== article.title));
  };

  const isFavorite = (article) => {
    return favorites.some((fav) => fav.title === article.title);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};

export default useFavorites;
