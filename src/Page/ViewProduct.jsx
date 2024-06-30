import React, { useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery'; // Ex
import image from "../_assets/wactch.svg"
import { Wrapper } from '../_Component/wrapper_components'

export const ViewProduct =()=> {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImages, setProductImages] = useState([]);
  
    useEffect(() => {
      // Fetch product details and images from API or local storage
      // Example: Fetch product details
      // Example: Fetch product images
  
      // Example data for product images
      const images = [
        {
          original: image,
          thumbnail: image, // Using the same image for thumbnails for simplicity
          description: 'Front View'
        },
        {
          original: image,
          thumbnail: image,
          description: 'Left View'
        },
        {
          original: image,
          thumbnail: image,
          description: 'Right View'
        }
      ];
  
      setProductName('Macbook Air');
      setProductDescription('This is a description of the Macbook Air product.');
      setProductImages(images);
    }, []);
  

  return (
    <Wrapper pageTitle='ViewProduct'>
      <div className="p-4 max-w-md bg-white rounded-md">

        <div className="mb-8">
          {/* Full-size image */}
          <img src={image} alt="Product" className="w-full max-w-[20em] mb-4" />
          <h2 className="text-2xl font-bold mb-4">{productName}</h2>
          <p className="text-gray-600 mb-4">{productDescription}</p>
          {/* Image Gallery with thumbnails */}
          {/* <ImageGallery
            items={productImages}
            showThumbnails={true}
            thumbnailPosition="bottom"
            autoPlay={true}
            slideInterval={5000} // Slide interval in milliseconds
          /> */}
        </div>

        {/* Additional content or actions related to the product */}
      </div>
    </Wrapper>
  );
}


