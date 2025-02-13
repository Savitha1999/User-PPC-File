// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Navbar";
// import Main from "./Main";


// const MoblieView = () => {
 

//   return (
//   <>
//     <div
//       className="d-flex justify-content-center align-items-center vh-100"
//       style={{ minHeight: "100vh" , background:'#E5E5E5' }}
//     >
// <div style={{ height: "100vh",width:'470px', background:'white'}}>
// <div style={{ height: "100%",width:'100%', position: "relative", overflowY:'hidden'}}>

// <Navbar />
// {/* <Appp /> */}
// <Main />
// </div>
// </div>

//     </div>
//     </>

//   );
// };

// export default MoblieView;







import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Main from "./Main";
import { useLocation } from "react-router-dom";
import EditForm from "./EditForm";

const MoblieView = () => {
  const location = useLocation();
  const { phoneNumber, countryCode } = location.state || {}; // Retrieve passed data

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ minHeight: "100vh", background: '#E5E5E5' }}
      >
        <div style={{ height: "100vh", width: '470px', background: 'white' }}>
          <div style={{ height: "100%", width: '100%', position: "relative", overflowY: 'hidden' }}>
            <Navbar   />
            <Main />


            {/* Display Phone Number and Country Code */}
            {/* <div className="container mt-4">
              {phoneNumber && countryCode ? (
                <div>
                  <h4>Your Phone Number: {countryCode} {phoneNumber}</h4>
                </div>
              ) : (
                <p>Phone number or country code not provided.</p>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoblieView;



