import axios from 'axios';
// import config from '../../_data/config.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import config from '../_data/config';

const MySwal = withReactContent(Swal);

// Fetch all product from the server
export const fetchProduct = async (pageNo = 0, pageSize = 6) => {
  try {
    const url = `${config.baseURL}product/?pageNo=${pageNo}&pageSize=${pageSize}`;
    const response = await axios.get(url);
    console.log({ response }, response.data.responseCode == "00");

    if (response.data.responseCode == "00") {
      return response.data.data;
    } else {
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
      text: 'There was an error fetching the product.',
    });
    throw error;
  }
};
