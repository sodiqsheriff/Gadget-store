// fetchCategory.js
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import config from '../_data/config.js';

const MySwal = withReactContent(Swal);

export const fetchCategory = async (pageNo = 0, pageSize = 6, category = '', query = '') => {
  try {
    const url = `${config.baseURL}/category/?pageNo=${pageNo}&pageSize=${pageSize}&category=${category}&query=${query}`;
    const response = await axios.get(url);
    console.log({ response }, response.data.responseCode === "00");

    if (response.data.responseCode === "00") {
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
    console.error('Error fetching Category:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error fetching the category.',
    });
    throw error;
  }
};