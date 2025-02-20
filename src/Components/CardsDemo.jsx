
// import React, { useState } from "react";
// import { FaRulerCombined, FaBed, FaUser, FaCalendarAlt, FaEye, FaCamera , FaUserAlt , FaRupeeSign  } from "react-icons/fa";
// import { Helmet } from "react-helmet";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const CardsDemo = () => {
//   // State to store fetched properties
//   const [properties, setProperties] = useState([
//     {
//       _id: "1",
//       ppcId: "PUC-001",
//       photos: [],
//       propertyMode: "Sale",
//       propertyType: "Apartment",
//       city: "Pondicherry",
//       totalArea: "1200 sq.ft",
//       bedrooms: 3,
//       ownership: "Owner",
//       bestTimeToCall: "9 AM - 5 PM",
//       price: "₹50,00,000",
//       negotiation: "Yes",
//     },
//     {
//       _id: "2",
//       ppcId: "PUC-002",
//       photos: [],
//       propertyMode: "Rent",
//       propertyType: "Villa",
//       city: "Chennai",
//       totalArea: "2000 sq.ft",
//       bedrooms: 4,
//       ownership: "Agent",
//       bestTimeToCall: "10 AM - 6 PM",
//       price: "₹1,00,000 per month",
//       negotiation: "No",
//     },
//     {
//       _id: "3",
//       ppcId: "PUC-003",
//       photos: [],
//       propertyMode: "Sale",
//       propertyType: "Plot",
//       city: "Bangalore",
//       totalArea: "5000 sq.ft",
//       bedrooms: null,
//       ownership: "Owner",
//       bestTimeToCall: "11 AM - 7 PM",
//       price: "₹75,00,000",
//       negotiation: "Yes",
//     },
//   ]);
// // Empty dependency array to run only once when the component mounts

//   return (
//     <Container fluid className="p-3" style={{fontFamily:'"inter",sans-serif'}}>
//       <Helmet>
//         <title>Pondy Property | Properties</title>
//       </Helmet>
//       <Row className="g-3">
//         <Col lg={12} className="d-flex align-items-center justify-content-center">
//           {/* <div className="d-flex mt-3 justify-content-center align-items-center"> */}
           
//             <div
//               style={{
//                 width: "100%",
//               }}
//             >
//                <div style={{ maxHeight: '70vh', overflowY: 'scroll', scrollbarWidth: 'none', width:'450px' }}>
//               {properties.length > 0 ? (
//                 properties.map((property) => (
//    <div key={property._id}
//           className="card mb-3 shadow p-1"
//           style={{ width: '100%', minWidth: '400px', height: 'auto', background:'#F9F9F9' }} // Make width responsive
//           >
//           <div className="row g-0">
//             {/* Image Section */}
//             <div className="col-md-4 d-flex flex-column justify-content-between align-items-center">
//               {/* Top: PUC Code */}
//               <div
//                 className="text-white py-1 px-2 text-center"
//                 style={{ width: '100%' , background:"#2F747F"}}
//               >
//                 PUC- {property.ppcId}
//               </div>
//               {/* Middle: Image */}
//               <div className="img-container" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
//                 <img
//                  src={
//                   property.photos && property.photos.length > 0
//                             ? `http://localhost:5000/${property.photos[0]}`
//                              : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"
//                         }
//                   className="img-fluid"
//                   style={{
//                     width: '100%',
//                     height: '120px',
//                     objectFit: 'cover', // Try 'contain' if you want the full image visible without clipping
//                   }}
//                 />
//               </div>
//               {/* Bottom: Incomplete */}
//               <div className="d-flex justify-content-between mt-2 w-100">
//               <span className="p-2" style={{ color:'#fff', background:'#2F747F', fontSize:'12px' , borderRadius:'10% 75% 30% 10%'}}> <FaCamera className="me-1"/> 1</span>
//               <span className="p-2" style={{ color:'#fff',  background:'#2F747F', fontSize:'12px', borderRadius:'75% 20% 30% 10%'}}>  <FaEye className="me-1" />1</span>
//                </div>

//             </div>
          
//             {/* Content Section */}
//             <div className="col-md-8 p-1">
//             <p className="m-0">{property.propertyMode}</p>
//             <p>{property.propertyType}</p>
//             <p>{property.city}</p>
//               <div className="card-body p-2 d-flex flex-column justify-content-center">
//                 {/* Align Icons and Text */}
//                 <div className="row">
//                   <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                     <FaRulerCombined className="me-2"color="#2F747F" /> <span style={{fontSize:'14px', color:'#555555'}}>{property.totalArea}</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                     <FaBed className="me-2" color="#2F747F"/> <span style={{fontSize:'14px', color:'#555555'}}>{property.bedrooms}</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                     <FaUserAlt className="me-2" color="#2F747F"/> <span style={{fontSize:'14px', color:'#555555'}}>{property.ownership}</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                     <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{fontSize:'14px', color:'#555555'}}>{property.bestTimeToCall}</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                     <FaRupeeSign className="me-2" color="#2F747F"/> <span style={{fontSize:'14px', color:'#555555'}}>{property.price}</span>
//                   </div>
//                   <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                   <p className="m-0" style={{color:'#2F747F', fontSize:'14px'}}> Negotiation : <span style={{color:'#555555'}}> {property.negotiation}</span></p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           </div>

//                 ))
//               ) : (
//                 <p>Loading properties...</p> // Show a loading message until data is fetched
//               )}
//               </div>

//             </div>
//           {/* </div> */}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CardsDemo;















import React, { useState } from "react";
import { FaRulerCombined, FaBed, FaUser, FaCalendarAlt, FaEye, FaCamera , FaUserAlt , FaRupeeSign  } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImage from '../Assets/Rectangle 146.png'; // Correct path
import myImage1 from '../Assets/Rectangle 145.png'; // Correct path
import pic from '../Assets/Mask Group 3@2x.png'; //
const CardsDemo = () => {
  // State to store fetched properties
  const [properties, setProperties] = useState([
    {
      _id: "1",
      ppcId: "PUC-001",
      photos: [],
      propertyMode: "Sale",
      propertyType: "Apartment",
      city: "Pondicherry",
      totalArea: "1200 sq.ft",
      bedrooms: 3,
      ownership: "Owner",
      bestTimeToCall: "9 AM - 5 PM",
      price: "₹50,00,000",
      negotiation: "Yes",
    },
    {
      _id: "2",
      ppcId: "PUC-002",
      photos: [],
      propertyMode: "Rent",
      propertyType: "Villa",
      city: "Chennai",
      totalArea: "2000 sq.ft",
      bedrooms: 4,
      ownership: "Agent",
      bestTimeToCall: "10 AM - 6 PM",
      price: "₹1,00,000 per month",
      negotiation: "No",
    },
    {
      _id: "3",
      ppcId: "PUC-003",
      photos: [],
      propertyMode: "Sale",
      propertyType: "Plot",
      city: "Bangalore",
      totalArea: "5000 sq.ft",
      bedrooms: null,
      ownership: "Owner",
      bestTimeToCall: "11 AM - 7 PM",
      price: "₹75,00,000",
      negotiation: "Yes",
    },
  ]);
// Empty dependency array to run only once when the component mounts

  return (
    <Container fluid className="p-3" style={{fontFamily:'"inter",sans-serif'}}>
      <Helmet>
        <title>Pondy Property | Properties</title>
      </Helmet>
      <Row className="g-3">
        <Col lg={12} className="d-flex align-items-center justify-content-center">
          {/* <div className="d-flex mt-3 justify-content-center align-items-center"> */}
           
            <div
              style={{
                width: "100%",
              }}
            >
               <div style={{ maxHeight: '70vh', overflowY: 'scroll', scrollbarWidth: 'none', width:'450px' }}>
              {properties.length > 0 ? (
                properties.map((property) => (
   <div key={property._id}
          className="card mb-3 shadow rounded-4"
          style={{ width: '100%', minWidth: '400px', height: 'auto', background:'#F9F9F9', overflow:'hidden' }} // Make width responsive
          >
    
                          <div className="row g-0 ">
         <div className="col-md-4 col-4 d-flex flex-column align-items-center">
         <div className="text-white py-1 px-2 text-center" style={{ width: "100%", background: "#2F747F" }}>
                          {property.ppcId}
                        </div>
 <div style={{ position: "relative", width: "100%", height: "140px" }}>
    {/* Image */}
    <img
 src={
  property.photos && property.photos.length > 0
    ? `http://localhost:5000/${property.photos[0]}`
    : pic 
  }      alt="Property"
      style={{
        objectFit: "cover",
        objectPosition: "center",
        width: "100%",
        height: "100%",
      }}
    />

    {/* Icons */}
    <div
      style={{
        position: "absolute",
        bottom: "0px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <span
        className="d-flex justify-content-center align-items-center"
        style={{
          color: "#fff",
          backgroundImage: `url(${myImage})`,
          backgroundSize: "cover",
          width: "45px",
          height: "20px",
        }}
      >
        <FaCamera className="me-1" size={13}/>  <span style={{fontSize:"11px"}}>1</span>
      </span>
      <span
        className="d-flex justify-content-center align-items-center"
        style={{
          color: "#fff",
          backgroundImage: `url(${myImage1})`,
          backgroundSize: "cover",
          width: "45px",
          height: "20px",
        }}
      >
        <FaEye className="me-1" size={15} /> <span style={{fontSize:"11px"}}> 1 </span>
      </span>
    </div>
  </div>
         </div>
         <div className="col-md-8 col-8 ps-2">
          <div className="d-flex justify-content-start"><p className="mb-1" style={{ color:'#5E5E5E' , fontWeight:500 }}>{property.propertyMode || 'N/A'}</p> 
          </div>
           <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
           <p className="m-0" style={{ color:'#5E5E5E' , fontWeight:500}}>{property.city || 'N/A'} , {property.city || 'N/A'}</p>
           <div className="card-body ps-2 m-0 pt-0 pe-2 pb-0 d-flex flex-column justify-content-center">
             <div className="row">
               <div className="col-6 d-flex align-items-center mt-1 mb-1">
                 <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' , fontWeight:500 }}>{property.totalArea || 'N/A'}</span>
               </div>
               <div className="col-6 d-flex align-items-center mt-1 mb-1">
                 <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' ,fontWeight: 500 }}>{property.bedrooms || 'N/A'}</span>
               </div>
               <div className="col-6 d-flex align-items-center mt-1 mb-1">
                 <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' ,fontWeight: 500 }}>{property.ownership || 'N/A'}</span>
               </div>
               <div className="col-6 d-flex align-items-center mt-1 mb-1">
                 <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' ,fontWeight: 500 }}>{property.bestTimeToCall || 'N/A'}</span>
               </div>
               <div className="col-12 d-flex flex-col align-items-center mt-1 mb-1">
                <h6 className="m-0">
                <span style={{ fontSize:'17px', color:'#2F747F', fontWeight:'bold', letterSpacing:"1px" }}> <FaRupeeSign className="me-2" color="#2F747F"/>{property.price ? property.price.toLocaleString('en-IN') : 'N/A'}
                </span> 
                <span style={{ color:'#2F747F', marginLeft:"5px",fontSize:'11px',}}> 
                Negotiable                </span> 
                  </h6>
               </div>
               {/* <div className="col-6 d-flex align-items-center mt-1 mb-1">
                 <h4 className="m-0" style={{ color:'#2F747F', fontSize:'13px'}}> Negotiable: <span style={{ color:'#555555' }}>{property.negotiation || 'N/A'}</span></h4>
               </div> */}
              </div>
            </div>
          </div>
       </div>
          </div>

                ))
              ) : (
                <p>Loading properties...</p> // Show a loading message until data is fetched
              )}
              </div>

            </div>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
};

export default CardsDemo;
