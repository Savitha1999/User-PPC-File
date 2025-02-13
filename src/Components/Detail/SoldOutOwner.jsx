








// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { Tab, Nav, Row, Col } from 'react-bootstrap';
// import { useParams } from 'react-router-dom';
// import { 
//   FaRupeeSign, FaBed,  
//   FaCalendarAlt, FaUserAlt, FaRulerCombined,
//   FaCamera,
//   FaEye,
//   FaPhoneAlt
// } from "react-icons/fa";
// const App = () => {
//   const [activeKey, setActiveKey] = useState('All');
//   const [removedProperties, setRemovedProperties] = useState([]);
//   const [properties, setProperties] = useState([]);

 
//   const handleRemoveProperty = async (ppcId, phoneNumber) => {
//     try {
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/delete-detail-property`, {
//         ppcId,
//         phoneNumber
//       });
//       if (response.status === 200) {
//         toast.success('Property removed successfully.');
//         // Remove the property from "All" tab
//         setProperties(properties.filter(property => property.ppcId !== ppcId));
//         // Add the property to "Removed" tab
//         setRemovedProperties(prevState => [...prevState, response.data.property]);
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || 'Error removing property.');
//     }
//   };
  

// const handleUndoRemove = async (ppcId, phoneNumber) => {
//   try {
//     const response = await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete-detail`, {
//       ppcId,
//       phoneNumber,
//     });
//     if (response.status === 200) {
//       toast.success("Property status reverted successfully!");

//       const updatedProperty = response.data.property;

//       // Move property from removedProperties to properties
//       setRemovedProperties(prev => prev.filter(property => property.ppcId !== ppcId));
//       setProperties(prev => [...prev, updatedProperty]);

//       // Switch back to "All" tab after undo
//       setActiveKey('All');
//     }
//   } catch (error) {
//     toast.error("Error undoing property status.");
//   }
// };



//   return (
//     <div style={{ maxWidth: '500px', margin: 'auto' }}>
//       <Tab.Container activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
//         <Row className="g-3">
//           <Col lg={12} className="d-flex flex-column align-items-center">
//             <Nav variant="tabs" className="mb-3" style={{ width: '100%' }}>
//               <Nav.Item style={{ flex: '1' }}>
//                 <Nav.Link eventKey="All" style={{ backgroundColor: '#4F4B7E', color: 'white', textAlign: 'center' }}>All</Nav.Link>
//               </Nav.Item>
//               <Nav.Item style={{ flex: '1' }}>
//                 <Nav.Link eventKey="removed" style={{ backgroundColor: '#FF0000', color: 'white', textAlign: 'center' }}>Removed</Nav.Link>
//               </Nav.Item>
//             </Nav>
//             <Tab.Content>
//               <Tab.Pane eventKey="All">
//                 <SoldOutOwner properties={properties} onRemove={handleRemoveProperty} setProperties={setProperties} />
//               </Tab.Pane>
//               <Tab.Pane eventKey="removed">
//                 <RemovedProperties removedProperties={removedProperties} onUndo={handleUndoRemove} />
//               </Tab.Pane>
//             </Tab.Content>
//           </Col>
//         </Row>
//       </Tab.Container>
//     </div>
//   );
// };

// const SoldOutOwner = ({ properties, onRemove, setProperties }) => {
//   const { phoneNumber } = useParams();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!phoneNumber) {
//       toast.error('Phone number is missing.');
//       setLoading(false);
//       return;
//     }
//     const fetchSoldOutOwnerProperties = async () => {
//       try {
//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-soldOut-owner`, { params: { phoneNumber } });
//         if (response.status === 200) {
//           setProperties(response.data.soldOutRequestsData);
//         } else {
//           toast.error('No properties found with your Need Help Request.');
//         }
//       } catch (error) {
//         toast.error('Error fetching properties.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSoldOutOwnerProperties();
//   }, [phoneNumber, setProperties]);

//   return (
//     <div className="container">
//       <h3 className="text-center">Properties</h3>
//       <div className="row mt-4">
//         {properties.map((property) => (
//          <div className="row g-0" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
//          <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
//          <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
// PUC- {property.ppcId}
// </div>
// <div 
// className="img-container d-flex align-items-center justify-content-center" 
// style={{ width: '100%', height: '100px', overflow: 'hidden' }}
// >
// <img
// src={property.photos && property.photos.length > 0
// ? `http://localhost:5000/${property.photos[0]}`
// : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"}
// className="img-fluid"
// style={{ maxHeight: '100%', width: '100%', objectFit: 'cover' }}
// />
// </div>
// {/* Bottom: Incomplete */}
// <div className="d-flex justify-content-between mt-2 w-100">
// <span className="p-2" style={{ color:'#fff', background:'#2F747F', fontSize:'12px', borderRadius:'10% 75% 30% 10%' }}>
// <FaCamera className="me-1"/> 1
// </span>
// <span className="p-2" style={{ color:'#fff', background:'#2F747F', fontSize:'12px', borderRadius:'75% 20% 30% 10%' }}>
// <FaEye className="me-1" />1
// </span>
// </div>

//          </div>
//          <div className="col-md-8 col-8 p-1">
//           <div className="d-flex justify-content-between"><p className="mb-1 fw-bold">{property.propertyMode || 'N/A'}</p>
//           <button className="mb-1 fw-bold p-1" style={{background:"#FF0000", color:"white", cursor:"pointer"}} onClick={() => onRemove(property.ppcId, property.postedUserPhoneNumber)}>REMOVED</button>
//           </div>
//            <p>{property.propertyType || 'N/A'}</p>
//            <p className="mt-0">{property.city || 'N/A'}</p>
//            <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
//              <div className="row">
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'14px', color:'#555555' }}>{property.totalArea || 'N/A'}</span>
//                </div>
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.bedrooms || 'N/A'}</span>
//                </div>
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.ownership || 'N/A'}</span>
//                </div>
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.bestTimeToCall || 'N/A'}</span>
//                </div>
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <FaRupeeSign className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.price || 'N/A'}</span>
//                </div>
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <p className="m-0" style={{ color:'#2F747F', fontSize:'14px',fontWeight:"bold"}}> Negotiation: <span style={{ color:'#555555' }}>{property.negotiation || 'N/A'}</span></p>
//                </div>
//                {/* Contact Number with Phone Icon */}
//                <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                  <p className="m-0 d-flex align-items-center p-2" style={{ color:'#2F747F', fontSize:'14px', fontWeight:"bold"}}>
//                    Contact:&nbsp;
//                    <span style={{ color:'#555555' }}>
//                      {property.postedUserPhoneNumber || 'N/A'}
//                    </span>
//                    {property.postedUserPhoneNumber && (
//                      <a href={`tel:${property.postedUserPhoneNumber}`} style={{ marginLeft: '8px', color: '#007bff' }}>
//                        <FaPhoneAlt size={16} style={{color:'#2F747F'}} />
//                      </a>
//                    )}
//                  </p>
//                </div>
//               </div>
//             </div>
//           </div>
//        </div>
//         ))}
//       </div>
//     </div>
//   );
// };


// const RemovedProperties = ({ removedProperties, onUndo }) => {
//   return (
//     <div className="container mt-5">
//       <h3 className="text-center mb-4">Removed Properties</h3>
//       <div className="row">
//         {removedProperties.length > 0 ? (
//           removedProperties.map((property) => (
//    <div className="row g-0" style={{ border: '1px solid #ddd', borderRadius: '8px' }}>
//                        <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
//                        <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
//    PUC- {property.ppcId}
//  </div>
//  <div 
//    className="img-container d-flex align-items-center justify-content-center" 
//    style={{ width: '100%', height: '100px', overflow: 'hidden' }}
//  >
//    <img
//      src={property.photos && property.photos.length > 0
//        ? `http://localhost:5000/${property.photos[0]}`
//        : "https://d17r9yv50dox9q.cloudfront.net/car_gallery/default.jpg"}
//      className="img-fluid"
//      style={{ maxHeight: '100%', width: '100%', objectFit: 'cover' }}
//    />
//  </div>
//  {/* Bottom: Incomplete */}
//  <div className="d-flex justify-content-between mt-2 w-100">
//    <span className="p-2" style={{ color:'#fff', background:'#2F747F', fontSize:'12px', borderRadius:'10% 75% 30% 10%' }}>
//      <FaCamera className="me-1"/> 1
//    </span>
//    <span className="p-2" style={{ color:'#fff', background:'#2F747F', fontSize:'12px', borderRadius:'75% 20% 30% 10%' }}>
//      <FaEye className="me-1" />1
//    </span>
//  </div>
 
//                        </div>
//                        <div className="col-md-8 col-8 p-1">
//                         <div className="d-flex justify-content-between"><p className="mb-1 fw-bold">{property.propertyMode || 'N/A'}</p>
//                         <button className="mb-1 fw-bold p-1" style={{background:"green", color:"white", cursor:"pointer"}} onClick={() => onUndo(property.ppcId, property.postedUserPhoneNumber)}>UNDO</button>
//                         </div>
//                          <p>{property.propertyType || 'N/A'}</p>
//                          <p className="mt-0">{property.city || 'N/A'}</p>
//                          <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
//                            <div className="row">
//                              <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'14px', color:'#555555' }}>{property.totalArea || 'N/A'}</span>
//                              </div>
//                              <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.bedrooms || 'N/A'}</span>
//                              </div>
//                              <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.ownership || 'N/A'}</span>
//                              </div>
//                              <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.bestTimeToCall || 'N/A'}</span>
//                              </div>
//                              <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                <FaRupeeSign className="me-2" color="#2F747F"/> <span style={{ fontSize:'14px', color:'#555555' }}>{property.price || 'N/A'}</span>
//                              </div>
//                              <div className="col-6 d-flex align-items-center mt-1 mb-1">
//                                <p className="m-0" style={{ color:'#2F747F', fontSize:'14px',fontWeight:"bold"}}> Negotiation: <span style={{ color:'#555555' }}>{property.negotiation || 'N/A'}</span></p>
//                              </div>
//                             </div>
//                           </div>
//                         </div>
//                      </div>
//           ))
//         ) : (
//           <div className="col-12 text-center">
//             <p>No removed properties found.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;




















import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { 
  FaRupeeSign, FaBed,  
  FaCalendarAlt, FaUserAlt, FaRulerCombined,
  FaCamera,
  FaEye
} from "react-icons/fa";
import myImage from '../../Assets/Rectangle 146.png'; 
import myImage1 from '../../Assets/Rectangle 145.png'; 
import pic from '../../Assets/Default image_PP-01.png'; 
import { MdCall } from 'react-icons/md';

const App = () => {
  const [activeKey, setActiveKey] = useState('All');
  const [removedProperties, setRemovedProperties] = useState([]);
  const [properties, setProperties] = useState([]);

 
  const handleRemoveProperty = async (ppcId, phoneNumber) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/delete-detail-property`, {
        ppcId,
        phoneNumber
      });
      if (response.status === 200) {
        toast.success('Property removed successfully.');
        // Remove the property from "All" tab
        setProperties(properties.filter(property => property.ppcId !== ppcId));
        // Add the property to "Removed" tab
        setRemovedProperties(prevState => [...prevState, response.data.property]);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Error removing property.');
    }
  };
  

const handleUndoRemove = async (ppcId, phoneNumber) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/undo-delete-detail`, {
      ppcId,
      phoneNumber,
    });
    if (response.status === 200) {
      toast.success("Property status reverted successfully!");

      const updatedProperty = response.data.property;

      // Move property from removedProperties to properties
      setRemovedProperties(prev => prev.filter(property => property.ppcId !== ppcId));
      setProperties(prev => [...prev, updatedProperty]);

      // Switch back to "All" tab after undo
      setActiveKey('All');
    }
  } catch (error) {
    toast.error("Error undoing property status.");
  }
};



  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <Tab.Container activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Row className="g-3">
          <Col lg={12} className="d-flex flex-column align-items-center">
            <Nav variant="tabs" className="mb-3" style={{ width: '100%' }}>
              <Nav.Item style={{ flex: '1' }}>
                <Nav.Link eventKey="All" style={{ backgroundColor: '#4F4B7E', color: 'white', textAlign: 'center' }}>All</Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: '1' }}>
                <Nav.Link eventKey="removed" style={{ backgroundColor: '#FF0000', color: 'white', textAlign: 'center' }}>Removed</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="All">
                <SoldOutOwner properties={properties} onRemove={handleRemoveProperty} setProperties={setProperties} />
              </Tab.Pane>
              <Tab.Pane eventKey="removed">
                <RemovedProperties removedProperties={removedProperties} onUndo={handleUndoRemove} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

const SoldOutOwner = ({ properties, onRemove, setProperties }) => {
  const { phoneNumber } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!phoneNumber) {
      toast.error('Phone number is missing.');
      setLoading(false);
      return;
    }
    const fetchSoldOutOwnerProperties = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-soldOut-owner`, { params: { phoneNumber } });
        if (response.status === 200) {
          setProperties(response.data.soldOutRequestsData);
        } else {
          toast.error('No properties found with your Need Help Request.');
        }
      } catch (error) {
        toast.error('Error fetching properties.');
      } finally {
        setLoading(false);
      }
    };
    fetchSoldOutOwnerProperties();
  }, [phoneNumber, setProperties]);

  return (

<div className="container" style={{fontFamily: "Inter, sans-serif",}}>
{/* <h3 className="text-center">Properties</h3> */}
<div className="row mt-4 rounded-4">
  {properties.map((property) => (
   <div className="row g-0 rounded-4" style={{ border: '1px solid #ddd', overflow: "hidden", background:"#EFEFEF" }}>
   <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
   <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
PUC- {property.ppcId}
</div>
<div
style={{
backgroundImage: property.photos && property.photos.length > 0
? `url("http://localhost:5000/${property.photos[0]}")`
: `url("${pic}")`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
width: "100%",
height: "130px", // Adjust height as needed
}}
>
<div style={{ position: "relative", width: "100%", height:'130px'}}>
<div className="d-flex justify-content-between w-100" style={{ position: "absolute",
bottom: "0px"}}>
<span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
<FaCamera className="me-1"/> 1
</span>
<span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage1}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
<FaEye className="me-1" />1
</span>
</div>
</div>
</div>

   </div>
   <div className="col-md-8 col-8 ps-2">
    <div className="d-flex justify-content-between"><p className="m-0" style={{ color:'#5E5E5E' , fontWeight:'normal' }}>{property.propertyMode || 'N/A'}</p>
    <p className="mb-0 ps-3 pe-3 text-center pt-1" style={{background:"#FF0000", color:"white", cursor:"pointer" , borderRadius: '0px 0px 0px 15px', fontSize:"12px"}} onClick={() => onRemove(property.ppcId, property.postedUserPhoneNumber)}>REMOVED</p>
    </div>
     <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
     <p className='m-0' style={{ color:'#5E5E5E'}}>{property.city || 'N/A'}</p>
     <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
       <div className="row">
         <div className="col-6 d-flex align-items-center mt-1 mb-1">
           <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' , fontWeight:'medium' }}>{property.totalArea || 'N/A'}</span>
         </div>
         <div className="col-6 d-flex align-items-center mt-1 mb-1">
           <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bedrooms || 'N/A'}</span>
         </div>
         <div className="col-6 d-flex align-items-center mt-1 mb-1">
           <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.ownership || 'N/A'}</span>
         </div>
         <div className="col-6 d-flex align-items-center mt-1 mb-1">
           <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bestTimeToCall || 'N/A'}</span>
         </div>
       
            <div className="col-12 d-flex flex-col align-items-center mt-1 mb-1">
                         <h6 className="m-0">
                         <span style={{ fontSize:'17px', color:'#2F747F', fontWeight:'bold', letterSpacing:"1px" }}> <FaRupeeSign className="me-2" color="#2F747F"/>{property.price ? property.price.toLocaleString('en-IN') : 'N/A'}
                         </span> 
                         <span style={{ color:'#2F747F', fontSize:'13px', marginLeft:"5px",fontSize:'11px',}}> 
                         Negotiable                </span> 
                           </h6>
                        </div>

                          <p style={{ color: "#2E7480" , margin:"0px"}}>
                                                  <a href={`tel:${property.interestedUser}`} style={{ textDecoration: 'none', color: '#2E7480' }}>
                                                    <MdCall className="me-2" color="#2F747F" /> {property.postedUserPhoneNumber || "N/A"}
                                                  </a>
                                                </p>
        </div>
      </div>
    </div>
    {/* <div className='text-center' style={{border:"2px solid #2F747F"}}>Photo Request</div> */}
 </div>
  ))}
</div>
</div>
  );
};


const RemovedProperties = ({ removedProperties, onUndo }) => {
  return (

<div className="container mt-5">
<h3 className="text-center mb-4">Removed Properties</h3>
<div className="row">
  {removedProperties.length > 0 ? (
    removedProperties.map((property) => (
<div className="row g-0 rounded-4" style={{ border: '1px solid #ddd', overflow: "hidden", background:"#EFEFEF"}}>
                 <div className="col-md-4 col-4 d-flex flex-column justify-content-between align-items-center">
                 <div className="text-white py-1 px-2 text-center" style={{ width: '100%', background: "#2F747F" }}>
PUC- {property.ppcId}
</div>

<div
style={{
backgroundImage: property.photos && property.photos.length > 0
? `url("http://localhost:5000/${property.photos[0]}")`
: `url("${pic}")`,
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
width: "100%",
height: "180px", // Adjust height as needed
}}
>
<div style={{ position: "relative", width: "100%", height:'180px'}}>
<div className="d-flex justify-content-between w-100" style={{ position: "absolute",
bottom: "0px"}}>
<span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
<FaCamera className="me-1"/> 1
</span>
<span className="d-flex justify-content-center align-items-center" style={{ color:'#fff', background:`url(${myImage1}) no-repeat center center`, fontSize:'12px', width:'50px' }}>
<FaEye className="me-1" />1
</span>
</div>
</div>
</div>



                 </div>
                 <div className="col-md-8 col-8 p-0">
                  <div className="d-flex justify-content-between"><p className="mb-1 fw-bold" style={{ color:'#5E5E5E' }}>{property.propertyMode || 'N/A'}</p>
                  <p className="m-0 ps-3 pe-3" style={{background:"green", color:"white", cursor:"pointer", borderRadius: '0px 0px 0px 15px'}} onClick={() => onUndo(property.ppcId, property.postedUserPhoneNumber)}>UNDO</p>
                  </div>
                   <p className="fw-bold m-0" style={{ color:'#000000' }}>{property.propertyType || 'N/A'}</p>
                   <p className=" fw-bold" style={{ color:'#5E5E5E'}}>{property.city || 'N/A'}</p>
                   <div className="card-body ps-2 m-0 pt-0 pe-2 d-flex flex-column justify-content-center">
                     <div className="row">
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaRulerCombined className="me-2" color="#2F747F" /> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.totalArea || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaBed className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bedrooms || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaUserAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.ownership || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaCalendarAlt className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#5E5E5E' }}>{property.bestTimeToCall || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <FaRupeeSign className="me-2" color="#2F747F"/> <span style={{ fontSize:'13px', color:'#2E7480' }}>{property.price || 'N/A'}</span>
                       </div>
                       <div className="col-6 d-flex align-items-center mt-1 mb-1">
                         <p className="m-0" style={{ color:'#2F747F', fontSize:'13px',fontWeight:"bold"}}> Negotiation: <span style={{ color:'#5E5E5E' }}>{property.negotiation || 'N/A'}</span></p>
                       </div>
                      </div>
                    </div>
                  </div>
               </div>
    ))
  ) : (
    <div className="col-12 text-center">
      <p>No removed properties found.</p>
    </div>
  )}
</div>
</div>
  );
};

export default App;

