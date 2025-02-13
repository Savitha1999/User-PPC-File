


import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { 
  FaFilter, FaHome, FaCity, FaRupeeSign, FaBed, FaCheck, FaTimes, 
  FaTools, FaIdCard, FaCalendarAlt, FaUserAlt, FaRulerCombined, FaBath, 
  FaBuilding, FaCar, FaRegBuilding, FaHandshake, FaToilet, 
  FaCamera,
  FaEye
} from "react-icons/fa";
import { MdElevator } from "react-icons/md";
import { TbArrowLeftRight } from "react-icons/tb";
import { BsBuildingsFill } from "react-icons/bs";
import { AiOutlineColumnWidth, AiOutlineColumnHeight } from "react-icons/ai";
import { RiLayoutLine } from "react-icons/ri";
import { MdApproval, MdOutlineBalcony, MdOutlineChair } from "react-icons/md";
import { BsBank, BsGraphUp } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { BiCube, BiSearchAlt } from "react-icons/bi";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaKitchenSet } from "react-icons/fa6";
import myImage from '../Assets/Rectangle 146.png'; 
import myImage1 from '../Assets/Rectangle 145.png';
import pic from '../Assets/Default image_PP-01.png'; 
// import pic from '../Assets/Mask Group 3@2x.png'; // Correct path
import { ToWords } from 'to-words';

const PropertyCards = ({phoneNumber}) => {
  const [properties, setProperties] = useState([]);
  // const [filters, setFilters] = useState({ id: '', price: '', propertyMode: '', city: '' });
  const [filters, setFilters] = useState({ 
    id: '', 
    minPrice: '', 
    maxPrice: '', 
    propertyMode: '', 
    city: '' 
  });
  
  const [imageCounts, setImageCounts] = useState({}); // Store image count for each property


  const [advancedFilters, setAdvancedFilters] = useState({
    propertyMode: '', propertyType: '', minPrice: '', maxPrice: '', propertyAge: '', bankLoan: '',
    negotiation: '', length: '', breadth: '', totalArea: '', ownership: '', bedrooms: '',
    kitchen: '', kitchenType: '', balconies: '', floorNo: '', areaUnit: '', propertyApproved: '',
    facing: '', salesMode: '', salesType: '', furnished: '', lift: '', attachedBathrooms: '',
    western: '', numberOfFloors: '', carParking: '', city: ''
  });
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [isAdvancedPopupOpen, setIsAdvancedPopupOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     try {
  //       const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-all-data`);
  //       setProperties(response.data.users);
  //     } catch (error) {
  //       console.error("Error fetching properties:", error);
  //     }
  //   };
  //   fetchProperties();
  // }, []);

    // Fetch image count for a specific property
    const fetchImageCount = async (ppcId) => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/uploads-count`, {
          params: { ppcId },
        });
        return response.data.uploadedImagesCount || 0;
      } catch (error) {
        console.error(`Error fetching image count for property ${ppcId}:`, error);
        return 0;
      }
    };
  
    // Fetch image counts for all properties
    useEffect(() => {
      const fetchAllImageCounts = async () => {
        const counts = {};
        await Promise.all(
          properties.map(async (property) => {
            const count = await fetchImageCount(property.ppcId);
            counts[property.ppcId] = count;
          })
        );
        setImageCounts(counts);
      };
  
      if (properties.length > 0) {
        fetchAllImageCounts();
      }
    }, [properties]);
  



  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fetch-active-users`);
        const allProperties = response.data.users;

        // Filter properties where all required fields have values (not N/A or empty)
        const filteredProperties = allProperties.filter(property => 
          property.propertyMode &&
          property.propertyType &&
          property.propertyMode !== "N/A" &&
          property.propertyType !== "N/A" 
        );

        setProperties(filteredProperties);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleAdvancedFilterChange = (e) => {
    const { name, value } = e.target;
    setAdvancedFilters({ ...advancedFilters, [name]: value });
  };


  const filteredProperties = properties.filter((property) => { 
    const basicFilterMatch = 
      (filters.id ? property.ppcId?.toString().includes(filters.id) : true) &&
      (filters.propertyMode ? property.propertyMode?.toLowerCase().includes(filters.propertyMode.toLowerCase()) : true) &&
      (filters.city ? property.city?.toLowerCase().includes(filters.city.toLowerCase()) : true);
  
    const priceMatch = 
      (filters.minPrice ? property.price >= Number(filters.minPrice) : true) &&
      (filters.maxPrice ? property.price <= Number(filters.maxPrice) : true);
  
    const advancedFilterMatch = Object.keys(advancedFilters).every((key) => {
      if (!advancedFilters[key]) return true;
  
      if (key === "minPrice") {
        return property.price >= Number(advancedFilters[key]);
      }
      if (key === "maxPrice") {
        return property.price <= Number(advancedFilters[key]);
      }
  
      return property[key]?.toString()?.toLowerCase()?.includes(advancedFilters[key]?.toLowerCase());
    });
  
    return basicFilterMatch && priceMatch && advancedFilterMatch;
  });
  

  const handleCardClick = (ppcId, phoneNumber) => {
    navigate("/detail", { state: { ppcId, phoneNumber } });
  };
  // const formattedPrice = new Intl.NumberFormat('en-IN').format(property.price); // Indian-style number format
  return (
    <Container fluid className="p-3">
      <Helmet>
        <title>Pondy Property | Properties</title>
      </Helmet>
      <Row className="g-3">
        <Col lg={12} className="d-flex align-items-center justify-content-center">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
              height: '50px', width: '50px', background: '#2F747F', borderRadius: '50%',
              position: 'fixed', right: '38%', bottom: '15%', zIndex: '1',
            }}
            onClick={() => setIsFilterPopupOpen(true)}
          >
            <BiSearchAlt fontSize={24} color="#fff" />
          </div>

          <div style={{ width: '100%' }}>
            <div style={{ maxHeight: '70vh', overflowY: 'scroll', scrollbarWidth: 'none', fontFamily:"Inter, sans-serif" }}>
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div 
                    key={property._id}
                    className="card mb-3 shadow rounded-4"
                    style={{ width: '100%', minWidth: '400px', height: 'auto', background: '#F9F9F9', overflow:'hidden' }}
                    onClick={() => handleCardClick(property.ppcId, phoneNumber)}
                  >
                     <div className="row g-0 ">
         <div className="col-md-4 col-4 d-flex flex-column align-items-center">
       
 <div style={{ position: "relative", width: "100%", height: "170px" }}>
    {/* Image */}
    <img
 src={
  property.photos && property.photos.length > 0
    ? `http://localhost:5000/${property.photos[0]}`
    : pic // Use the imported local image if no photos are available
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
        <FaCamera className="me-1" size={13}/>  <span style={{fontSize:"11px"}}>{imageCounts[property.ppcId] || 0}</span>
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
        <FaEye className="me-1" size={15} /> <span style={{fontSize:"11px"}}> {property.views}  </span>
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
                <span style={{ color:'#2F747F', fontSize:'13px', marginLeft:"5px",fontSize:'11px',}}> 
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
                <p>No properties found.</p>
              )}
            </div>
          </div>
        </Col>
      </Row>

      {/* Basic Filters Popup */}
     {isFilterPopupOpen && (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '400px',
      maxHeight: '100vh',
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      background: '#fff',
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      zIndex: 2,
    }}
  >
    <style>
      {`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

    <h4>
      <FaFilter className="me-2" /> Filter Properties
    </h4>
    <div>
      <div className="input-group mb-2">
        <span className="input-group-text"><FaIdCard /></span>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={filters.id}
          onChange={handleFilterChange}
          className="form-control"
        />
      </div>

      <div className="input-group mb-2">
  <span className="input-group-text"><FaRupeeSign /></span>
  <input
    type="text"
    name="minPrice"
    placeholder="Min Price"
    value={filters.minPrice}
    onChange={handleFilterChange}
    className="form-control"
  />
</div>
<div className="input-group mb-2">
  <span className="input-group-text"><FaRupeeSign /></span>
  <input
    type="text"
    name="maxPrice"
    placeholder="Max Price"
    value={filters.maxPrice}
    onChange={handleFilterChange}
    className="form-control"
  />
</div>

      <div className="input-group mb-2">
        <span className="input-group-text"><FaHome /></span>
        <input
          type="text"
          name="propertyMode"
          placeholder="Property Mode"
          value={filters.propertyMode}
          onChange={handleFilterChange}
          className="form-control"
        />
      </div>
      <div className="input-group mb-2">
        <span className="input-group-text"><FaCity /></span>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={filters.city}
          onChange={handleFilterChange}
          className="form-control"
        />
      </div>
      <button
      style={{background:"#F01963", color:'#fff', border:'0'}}
        className="btn me-2 rounded-0 w-30"
        onClick={() => setIsFilterPopupOpen(false)}
      >
        <FaCheck className="me-1" /> Apply Filters
      </button>
      <button
        className="btn rounded-0 w-30" style={{background:"#FF9D3C", color:'#fff', border:'0'}}
        onClick={() => {
          setIsFilterPopupOpen(false);
          setIsAdvancedPopupOpen(true);
        }}
      >
        <FaTools className="me-1" /> Advanced Filters
      </button>
      <button
        className="btn rounded-0 mt-1 w-30" style={{background:"black", color:"#ffffff"}}
        onClick={() => setIsFilterPopupOpen(false)}
      >
        <FaTimes className="me-1" /> Cancel
      </button>
      
    </div>
  </div>
)}


      {/* Advanced Filters Popup */}
      {isAdvancedPopupOpen && (
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      maxHeight: '100vh',
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      background: '#fff',
      padding: '20px',
      boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      zIndex: 2,
    }}
  >
    <style>
      {`
        ::-webkit-scrollbar {
          display: none;
        }
      `}
    </style>

    {/* Close Button */}
    <button
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer',
      }}
      onClick={() => setIsAdvancedPopupOpen(false)}
    >
      &times;
    </button>

    <h4>
      <FaTools className="me-2" /> Advanced Filters
    </h4>
    <div>
      {Object.keys(advancedFilters).map((field) => (
        <div className="input-group mb-2" key={field}>
          <span className="input-group-text">
            {/* Add dynamic icons based on field names */}
            {field === 'propertyMode' && <FaBuilding color="#2F747F"/>}
            {field === 'city' && <FaCity color="#2F747F"/>}
            {field === 'price' && <FaRupeeSign color="#2F747F"/>}
            {field === 'propertyType' && <FaRegBuilding color="#2F747F"/>}
            {field === 'minPrice' && <FaRupeeSign color="#2F747F"/>}
            {field === 'maxPrice' && <FaRupeeSign color="#2F747F"/>}
            {field === 'propertyAge' && <FaCalendarAlt color="#2F747F"/>}
            {field === 'bankLoan' && <BsBank color="#2F747F"/>}
            {field === 'negotiation' && <FaHandshake color="#2F747F"/>}
            {field === 'length' && <AiOutlineColumnWidth color="#2F747F"/>}
            {field === 'breadth' && <AiOutlineColumnHeight color="#2F747F"/>}
            {field === 'totalArea' && <RiLayoutLine color="#2F747F"/>}
            {field === 'ownership' && <FaUserAlt color="#2F747F"/>}
            {field === 'kitchen' && <FaKitchenSet color="#2F747F"/>}
            {field === 'kitchenType' && <FaKitchenSet color="#2F747F"/>}
            {field === 'balconies' && <MdOutlineBalcony  color="#2F747F"/>}
            {field === 'floorNo' && <BiCube color="#2F747F"/>}
            {field === 'areaUnit' && <FaRegBuilding />}
            {field === 'propertyApproved' && <MdApproval color="#2F747F"/>}
            {field === 'facing' && <TbArrowLeftRight color="#2F747F"/>}
            {field === 'lift' && <MdElevator color="#2F747F"/>}
            {field === 'salesType' && <BsGraphUp color="#2F747F"/>}
            {field === 'attachedBathrooms' && <FaBath color="#2F747F"/>}
            {field === 'western' && <FaToilet  color="#2F747F"/>}
            {field === 'numberOfFloors' && <BsBuildingsFill color="#2F747F"/>}
            {field === 'carParking' && <FaCar color="#2F747F"/>}
            {field === 'bedrooms' && <FaBed color="#2F747F"/>}
            {field === 'furnished' && <MdOutlineChair color="#2F747F"/>}
            {field === 'salesMode' && <BsGraphUp color="#2F747F"/>}

            {/* Default icon */}
            {/* {!(field in { propertyMode: 1, city: 1, price: 1, bedrooms: 1 }) && <FaFilter />} */}
          </span>
          <input
            type="text"
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={advancedFilters[field]}
            onChange={handleAdvancedFilterChange}
            className="form-control"
          />
        </div>
      ))}
      <button
            style={{background:"#F01963", color:'#fff', border:'0'}}

        className="btn btn-primary mb-2 w-100"
        onClick={() => setIsAdvancedPopupOpen(false)}
      >
        <FaCheck className="me-1" /> Apply Filters
      </button>
      <button
        className="btn w-100" style={{background:"black", color:'#ffffff'}}
        onClick={() => setIsAdvancedPopupOpen(false)}
      >
        <FaTimes className="me-1" /> Cancel
      </button>
    </div>
  </div>
)}

    </Container>
  );
};

export default PropertyCards;








