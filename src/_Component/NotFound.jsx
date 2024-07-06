import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound =()=> {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
        <p className="mt-4">The page you are looking for does not exist.</p>
        <Link to="/">
          <button className="mt-6 text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300">
            Go to Login
          </button>
        </Link>
      </div>
    </div>
  );
};

