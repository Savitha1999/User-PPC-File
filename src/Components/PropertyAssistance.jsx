// import React from 'react'

// export default function PropertyAssistance() {
//   return (
//     <div>PropertyAssistance</div>
//   )
// }


import React, { useState } from "react";
import { FaChevronDown, FaTimes, FaPhone, FaRupeeSign , FaRegBuilding , FaCity} from "react-icons/fa";
import { MdOutlineBedroomParent, MdLocationCity, MdOutlineDescription , MdApproval} from "react-icons/md";
import { BsBank } from "react-icons/bs";
import { RiLayoutLine } from "react-icons/ri";
import { TbArrowLeftRight } from "react-icons/tb";

import imge from '../Assets/ppbuyer.png'


const PropertyForm = () => {
  const [formData, setFormData] = useState({
    loanInput: "",
    minPrice: "",
    maxPrice: "",
    phoneNumber: "",
    altPhoneNumber: "",
    propertyMode: "",
    propertyType: "",
    areaUnit: "",
    noOfBHK: "",
    facing: "",
    propertyApproved: "",
    state: "",
    city: "",
    area: "",
    paymentType: "",
    description: "",
  });

  const [dropdownOptions, setDropdownOptions] = useState({
      loanInput: ["Yes", "No"],
    minPrice: ["10,000", "20,000", "50,000", "1,00,000"],
    maxPrice: ["50,000", "1,00,000", "5,00,000", "10,00,000"],
    propertyMode: ["Buy", "Rent"],
    propertyType: ["Apartment", "Villa", "Plot"],
    areaUnit: ["Sq Ft", "Sq Yards", "Acres"],
    noOfBHK: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"],
    facing: ["North", "South", "East", "West"],
    propertyApproved: ["Yes", "No"],
    paymentType: ["Cash", "Loan", "Installments"],
    state: ["California", "Texas", "New York"],
    city: ["Los Angeles", "Houston", "New York City"],
    area: ["Downtown", "Suburbs", "Countryside"],
  });

  const [dropdownState, setDropdownState] = useState({
    activeDropdown: null,
    filterText: "",
  });

  const toggleDropdown = (field) => {
    setDropdownState((prevState) => ({
      activeDropdown: prevState.activeDropdown === field ? null : field,
      filterText: "",
    }));
  };

  const handleDropdownSelect = (field, value) => {
    setFormData((prevState) => ({ ...prevState, [field]: value }));
    setDropdownState({ activeDropdown: null, filterText: "" });
  };

  const handleFilterChange = (e) => {
    setDropdownState((prevState) => ({ ...prevState, filterText: e.target.value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedData = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value || "Not Provided"}`)
      .join("\n");

    alert(`Form Submitted:\n\n${formattedData}`);
  };

  const renderDropdown = (field) => {
    const options = dropdownOptions[field] || [];
    const filteredOptions = options.filter((option) =>
      option.toLowerCase().includes(dropdownState.filterText.toLowerCase())
    );

    return (
      dropdownState.activeDropdown === field && (
        <div
          className="dropdown-popup"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            width: "100%",
            maxWidth: "400px",
            padding: "10px",
            zIndex: 10,
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflowY: "auto",
            maxHeight: "50vh",
            animation: "popupOpen 0.3s ease-in-out",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Filter options..."
              value={dropdownState.filterText}
              onChange={handleFilterChange}
              style={{
                width: "80%",
                padding: "5px",
                marginBottom: "10px",
              }}
            />
            <button
              type="button"
              onClick={() => toggleDropdown(field)}
              style={{ cursor: "pointer", border: "none", background: "none" }}
            >
              <FaTimes size={18} color="red" />
            </button>
          </div>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
            }}
          >
            {filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleDropdownSelect(field, option)}
                style={{
                  padding: "5px",
                  cursor: "pointer",
                  backgroundColor: "#f9f9f9",
                  marginBottom: "5px",
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };

  const fieldIcons = {
    minPrice: <FaRupeeSign color="#2F747F"/>,
    maxPrice: <FaRupeeSign color="#2F747F"/>,
    phoneNumber: <FaPhone color="#2F747F"/>,
    altPhoneNumber: <FaPhone color="#2F747F"/>,
    propertyMode: <MdApproval color="#2F747F"/>,
    propertyType: <FaRegBuilding color="#2F747F"/>,
    areaUnit: <FaRupeeSign color="#2F747F"/>,
    noOfBHK: <MdOutlineBedroomParent color="#2F747F"/>,
    facing: <TbArrowLeftRight color="#2F747F"/>,
    propertyApproved: <FaRupeeSign color="#2F747F"/>,
    loanInput: <BsBank color="#2F747F"/>,
    state: <MdLocationCity color="#2F747F"/>,
    city: <FaCity color="#2F747F"/>,
    area: <RiLayoutLine color="#2F747F"/>,
    paymentType: <FaRupeeSign color="#2F747F"/>,
    description: <MdOutlineDescription color="#2F747F"/>,
  };

  return (
    <div style={{ maxHeight: '70vh',
      overflowY: 'scroll',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none', 
      width:"450px"}}>
        <img src={imge} alt="" style={{width:'100%'}}/>

      <h5 className="mt-2" style={{color:"#2F747F"}}>Budget</h5>
      <form onSubmit={handleSubmit}>
        {Object.keys(fieldIcons).map((field) => (
          <div key={field} style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              {field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, " $1")}:
            </label>
            {field === "phoneNumber" || field === "altPhoneNumber" ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                {fieldIcons[field]}{" "}
                <input
                  type="tel"
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginLeft: "10px",
                  }}
                  placeholder={`Enter ${field}`}
                />
              </div>
            ) : field === "description" ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                {fieldIcons[field]}{" "}
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  onInput={(e) => {
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginLeft: "10px",
                    resize: "none",
                    overflow: "hidden",
                    boxSizing: "border-box",
                  }}
                  placeholder="Enter description..."
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={() => toggleDropdown(field)}
                style={{
                  padding: "10px",
                  width: "100%",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background:'#ffffff',
                  borderRight:"none",
                  borderLeft:'none',
                  borderTop:"none",
                  borderBottom:"1px solid #2F747F"
                }}
              >
                {fieldIcons[field]}{" "}
                <span style={{ marginLeft: "10px" }}>
                  {formData[field] || `Select ${field}`}
                </span>
                <FaChevronDown color="#2F747F"/>
              </button>
            )}
            {renderDropdown(field)}
          </div>
        ))}

        <button type="submit" style={{ padding: "10px 20px", cursor: "pointer", background:"#6CBAAF", border:'none', color:'#ffffff'}}>
          ADD PROPERTY ASSISTANCE
        </button>
      </form>
         {/* Popup animation */}
         <style>{`
        @keyframes popupOpen {
          from {
            opacity: 0;
            transform: translate(-50%, -60%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        /* Custom scrollbar */
        .dropdown-popup::-webkit-scrollbar {
          width: 0;
        }
      `}</style>
    </div>
  );
};

export default PropertyForm;
