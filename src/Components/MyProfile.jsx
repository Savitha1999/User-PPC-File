

import React from 'react';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaHome, FaSignOutAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/Sale Property-01.png'
const MyProfile = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center"
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollbarWidth: 'none', // For Firefox
        msOverflowStyle: 'none', // For IE and Edge
      }}
    >
      {/* Main Form Container with width 450px */}
      <div className="card p-4" style={{ width: '450px' }}>
        {/* Top Image Centered */}
        <div className="text-center mb-4">
          <img
            src={logo} // Replace with your image URL
            alt="Profile"
            className="img-fluid"
            style={{ maxWidth: '150px' }}
          />
        </div>

        {/* Form Section */}
        <form>
          {/* Name Input */}
          <div className="form-group mb-3 ">
          <label htmlFor="name" className="form-label"><FaUserAlt className='me-2'color="#4F4B7E"/>Name</label>
            <div className="input-group d-flex align-items-center" style={{ width: '100%' }}>
              {/* <div className="input-group-prepend">
                <span className="input-group-text d-flex align-items-center" style={{ background: 'none', border: 'none', color:"#4F4B7E" }}>
                  <FaUserAlt />
                </span>
              </div> */}
              <input type="text" className="form-control rounded-0" placeholder="Name"   style={{
                  border: 'none',
                  borderBottom: '1px solid #4F4B7E',
                }}/>
            </div>
          </div>

          {/* Email Input */}
          <div className="form-group mb-3 ">
          <label htmlFor="email" className="form-label"><FaEnvelope className='me-2'color="#4F4B7E"/>Email</label>
            <div className="input-group d-flex align-items-center" style={{ width: '100%' }}>
              {/* <div className="input-group-prepend">
                <span className="input-group-text d-flex align-items-center" style={{ background: 'none', border: 'none', color:"#4F4B7E" }}>
                  <FaEnvelope />
                </span>
              </div> */}
              <input type="email" className="form-control rounded-0" placeholder="Email" style={{
                  border: 'none',
                  borderBottom: '1px solid #4F4B7E',
                }}/>
            </div>
          </div>

          {/* Mobile Number Input */}
          <div className="form-group mb-3 ">
          <label htmlFor="mobile" className="form-label"><FaPhoneAlt className='me-2' color="#4F4B7E"/>Mobile Number</label>
            <div className="input-group d-flex align-items-center" style={{ width: '100%' }}>
              {/* <div className="input-group-prepend">
                <span className="input-group-text d-flex align-items-center" style={{ background: 'none', border: 'none', color:"#4F4B7E" }}>
                  <FaPhoneAlt />
                </span>
              </div> */}
              <input type="tel" className="form-control rounded-0" placeholder="Mobile Number" style={{
                  border: 'none',
                  borderBottom: '1px solid #4F4B7E',
                }} />
            </div>
          </div>

          {/* Address Input */}
          <div className="form-group mb-3">
          <label htmlFor="address" className="form-label"> <FaHome className='me-2'color="#4F4B7E"/>Address</label>
            <div className="input-group d-flex align-items-center" style={{ width: '100%' }}>
              {/* <div className="input-group-prepend">
                <span className="input-group-text d-flex align-items-center" style={{ background: 'none', border: 'none', color:"#4F4B7E" }}>
                  <FaHome />
                </span>
              </div> */}
              <input type="text" className="form-control rounded-0" placeholder="Address" style={{
                  border: 'none',
                  borderBottom: '1px solid #4F4B7E',
                }}/>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="d-flex flex-column">
            <button type="button" className="btn w-100 mb-2" style={{background:"#4F4B7E", color:"#ffffff"}}>
              UPDATE PROFILE
            </button>
            <button type="button" className="btn w-100" style={{background:'#ffffff', border:'1px solid red'}}>
               LOG OUT
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default MyProfile;
