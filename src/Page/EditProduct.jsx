import React, {useState} from 'react'
import { Wrapper } from '../_Component/wrapper_components'
import productlist1 from "../_assets/productlist1.svg"
import productlist2 from "../_assets/productlist2.svg"
import productlist3 from "../_assets/productlist3.svg"
import productlist4 from "../_assets/productlist4.svg"
export const EditProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [previewSrc, setPreviewSrc] = useState('');

    const handleFormSubmit = () => {
      // Implement logic to update product information (e.g., API call, state update)
      alert('Product updated successfully!');
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
     <Wrapper pageTitle='EditProduct'>
     <div className="p-4 max-w-[35em] bg-white  shadow-xl rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="productName" className="text-sm font-bold text-gray-800">Product Name</label>
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
          <label htmlFor="productDescription" className="text-sm font-bold text-gray-800">Product Description</label>
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Update Product</button>
      </form>
    </div>
    
</Wrapper>
    </>
  );
}
