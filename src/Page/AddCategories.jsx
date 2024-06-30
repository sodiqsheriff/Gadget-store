import React, {useState} from "react";
import { Wrapper } from "../_Component/wrapper_components";
import { Button, Dropdown } from "flowbite-react";
export const AddCategories = () => {
    const [categoryName, setCategoryName] = useState('');
    const [categoryType, setCategoryType] = useState('');
  
    const handleFormSubmit = () => {
      // Implement your logic to handle form submission (e.g., API calls, state updates)
      alert('Category has been added!');
    };
  
    return (
        <Wrapper pageTitle='AddCategories'>
      <div className=" w-full h-[calc(100%-1rem)] max-h-full">
        <div className="relative mt-5 p-4 w-full max-w-[38rem] max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Add Category</h3>
            </div>
            <div className="p-4 md:p-5">
              <form className="space-y-4">
                <div>
                  <h1 className="text-sm font-bold text-[#0F172A]">Category Name*</h1>
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
                  <h1 className="text-sm font-bold text-[#0F172A]">Category Type*</h1>
                  
                  <Dropdown
                    label={categoryType || "Select category type"}
                    className="bg-white text-blue-500 border border-[#E2E8F0] focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                    onClick={(type) => setCategoryType(type)}
                  >
                    <Dropdown.Item onClick={() => setCategoryType("Electronics")}>
                      Electronics
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategoryType("Clothing")}>
                      Clothing
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setCategoryType("Home Appliances")}>
                      Home Appliances
                    </Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="flex items-center border-t-[#F1F5F9] mt-5 pt-5 gap-4 w-full">
                  <Button className="w-full bg-blue-500" onClick={handleFormSubmit}>
                    Add Category
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </Wrapper>
    );
  }
  
  