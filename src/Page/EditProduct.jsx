import React, { useState } from 'react';
import { Button, Dropdown, FileInput } from 'flowbite-react';
import { Wrapper } from '../_Component/wrapper_components'
import productlist1 from "../_assets/productlist1.svg"
import productlist2 from "../_assets/productlist2.svg"
import productlist3 from "../_assets/productlist3.svg"
import productlist4 from "../_assets/productlist4.svg"

import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

export const EditProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);  
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productDiscount, setProductDiscount] = useState('');
    const [previewSrc, setPreviewSrc] = useState('');
  
    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    const navigate = useNavigate(); // useNavigate hook from react-router-dom

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Implement logic to update product information (e.g., API call, state update)
        alert('Product updated successfully!');
        // Example navigation after form submission
        navigate('/product'); // Redirect to product page using useNavigate hook
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

    return (
        <>
            <Wrapper pageTitle="Edit Product">
                {/* <div className="p-4 max-w-[35em] bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="productName" className="text-sm font-bold text-gray-800">
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="productName"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-full mt-1"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="productDescription" className="text-sm font-bold text-gray-800">
                                Product Description
                            </label>
                            <textarea
                                id="productDescription"
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                className="border border-gray-300 rounded-lg p-2 w-full mt-1"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex flex-col p-5">
                            <h1 className="text-sm font-bold text-[#0F172A]">Product image*</h1>
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
                                                name="productImage"
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
                            Update Product
                        </button>
                    </form>
                </div> */}
                <div className=" w-full h-[calc(100%-1rem)] max-h-full">
      <div className="relative  p-4 w-full max-w-[38rem] max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold text-gray-900">Product information</h3>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4">
              {currentPage === 1 && (
                <>
                  <div>
                    <h1 className="text-sm font-bold text-[#0F172A]">Product name*</h1>
                    <h1 className="text-xs font-normal text-[#64748B] py-3">
                      Include min. 40 characters to make it more interesting
                    </h1>
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Customize your Macbook Air 13-inch"
                      required
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-[#0F172A]">Product Category*</h1>
                    <Dropdown
                      label={productCategory || "Select category"}
                      className="bg-white text-blue-500 border border-[#E2E8F0] focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                      onClick={(category) => setProductCategory(category)}
                    >
                      <Dropdown.Item onClick={() => setProductCategory("Phones")}>
                        Phones
                      </Dropdown.Item>
                      <Dropdown.Item onClick={() => setProductCategory("Laptop")}>
                        Laptop
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-[#0F172A]">Product descriptions*</h1>
                    <h1 className="text-xs font-normal text-[#64748B] py-3">
                      Include min. 200 characters to make it easier for buyers to understand and find your product
                    </h1>
                    <textarea
                      name="productDescription"
                      id="productDescription"
                      value={productDescription}
                      onChange={(e) => setProductDescription(e.target.value)}
                      placeholder="Type something..."
                      className="w-full p-5 border border-[#E2E8F0] rounded-lg text-sm font-normal"
                      cols="30"
                      rows="10"
                      max="200"
                      required
                    ></textarea>
                  </div>
                </>
              )}
              {currentPage === 2 && (
                <>
                  <div>
                    <h1 className="text-sm font-bold text-[#0F172A]">Product price*</h1>
                    <input
                      type="number"
                      name="productPrice"
                      id="productPrice"
                      value={productPrice}
                      onChange={(e) => setProductPrice(e.target.value)}
                      className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter product price"
                      required
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-[#0F172A]">Product quantity*</h1>
                    <input
                      type="number"
                      name="productQuantity"
                      id="productQuantity"
                      value={productQuantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                      className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter product quantity"
                      required
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-bold text-[#0F172A]">Product discount (%)</h1>
                    <input
                      type="number"
                      name="productDiscount"
                      id="productDiscount"
                      value={productDiscount}
                      onChange={(e) => setProductDiscount(e.target.value)}
                      className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter product discount"
                    />
                  </div>
                </>
              )}
              {currentPage === 3 && (
                <>
                  <div className="flex flex-col p-5">
                    <h1 className="text-sm font-bold text-[#0F172A]">Product image*</h1>
                    <h1 className="text-xs font-normal text-[#64748B] pt-3">
                      Image format .jpg .jpeg .png and minimum size 300 x 300px
                    </h1>
                    <div className="flex pt-5 items-center gap-4">
                      <div className="flex w-full h-full max-w-[8rem] max-h-[8rem] rounded-lg px-4 pt-5 pb-5 bg-[#E2E8F0]">
                        <img src={productlist1} alt="" className="w-full h-full" />
                      </div>
                      <div className="flex w-full h-full max-w-[8rem] max-h-[8rem] rounded-lg p-4 bg-[#E2E8F0]">
                        <img src={productlist2} alt="" className="w-full h-full" />
                      </div>
                      <div className="flex w-full h-full max-w-[8rem] max-h-[8rem] rounded-lg px-4 py-5 bg-[#E2E8F0]">
                        <img src={productlist3} alt="" className="w-full h-full" />
                      </div>
                      <div id="previewImg" className="flex w-full h-full max-w-[8rem] max-h-[8rem] rounded-lg p-4 bg-[#E2E8F0]">
                        {previewSrc ? (
                          <img src={previewSrc} alt="Preview" className="w-full h-full" />
                        ) : (
                          <>
                            <input
                              type="file"
                              name="productImage"
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
                </>
              )}
              <div className="flex items-center border-t-[#F1F5F9] mt-5 pt-5 gap-4 w-full">
                {currentPage > 1 && (
                  <Button color="gray" className="w-full" onClick={handlePrevPage}>
                    Previous
                  </Button>
                )}
                {currentPage < 3 ? (
                  <Button className="w-full bg-blue-500" onClick={handleNextPage}>
                    Next
                  </Button>
                ) : (
                  <Button className="w-full bg-blue-500" onClick={handleFormSubmit}>
                    Submit
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
            </Wrapper>
        </>
    );
};

