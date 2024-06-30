import React, { useState } from 'react';
import { Wrapper } from '../_Component/wrapper_components'

export const EditCategories = () => {
    const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const handleFormSubmit = () => {
    // Implement logic to update category information (e.g., API call, state update)
    alert('Category updated successfully!');
  };

  return (
    <>
     <Wrapper pageTitle='EditCategories'>
     <div className="p-4 bg-white max-w-[33rem] shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="categoryName" className="text-sm font-bold text-gray-800">Category Name</label>
          <input
            type="text"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mt-1"
            required
          />
        </div>
        <div>
          <label htmlFor="categoryDescription" className="text-sm font-bold text-gray-800">Category Description</label>
          <textarea
            id="categoryDescription"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mt-1"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Update Category</button>
      </form>
    </div>

     </Wrapper>
    </>
  )
}
