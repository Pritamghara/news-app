import React from 'react';
import { useLocation } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';

const ArticleDetail = () => {
  const location = useLocation();
  const { article } = location.state;
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleToggleFavorite = () => {
    if (isFavorite(article)) {
      removeFavorite(article);
    } else {
      addFavorite(article);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-auto rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700 mb-4 font-semibold text-lg">{article.description}</p>
      <div className="text-gray-900 mb-4">{article.content.replace(/\[\+\d+ chars\]/, '')}</div>
      <button
        onClick={handleToggleFavorite}
        className={`px-4 py-2 rounded ${
          isFavorite(article) ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'
        }`}
      >
        {isFavorite(article) ? 'Remove from Favorites' : 'Save to Favorites'}
      </button>
    </div>
  );
};

export default ArticleDetail;
