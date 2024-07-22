import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('/api/verify-otp', { otp });

      if (response.data.success) {
        MySwal.fire({
          icon: 'success',
          title: 'OTP verified',
          text: 'Your account has been successfully created.',
        });

        // Redirect to login page or user dashboard
        window.location.href = '/';
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'Invalid OTP',
          text: 'Please enter the correct OTP.',
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while verifying the OTP.',
      });
      console.error('Error verifying OTP:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1>Verify OTP</h1>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="otp" className="form-label">
            Enter OTP
          </label>
          <input
            type="text"
            id="otp"
            name="otp"
            value={otp}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <Link to="/resend-otp" className="mt-3">
        Resend OTP
      </Link>
    </div>
  );
};

