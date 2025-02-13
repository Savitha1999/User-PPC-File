

// import React from 'react';
// import { FaUser, FaEnvelope, FaPhone, FaHome, FaSignOutAlt } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const MyProfile = () => {
//   return (
//     <div className="container mt-5">
//       {/* Top Image Centered */}
//       <div className="text-center mb-4">
//         <img
//           src="your-image-url.jpg" // Replace with your image URL
//           alt="Profile"
//           className="img-fluid"
//           style={{ maxWidth: '150px' }}
//         />
//       </div>

//       {/* Form Section */}
//       <div className="card p-4">
//         <h2 className="text-center mb-4">Update Profile</h2>
//         <form>
//           {/* Name Input */}
//           <div className="form-group mb-3">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">
//                   <FaUser />
//                 </span>
//               </div>
//               <input type="text" className="form-control" placeholder="Name" />
//             </div>
//           </div>

//           {/* Email Input */}
//           <div className="form-group mb-3">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">
//                   <FaEnvelope />
//                 </span>
//               </div>
//               <input type="email" className="form-control" placeholder="Email" />
//             </div>
//           </div>

//           {/* Mobile Number Input */}
//           <div className="form-group mb-3">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">
//                   <FaPhone />
//                 </span>
//               </div>
//               <input type="tel" className="form-control" placeholder="Mobile Number" />
//             </div>
//           </div>

//           {/* Address Input */}
//           <div className="form-group mb-3">
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <span className="input-group-text">
//                   <FaHome />
//                 </span>
//               </div>
//               <input type="text" className="form-control" placeholder="Address" />
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="d-flex justify-content-between">
//             <button type="button" className="btn btn-primary">
//               Update Profile
//             </button>
//             <button type="button" className="btn btn-danger">
//               <FaSignOutAlt /> Log Out
//             </button>
//           </div>
//         </form>
//       </div>

//       {/* Bottom Image and Text Section */}
//       <div className="d-flex mt-5">
//         <div className="col-md-6">
//           <img
//             src="your-bottom-image-url.jpg" // Replace with your bottom image URL
//             alt="Side Image"
//             className="img-fluid"
//           />
//         </div>
//         <div className="col-md-6">
//           <p className="h4">Profile Information</p>
//           <p>
//             Here you can update your personal details, such as name, email, mobile number, and address. Make sure to keep your profile up to date.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;



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

        {/* Bottom Image and Text Section */}
        {/* <div className="d-flex mt-5">
          <div className="col-md-6">
            <img
              src={Applogo} // Replace with your bottom image URL
              alt="Side Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
          <p>App Version</p>
            <p className="h4">33</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyProfile;
