import axios from 'axios';
import config from '../../_data/config.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Fetch all product from the server
export const fetchProduct = async () => {
  try {
    const url = `${config.baseURL}/product/?pageNo=1&pageSize=5`;
      const response = await axios.post(url);
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
    console.error('Error fetching product:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error fetching the categories.',
    });
    throw error;
  }
};

// Edit product
export const editProduct = async (editProductData) => {
  try {
    const url = `${config.baseURL}/product/0f456cf39e2a4f8c89beb10cb3718b0e/update`;
    const response = await axios.put(url, editProductData, {
      headers: {
        'Content-Type': 'application/json',
        'cors': '*'
      }
    });
    console.log({ response });
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


