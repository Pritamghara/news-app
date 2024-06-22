import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import useFavorites from '../hooks/useFavorites';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const News = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { favorites, isFavorite, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: category || 'technology',
            apiKey: '8bc0c1e2f1524bdf9a7fb3c5b95feb4c',
            page: page,
            pageSize: 12,
          },
        });
        const filteredArticles = response.data.articles.filter(
            (article) => article.title && article.title !== '[Removed] ' && article.urlToImage!==null

          );
          console.log(filteredArticles)

        setData(filteredArticles);
        setTotalPages(Math.ceil(response.data.totalResults / 12));
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, [category, page]);

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="max-w-7xl mx-auto  p-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mt-8 uppercase">
        <h1 className="text-2xl font-bold">{category ? `${category} News` : 'Technology News'}</h1>
        <Link to="/favorites">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 sm:text-lg">
            View Favorites
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 mt-8">
        {data.map((article, index) => (
         
          article.title && (
            <div key={index} className="border border-gray-300 rounded p-4 flex flex-col h-full justify-between">
            <div>
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
              )}
              <h2 className="text-xl font-bold">{article.title}</h2>
              <p className="text-gray-700">{article.description}</p>
              <p className="text-gray-700 font-semibold mt-2">-{article.source.name}</p>
            </div>
            
            <div className="mt-auto ">
              <div className="flex justify-between gap-4 items-center mt-2">
                <Link to={`/article/${index}`} state={{ article }}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Read More
                  </button>
                </Link>
                <button
                  onClick={() =>
                    isFavorite(article) ? removeFavorite(article) : addFavorite(article)
                  }
                  className={` px-4 py-2 rounded ${
                    isFavorite(article) ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                  }`}
                >
                  {isFavorite(article) ? 'Remove ' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          </div>
          
          )
        ))}
      </div>

      {data && <div className="flex justify-center mt-5">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-2 focus:outline-none"
        >
          < FaArrowLeft/>
        </button>
        <span className="text-gray-700 items-center flex justify-center">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2 focus:outline-none"
        >
         <FaArrowRight />
        </button>
      </div>}
    </div>
  );
};

export default News;
