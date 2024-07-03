import React, { useState, useEffect } from 'react';
import image from "../../_assets/wactch.svg"; // Example image, replace with actual category image or URL
import { Wrapper } from '../../_Component/wrapper_components';

export const ViewCategories = ({ categoryData }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [categoryStatus, setCategoryStatus] = useState(true); // true for active, false for inactive
  const [categoryImage, setCategoryImage] = useState(image); // Replace with actual category image

  useEffect(() => {
    if (categoryData) {
      setCategoryName(categoryData.categoryName);
      setCategoryDescription(categoryData.categoryDescription);
      setCategoryStatus(categoryData.categoryStatus);
      setCategoryImage(categoryData.categoryImage || image); // Replace with actual category image
    }
  }, [categoryData]);

  const toggleStatus = () => {
    setCategoryStatus(!categoryStatus);
  };

  return (
    <Wrapper pageTitle='View Category'>
      <div className="flex flex-row gap-12">
        <div className="p-4 max-w-md mb-5 bg-white rounded-md">
          <div className="mb-8">
            {/* Full-size image */}
            <img src={categoryImage} alt="Category" className="w-full max-w-[20em] mb-4" />
            <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
            <p className="text-gray-600 mb-4">{categoryDescription}</p>
            {/* Toggle slide button for status */}
            <label htmlFor="toggleStatus" className="flex items-center cursor-pointer">
              <div className={`relative w-12 h-6 rounded-full ${categoryStatus ? 'bg-blue-500' : 'bg-gray-400'}`}>
                <div className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform ${categoryStatus ? 'translate-x-full' : ''} transition-transform duration-300`}></div>
              </div>
              <div className="ml-2">{categoryStatus ? 'Active' : 'Inactive'}</div>
              <input
                type="checkbox"
                id="toggleStatus"
                className="hidden"
                checked={categoryStatus}
                onChange={toggleStatus}
              />
            </label>
          </div>
          {/* Additional content or actions related to the category */}
        </div>
        <div className=" bg-white rounded-lg max-w-[25rem] h-fit shadow-lg w-full p-4">
          <div className="flex flex-col my-5">
            <span className='font-bold'>Category Name:</span>
            <span className='font-medium p-2 mt-2 rounded-lg'>{categoryName}</span>
          </div>
          <div className="flex flex-col my-5">
            <span className='font-bold'>Category Description:</span>
            <span className='font-medium mt-2 rounded-lg'>{categoryDescription}</span>
          </div>
          <div className="flex flex-col my-5">
            <span className='font-bold'>Category Status:</span>
            <span className='font-medium mt-2 rounded-lg'>{categoryStatus ? 'Active' : 'Inactive'}</span>
          </div>
          {/* Additional details like subcategories, number of products, etc., can be added here */}
        </div>
      </div>
    </Wrapper>
  );
};
