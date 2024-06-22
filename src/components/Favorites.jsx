import React from 'react';
import { Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold mt-8">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
        {favorites.map((article, index) => (
          <div key={index} className="border border-gray-300 rounded p-4">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-auto rounded-lg mb-4"
              />
            )}
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-700">{article.description}</p>
            <Link to={`/article/${index}`} state={{ article }}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
                Read More
              </button>
            </Link>
            <button
              onClick={() => removeFavorite(article)}
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            >
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
