// SearchContext.js
import React, { createContext, useState, useEffect } from 'react';
import { fetchCategory } from '../_repo/category_repository';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({ category: '', query: '', pageNo: 0, pageSize: 6 });
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchCategory(searchParams.pageNo, searchParams.pageSize);
        setData(fetchedData.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <SearchContext.Provider value={{ searchParams, setSearchParams, data }}>
      {children}
    </SearchContext.Provider>
  );
};
