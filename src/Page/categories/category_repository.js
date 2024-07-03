import axios from 'axios';
import config from '../../_data/config.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Fetch all categories from the server
export const fetchCategories = async () => {
  try {
    const url = `${config.baseURL}/category/?pageNo=0&pageSize=5`;
      const response = await axios.get(url);
    console.log({ response }, response.data.responseCode == "00");

    if (response.data.responseCode == "00") {
      return response.data.data;
    }else{
      MySwal.fire({
        icon: 'error',
        title: response.data.responseMessage,
        text: 'Error occurred.',
      });
      return {};
    }
   
  } catch (error) {
    console.error('Error fetching categories:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error fetching the categories.',
    });
    throw error;
  }
};

// Edit category
export const editCategory = async (editCategoryData) => {
  try {
    const url = `${config.baseURL}/category/update`;
    const response = await axios.put(url, editCategoryData, {
      headers: {
        'Content-Type': 'application/json',
        'cors': '*'
      }
    });
    console.log({ response });
    MySwal.fire({
      icon: 'success',
      title: 'Category Updated',
      text: 'The category has been updated successfully!',
    });
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error updating the category.',
    });
    throw error;
  }
};

// Add category
export const addCategory = async (categoryData) => {
  try {
    const url = `${config.baseURL}/category/add`;
    const response = await axios.post(url, categoryData, {
      headers: {
        'Content-Type': 'application/json',
        'cors': '*'
      }
    });
    console.log({ response });
    if (response.data.responseCode == "00") {

      MySwal.fire({
        icon: 'success',
        title: response.data.responseMessage,
        text: 'The product has been updated successfully!',
      });
      
    }else{
      MySwal.fire({
        icon: 'error',
        title: response.data.responseMessage,
        text: 'Error occurred.',
      });
    }
  } catch (error) {
    console.error('Error adding category:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error adding the category.',
    });
  }
};

// View products
export const viewProduct = async () => {
  try {
    const url = `${config.baseURL}/product`;
    const response = await axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'cors': '*'
      }
    });
    console.log({ response });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error fetching the products.',
    });
    throw error;
  }
};

// Add product
export const addProduct = async (productData) => {
  try {
    const url = `${config.baseURL}/product/add`;
    const response = await axios.post(url, productData, {
      headers: {
        'Content-Type': 'application/json',
        'cors': '*'
      }
    });
    console.log({ response });
    MySwal.fire({
      icon: 'success',
      title: 'Product Added',
      text: 'The product has been added successfully!',
    });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error adding the product.',
    });
    throw error;
  }
};

// Edit product
export const editProduct = async (editProductData) => {
  try {
    const url = `${config.baseURL}/product`;
    const response = await axios.put(url, editProductData, {
      headers: {
        'Content-Type': 'application/json',
        'cors': '*'
      }
    });
    console.log({ response });
    if (response.data.responseCode == "00") {

    }
    MySwal.fire({
      icon: 'success',
      title: 'Product Updated',
      text: 'The product has been updated successfully!',
    });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error updating the product.',
    });
    throw error;
  }
};
