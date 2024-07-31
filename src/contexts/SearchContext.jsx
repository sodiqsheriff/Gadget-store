import React, { createContext, useState, useEffect } from 'react';
import { fetchCategory } from '../_repo/category_repository';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useState({ category: '', query: '', pageNo: 0, pageSize: 6 });
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const fetchedData = await fetchCategory(searchParams.pageNo, searchParams.pageSize, searchParams.category, searchParams.query);
        setData(fetchedData.content);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <SearchContext.Provider value={{ searchParams, setSearchParams, data, isLoading }}>
      {children}
    </SearchContext.Provider>
  );
};
