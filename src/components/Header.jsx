import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full sm:w-auto">
          <span className='sm:font-bold text-2xl'>
            NewsFlix
          </span>
          <div className="sm:hidden">
            <button onClick={toggleNav} className="focus:outline-none">
              {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        <ul className={`flex-col sm:flex-row sm:flex sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 font-semibold text-lg mt-2 sm:mt-0 ${isNavOpen ? 'flex' : 'hidden'}`}>
          <li>
            <Link to="/category/business" className="hover:text-blue-100">
              Business
            </Link>
          </li>
          <li>
            <Link to="/category/technology" className="hover:text-blue-100">
              Technology
            </Link>
          </li>
          <li>
            <Link to="/category/entertainment" className="hover:text-blue-100">
              Entertainment
            </Link>
          </li>
          <li>
            <Link to="/category/sports" className="hover:text-blue-100">
              Sports
            </Link>
          </li>
        </ul>

        <div className="mt-2 sm:mt-0 w-full sm:w-auto">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Header;
