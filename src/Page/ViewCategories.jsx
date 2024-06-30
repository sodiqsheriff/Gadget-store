import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery"; // Example library for image slider
import { Wrapper } from "../_Component/wrapper_components";
import image from "../_assets/wactch.svg";

export const ViewCategories = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    // Fetch category details and images from API or local storage
    // Example: Fetch category details
    // Example: Fetch category images

    // Example data for category images
    const images = [
      {
        original: image,
        thumbnail: "./assets/category-images/image1-thumb.jpg",
        description: "Front View",
      },
      {
        original: image,
        thumbnail: "./assets/category-images/image2-thumb.jpg",
        description: "Left View",
      },
      {
        original: image,
        thumbnail: "./assets/category-images/image3-thumb.jpg",
        description: "Right View",
      },
    ];

    setCategoryName("Phones");
    setCategoryDescription("This category includes different Phones.");
    setCategoryImages(images);
  }, []);
  return (
    <>
      <Wrapper pageTitle="ViewCategories">
        <div className="p-4  block bg-white w-2/5 rounded-lg max-w-[33em]">
          <div className="mb-8">
            {/* Image Gallery or Full View */}
            <img src={image} className='w-3/5 mx-auto' alt="" />
            {/* <ImageGallery items={categoryImages} /> */}
          </div>
          <h2 className="text-2xl font-bold mb-4">{categoryName}</h2>
          <p className="text-gray-600 mb-4">{categoryDescription}</p>
          {/* Additional content or actions related to the category */}
        </div>
      </Wrapper>
    </>
  );
};
