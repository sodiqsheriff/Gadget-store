import axios from 'axios';
import config from '../../_data/config.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

// Login user
export const loginUser = async (username, password) => {
  try {
    const url = `${config.baseURL}/login`;
    const response = await axios.get(url, {
      params: { username, password }
    });
    
    console.log({ response }, response.data.responseCode === "00");

    if (response.data.responseCode === "00") {
      const token = response.data.data.token; 
      localStorage.setItem('token', token);

      MySwal.fire({
        icon: 'success',
        title: 'Login successful',
        text: 'Welcome',
      });

      return response.data.data;
    } else {
      MySwal.fire({
        icon: 'error',
        title: response.data.responseMessage,
        text: 'Login failed.',
      });
      return {};
    }
  } catch (error) {
    console.error('Error logging in:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error logging in.',
    });
    throw error;
  }
};

// Signup user
export const signupUser = async (username, password, email) => {
  try {
    const url = `${config.baseURL}/signup`;
    const response = await axios.post(url, { username, password, email });
    
    console.log({ response }, response.data.responseCode === "00");

    if (response.data.responseCode === "00") {
      MySwal.fire({
        icon: 'success',
        title: 'Signup successful',
        text: 'Account created successfully',
      });

      return response.data.data;
    } else {
      MySwal.fire({
        icon: 'error',
        title: response.data.responseMessage,
        text: 'Signup failed.',
      });
      return {};
    }
  } catch (error) {
    console.error('Error signing up:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error signing up.',
    });
    throw error;
  }
};

// Reset password
export const resetPassword = async (email) => {
  try {
    const url = `${config.baseURL}/reset-password`;
    const response = await axios.post(url, { email });

    console.log({ response }, response.data.responseCode === "00");

    if (response.data.responseCode === "00") {
      MySwal.fire({
        icon: 'success',
        title: 'Password Reset',
        text: 'Please check your email for reset instructions',
      });

      return response.data.data;
    } else {
      MySwal.fire({
        icon: 'error',
        title: response.data.responseMessage,
        text: 'Reset password failed.',
      });
      return {};
    }
  } catch (error) {
    console.error('Error resetting password:', error);
    MySwal.fire({
      icon: 'error',
      title: 'Error',
      text: 'There was an error resetting the password.',
    });
    throw error;
  }
};
