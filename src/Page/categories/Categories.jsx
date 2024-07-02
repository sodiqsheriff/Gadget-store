import React, { useEffect, useState, useRef } from 'react';
import { Avatar, Button, Checkbox, Spinner, Table } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { LuView } from 'react-icons/lu';
import { IconButton } from '../../_Component/components.jsx';
import { BiEdit } from 'react-icons/bi';
import { Wrapper } from '../../_Component/wrapper_components.tsx';
import { fetchCategories } from './category_repository.js';

export const Categories = ({ toggleView }) => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState([]);
  const dropdownRefs = useRef([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        handleLoading()
        const data = await fetchCategories();
        handleLoading()
        setCategoriesData(data.content);
        setStatuses(data.content.map((item) => item.categoryStatus));
        setDropdownOpen(Array(data.length).fill(false));
        dropdownRefs.current = data.map(() => React.createRef());
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    })();

   
  }, []);

  
  const handleLoading = () => {
    setLoading(!loading);
  };

  const toggleStatus = (index) => {
    setStatuses((prevStatuses) =>
      prevStatuses.map((status, i) => (i === index ? !status : status))
    );
  };

  const toggleDropdown = (index) => {
    setDropdownOpen((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : false))
    );
  };

  const handleClickOutside = (event) => {
    dropdownRefs.current.forEach((ref, index) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownOpen((prevState) =>
          prevState.map((isOpen, i) => (i === index ? false : isOpen))
        );
      }
    });
  };

  return (
    <>
      <Wrapper pageTitle="Categories">
        <div className="flex justify-between text-sm font-medium mt-28 md:mt-0 bg-white md:pt-0 text-center text-gray-500 border-b border-gray-200 :text-gray-400 :border-gray-700">
          <ul className="flex flex-wrap">
            <li className="me-2">
              <Link
                to="/product"
                className={`inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 active:text-blue-500 active:border-b-2 active:border-blue-500`}
                onClick={() => toggleView('All Products')}
              >
                All Products
              </Link>
            </li>
            <li className="me-2">
              <Link
                to="/categories"
                className={`inline-block p-4 text-blue-600 rounded-t-lg active:text-blue-500 active:border-b-2 active:border-blue-500 border-b-2 border-blue-500`}
                aria-current="page"
              >
                Categories
              </Link>
            </li>
          </ul>
          <Link to="/addcategories">
            <Button className="items-center text-white bg-[#2563EB] text-lg hover:bg-blue-800 font-medium rounded-lg flex">
              <FaPlus className="pr-2 text-2xl" />
              AddCategories
            </Button>
          </Link>
        </div>
        <div className="relative overflow-x-auto mt-5 p-4 bg-white rounded-xl">
          {!loading && <Table className="text-xs text-center text-gray-400">
            <Table.Head>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Description</Table.HeadCell>
              {/* <Table.HeadCell>Products Count</Table.HeadCell> */}
              <Table.HeadCell>Status</Table.HeadCell>
              {/* <Table.HeadCell>Image</Table.HeadCell> */}
              <Table.HeadCell>Action</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {categoriesData.map((item, index) => (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    <div className="flex gap-4 items-center">
                      <Avatar
                        src={item.categoryImage}
                        rounded
                      />
                      {item.categoryName}
                    </div>
                    </Table.Cell>
                  <Table.Cell>{item.categroyDescription}</Table.Cell>
                  <Table.Cell>
                    <div
                      onClick={() => toggleStatus(index)}
                      className={`relative w-11 h-6 cursor-pointer rounded-full ${
                        statuses[index] ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <div
                        className={`absolute top-[2px] left-[2px] bg-white border border-blue-300 rounded-full h-5 w-5 transition-all ${
                          statuses[index] ? 'translate-x-full' : ''
                        }`}
                      ></div>
                    </div>
                  </Table.Cell>
                  
                  <Table.Cell className="flex gap-2">
                    <Link to="/editcategories">
                      <IconButton
                        className={'bg-blue-200 w-full text-blue-800 border-0'}
                        child={<BiEdit size={20} />}
                        description={'Update Category'}
                      />
                    </Link>
                    <Link to="/viewcategories">
                      <IconButton
                        className={
                          'bg-green-200 w-full text-green-800 border-0 hover:bg-green-700'
                        }
                        child={<LuView size={20} />}
                        description={'View Category Details'}
                      />
                    </Link>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>}

          {loading && <div className="flex flex-col items-center">
            <Spinner className='mx-auto'/>
            </div>}
        </div>
      </Wrapper>
    </>
  );
};
