import React, { useState } from "react";
import { Button, Spinner } from "flowbite-react";
import { Wrapper } from "../../_Component/wrapper_components.tsx";
import { addCategory } from "./category_repository.js";


export const AddCategories = ({ handleAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryStatus, setcategoryStatus] = useState(false);
  const [categoryImage, setCategoryImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const togglecategoryStatus = () => {
    setcategoryStatus(!categoryStatus);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCategoryImage(file);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!categoryName || !categoryDescription) {
      alert("Please fill all required fields.");
      return;
    }
    const requestData = {
      categoryName,
      categoryDescription,
      categoryImage,
      categoryStatus,
    };
    try {
      handleLoading();
      const newCategory = await addCategory(requestData);
      handleLoading();

      console.log("Category added successfully:", {requestData});

      // Call the handleAddCategory function passed as prop
      handleAddCategory(requestData);

      // Reset form fields
      setCategoryName("");
      setCategoryDescription("");
      setcategoryStatus(false);
      setCategoryImage(null);
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };
  const handleLoading = () => {
    setLoading(!loading);
  };

  return (
    <Wrapper pageTitle="Add Categories">
      <div className="w-full h-[calc(100%-1rem)] max-h-full">
        <div className="relative mt-5 p-4 w-full max-w-[38rem] max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                Add Category
              </h3>
            </div>
            <div className="p-4 md:p-5">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <h1 className="text-sm font-bold text-[#0F172A]">
                    Category Name*
                  </h1>
                  <input
                    type="text"
                    name="categoryName"
                    id="categoryName"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="Enter category name"
                    required
                  />
                </div>
                <div>
                  <h1 className="text-sm font-bold text-[#0F172A]">
                    Category Description*
                  </h1>
                  <h1 className="text-xs font-normal text-[#64748B] py-3">
                    Include min. 260 characters to make it easier for buyers to
                    understand and find your product
                  </h1>
                  <textarea
                    name="categoryDescription"
                    id="categoryDescription"
                    value={categoryDescription}
                    onChange={(e) => setCategoryDescription(e.target.value)}
                    placeholder="Type something..."
                    className="w-full p-5 border border-[#E2E8F0] rounded-lg text-sm font-normal"
                    cols="30"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">categoryStatus:</span>
                  <div
                    onClick={togglecategoryStatus}
                    className={`relative w-11 h-6 cursor-pointer rounded-full ${
                      categoryStatus ? "bg-blue-600" : "bg-gray-200"
                    }`}
                  >
                    <div
                      className={`absolute top-[2px] left-[2px] bg-white border border-blue-300 rounded-full h-5 w-5 transition-all ${
                        categoryStatus ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="mt-4">
                  <label className="text-sm font-bold text-[#0F172A] block">
                    Category Image
                  </label>
                  <input
                    type="file"
                    name="categoryImage"
                    id="categoryImage"
                    onChange={handleFileChange}
                    className="mt-1 block w-full py-2 px-3 bg-blue-500 text-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <div className="flex items-center border-t-[#F1F5F9] mt-5 pt-5 gap-4 w-full">
                  <Button type="submit" className="w-full bg-blue-500">
                    {loading ? <Spinner /> : "Add Category"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
