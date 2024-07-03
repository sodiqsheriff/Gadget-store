import React, { useEffect, useState } from "react";
import { Button, Dropdown, Spinner } from "flowbite-react";
import { Wrapper } from "../../_Component/wrapper_components";
import productlist4 from "../../_assets/productlist4.svg";
import { addProduct } from "./product_repository";
import { fetchCategories } from "../categories/category_repository";

export const AddProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productQuantity, setProductQuantity] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [productStatus, setproductStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect (async  () =>{
   const d =
    fetchCategories();
  })

  const toggleproductStatus = () => {
    setproductStatus(!productStatus);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productImage ||
      !productStatus ||
      !discountedPrice
    ) {
      alert("please fill in all fields");
      return;
    }

    const requestData = {
      productName,
      productDescription,
      discountedPrice,
      productStatus,
      productPrice,
      productImage,
    };
    try {
      handleLoading();
      const newProduct = await addProduct(requestData);
      handleLoading();

      console.log("Product added successfully:", { requestData });

      // Call the handleAddCategory function passed as prop
      handleAddProduct(requestData);

      // Reset form fields
      setProductName("");
      setProductDescription("");
      setproductStatus(false);
      setProductImage(null);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };
  const handleLoading = () => {
    setLoading(!loading);
  };
  return (
    <>
      <Wrapper pageTitle="AddProduct">
        <div className=" w-full h-[calc(100%-1rem)] max-h-full">
          <div className="relative  p-4 w-full max-w-[38rem] max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  Product information
                </h3>
              </div>
              <div className="p-4 md:p-5">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {currentPage === 1 && (
                    <>
                      <div>
                        <h1 className="text-sm font-bold text-[#0F172A]">
                          Product name*
                        </h1>
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
                        <h1 className="text-sm font-bold text-[#0F172A]">
                          Product Category*
                        </h1>
                        <Dropdown
                          label={productCategory || "Select category"}
                          className="bg-white text-blue-500 border border-[#E2E8F0] focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                          onClick={(categoryData) =>
                            setProductCategory(categoryData)
                          }
                        >
                          <Dropdown.Item
                            onClick={() => setProductCategory("Phones")}
                          >
                            Phones
                          </Dropdown.Item>
                          
                        </Dropdown>
                      </div>
                      <div>
                        <h1 className="text-sm font-bold text-[#0F172A]">
                          Product descriptions*
                        </h1>
                        <h1 className="text-xs font-normal text-[#64748B] py-3">
                          Include min. 200 characters to make it easier for
                          buyers to understand and find your product
                        </h1>
                        <textarea
                          name="productDescription"
                          id="productDescription"
                          value={productDescription}
                          onChange={(e) =>
                            setProductDescription(e.target.value)
                          }
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
                        <h1 className="text-sm font-bold text-[#0F172A]">
                          Product price*
                        </h1>
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
                        <h1 className="text-sm font-bold text-[#0F172A]">
                          Product quantity*
                        </h1>
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
                      value={discountedPrice}
                      onChange={(e) => setDiscountedPrice(e.target.value)}
                      className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="Enter product discount"
                    />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">productStatus:</span>
                        <div
                          onClick={toggleproductStatus}
                          className={`relative w-11 h-6 cursor-pointer rounded-full ${
                            productStatus ? "bg-blue-600" : "bg-gray-200"
                          }`}
                        >
                          <div
                            className={`absolute top-[2px] left-[2px] bg-white border border-blue-300 rounded-full h-5 w-5 transition-all ${
                              productStatus ? "translate-x-full" : ""
                            }`}
                          ></div>
                        </div>
                      </div>
                    </>
                  )}
                  {currentPage === 3 && (
                    <>
                      <div className="flex flex-col p-5">
                        <h1 className="text-sm font-bold text-[#0F172A]">
                          Product image*
                        </h1>
                        <h1 className="text-xs font-normal text-[#64748B] pt-3">
                          Image format .jpg .jpeg .png and minimum size 300 x
                          300px
                        </h1>
                        <div className="flex pt-5 items-center gap-4">
                          <div
                            id="previewImg"
                            className="flex w-full h-full max-w-[8rem] max-h-[8rem] rounded-lg p-4 bg-[#E2E8F0]"
                          >
                            {previewSrc ? (
                              <img
                                src={previewSrc}
                                alt="Preview"
                                className="w-full h-full"
                              />
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
                                <label
                                  htmlFor="fileInput"
                                  className="cursor-pointer"
                                >
                                  <img
                                    src={productlist4}
                                    alt=""
                                    className="w-full h-full"
                                  />
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
                      <Button
                        color="gray"
                        className="w-full"
                        onClick={handlePrevPage}
                      >
                        Previous
                      </Button>
                    )}
                    {currentPage < 3 ? (
                      <Button
                        className="w-full bg-blue-500"
                        onClick={handleNextPage}
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        className="w-full bg-blue-500"
                        onClick={handleFormSubmit}
                      >
                        {loading ? <Spinner /> : "Add Product"}
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

{
  /* <div className="flex flex-col  w-full pt-28 md:pt-0">
<div className="relative mb-10 p-4 w-full max-w-[40em] max-h-screen">
  <div className="relative bg-white rounded-lg shadow">
    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
      <h3 className="text-xl font-semibold text-gray-900">Product information</h3>
    </div>
    <div className="p-4 md:p-5">
      <form className="space-y-4">
        {currentPage === 1 && (
        
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
                        name=""
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
          
        )}
        {currentPage === 2 && (
          <>
            <div>
              <h1 className="text-sm font-bold text-[#0F172A]">Product name*</h1>
              <h1 className="text-xs font-normal text-[#64748B] py-3">
                Include min. 40 characters to make it more interesting
              </h1>
              <input
                type="text"
                name="text"
                id="text"
                className="bg-white border border-[#E2E8F0] text-[#0F172A] placeholder-bold placeholder-black font-semibold text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Customize your Macbook Air 13-inch"
                required
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#0F172A]">Product descriptions*</h1>
              <h1 className="text-xs font-normal text-[#64748B] py-3">
                Include min. 260 characters to make it easier for buyers to understand and find your product
              </h1>
              <textarea
                placeholder="Type something..."
                className="w-full p-5 border border-[#E2E8F0] rounded-lg text-sm font-normal"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </>
        )}
        {currentPage === 3 && (
          <>
            <div className="flex items-center gap-4 w-full">
              <div className="flex flex-col w-full ">
                <label htmlFor="" className="text-sm font-bold pb-5">Brand</label>
                <Dropdown
                  label={selectedBrand}
                  className='bg-blue-500'
                  dismissOnClick={false}
                  onSelect={value => setSelectedBrand(value)}
                  options={[
                    { label: 'Apple', value: 'Apple' },
                    { label: 'Samsung', value: 'Samsung' },
                    { label: 'Google', value: 'Google' },
                  ]}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="" className="text-sm font-bold pb-5">Category</label>
                <Dropdown
                  label={selectedCategory}
                  dismissOnClick={false}
                  onSelect={value => setSelectedCategory(value)}
                  options={[
                    { label: 'Select category', value: 'Select category' },
                    { label: 'Electronics', value: 'Electronics' },
                    { label: 'Fashion', value: 'Fashion' },
                  ]}
                />
              </div>
            </div>
          </>
        )}
        <div className="flex items-center border-t-[#F1F5F9] mt-5 pt-5 gap-4 w-full">
          {currentPage > 1 && (
            <Button  className="w-full bg-blue-500" onClick={handlePrevPage}>
              Previous
            </Button>
          )}
          {currentPage < 3 ? (
            <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={handleNextPage}>
              Next
            </Button>
          ) : (
            <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={() => alert('Form submitted')}>
              Submit
            </Button>
          )}
        </div>
      </form>
    </div>
  </div>
</div>


</div> */
}
