import React, { useContext, useState, useEffect } from 'react';
import { Form, Col } from 'react-bootstrap';
import { IoMdSearch } from 'react-icons/io';
import { SearchContext } from '../contexts/SearchContext';

export const SearchBar = () => {
  const { searchParams, setSearchParams, data } = useContext(SearchContext);
  const [query, setQuery] = useState(searchParams.query);
  const [category, setCategory] = useState(searchParams.category);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, [data]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams((prevParams) => ({ ...prevParams, query, category }));
  };

  return (
    <>
      <Col lg={6} md={6} sm={12}>
        <Form action="#">
          <div className="advance_serach">
            <div className="select_option mb-0 clearfix">
              <Form.Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option data-display="All Categories" value="">
                  Select A Category
                </option>
                {categories.map((cat) => (
                  <option key={cat.categoryId} value={cat.categoryId}>
                    {cat.categoryName}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div className="form_item">
              <Form.Control
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                name="search"
                placeholder="Search Products..."
              />
              <button
                onClick={handleSearch}
                className="search_btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <IoMdSearch />
              </button>
            </div>
          </div>
        </Form>
      </Col>
    </>
  );
};
