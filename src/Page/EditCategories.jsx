import React, { useState } from 'react';
import productlist4 from "../_assets/productlist4.svg"
import { Wrapper } from '../_Component/wrapper_components';

export const EditCategories = () => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryDescription, setCategoryDescription] = useState('');
    const [categoryStatus, setCategoryStatus] = useState(false); // Default status: false (off)
    const [previewSrc, setPreviewSrc] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Implement logic to update category information (e.g., API call, state update)
        alert('Category updated successfully!');
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const toggleCategoryStatus = () => {
        setCategoryStatus((prevStatus) => !prevStatus);
    };

    return (
        <>
            <Wrapper pageTitle="Edit Categories">
                <div className="p-4 bg-white max-w-[33rem] shadow-xl rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="categoryName" className="text-sm font-bold text-gray-800">
                                Category Name
                            </label>
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
                            <label htmlFor="categoryDescription" className="text-sm font-bold text-gray-800">
                                Category Description
                            </label>
                            <textarea
                                id="categoryDescription"
                                value={categoryDescription}
                                onChange={(e) => setCategoryDescription(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-full mt-1"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex items-center space-x-4">
                            <label htmlFor="categoryStatus" className="text-sm font-bold text-gray-800">
                                Category Status
                            </label>
                            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                    type="checkbox"
                                    id="toggle"
                                    name="toggle"
                                    checked={categoryStatus}
                                    onChange={toggleCategoryStatus}
                                    className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                                />
                                <label
                                    htmlFor="toggle"
                                    className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                                ></label>
                            </div>
                            <span className="text-sm">{categoryStatus ? 'Active' : 'Inactive'}</span>
                        </div>
                        <div className="flex flex-col p-5">
                            <h1 className="text-sm font-bold text-[#0F172A]">Category Image*</h1>
                            <h1 className="text-xs font-normal text-[#64748B] pt-3">
                                Image format .jpg .jpeg .png and minimum size 300 x 300px
                            </h1>
                            <div className="flex pt-5 items-center gap-4">
                                <div
                                    id="previewImg"
                                    className="flex w-full h-full max-w-[8rem] max-h-[8rem] rounded-lg p-4 bg-[#E2E8F0]"
                                >
                                    {previewSrc ? (
                                        <img src={previewSrc} alt="Preview" className="w-full h-full" />
                                    ) : (
                                        <>
                                            <input
                                                type="file"
                                                name="categoryImage"
                                                id="fileInput"
                                                className="hidden"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            <label htmlFor="fileInput" className="cursor-pointer">
                                                <img src={productlist4} alt="" className="w-full h-full" />
                                            </label>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                            Update Category
                        </button>
                    </form>
                </div>
            </Wrapper>
        </>
    );
};

