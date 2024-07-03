import React, { useState, useEffect } from 'react';
import image from "../../_assets/wactch.svg";
import { Wrapper } from '../../_Component/wrapper_components';

export const ViewProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productStatus, setProductStatus] = useState(true); // true for active, false for inactive
    const [productImages, setProductImages] = useState([]);
    

    useEffect(() => {
        // Fetch product details and images from API or local storage
        // Example: Fetch product details
        // Example: Fetch product images

        // Example data for product images
        const images = [
            {
                original: image,
                thumbnail: image,
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

        setProductName('Watch');
        setProductDescription('This is a description of the Watch product.');
        setProductImages(images);
    }, []);

    const toggleStatus = () => {
        setProductStatus(!productStatus);
    };

    return (
        <Wrapper pageTitle='View Product'>
            <div className="flex flex-row gap-12">
            <div className="p-4 max-w-md mb-5 bg-white rounded-md">
                <div className="mb-8">
                    {/* Full-size image */}
                    <img src={image} alt="Product" className="w-full max-w-[20em] mb-4" />
                    <h2 className="text-2xl font-bold mb-4">{productName}</h2>
                    <p className="text-gray-600 mb-4">{productDescription}</p>
                    {/* Toggle slide button for status */}
                    <label htmlFor="toggleStatus" className="flex items-center cursor-pointer">
                        <div className={`relative w-12 h-6 rounded-full ${productStatus ? 'bg-blue-500' : 'bg-gray-400'}`}>
                            <div className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow-md transform ${productStatus ? 'translate-x-full' : ''} transition-transform duration-300`}></div>
                        </div>
                        <div className="ml-2">{productStatus ? 'Active' : 'Inactive'}</div>
                        <input
                            type="checkbox"
                            id="toggleStatus"
                            className="hidden"
                            checked={productStatus}
                            onChange={toggleStatus}
                        />
                    </label>
                    {/* Image Gallery with thumbnails */}
                    <div className="flex space-x-2 mt-4">
                        {productImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.original}
                                alt={image.description}
                                className="w-1/3 max-w-[10em]"
                            />
                        ))}
                    </div>
                </div>

                {/* Additional content or actions related to the product */}
            </div>
            <div className=" bg-white rounded-lg max-w-[25rem] h-fit shadow-lg w-full p-4">
                  
                    <div className="flex flex-col my-5">
                    <span className='font-bold'>Product Category:</span>
                    <span className='font-medium p-2 mt-2 rounded-lg'> Phone</span>
              </div>
           <div className="flex flex-col">
             <span className='font-bold'>Product Quantity:</span>
             <span className='font-medium mt-2 rounded-lg'> 20</span>
             </div>
           <div className="flex flex-col my-5">
             <span className='font-bold'>Product price:</span>
             <span className='font-medium mt-2 rounded-lg'>#5000</span>
           </div>  
           <div className="flex flex-col my-5">
             <span className='font-bold'>Product Discount:</span>
             <span className='font-medium mt-2 rounded-lg'> #500</span>
           </div>     
            {/* category,price,quantity,discount */}
            </div>
            </div>
        </Wrapper>
    );
};

