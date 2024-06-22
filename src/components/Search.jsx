import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [inputVal, setInputVal] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputVal.trim() !== '') {
      navigate(`/category/${inputVal}`);
      setInputVal('');
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4">
     

      <div className="mt-8 sm:mt-0">
        <form onSubmit={handleSearch} className="flex items-center space-x-4">
          <input 
            type="text"
            value={inputVal}
            onChange={(e) => {setInputVal(e.target.value) 
                console.log(inputVal)}
            }
            className=" text-black border border-gray-300 rounded px-4 py-2 w-full sm:w-64 focus:outline-none focus:border-blue-500"
            placeholder="Search for articles..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none sm:text-xl"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
