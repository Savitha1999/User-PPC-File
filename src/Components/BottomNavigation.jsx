import React, { useState } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import './BottomNavigation.css'

const BottomNavigation = ({ items, setActive, activeItem }) => { 
    const [activeIndex, setActiveIndex] = useState(0);
  
    // const handleItemClick = (index) => {
    //   setActiveIndex(index);
    // };

    const handleItemClick = (index, item) => {
      setActiveIndex(index);
      if (item?.handler) { // Safely check if item and item.handler exist
          item.handler(); // Call the custom handler if it exists
      }
  };
  return (
 
<div className="navigation container p-0" style={{ "--active-index": activeIndex }}>
<ul className="nav flex-row w-100 justify-content-around align-items-center mb-0">
{items.map((item, index) => (
      <li
        key={index}
        className={`list ${activeItem === item.content || index === activeIndex ? "active" : ""}`}
        onClick={() => {
          setActive(item.content); // Set active item using `content`
          handleItemClick(index , item); // Handle click based on index
        }}
      >
        <a className="nav-link text-center d-flex flex-column align-items-center">
        <span className="icon">
          <span className="ion-icon">{item.icon}</span>
          </span>
          <span className="text">{item.text}</span>
        </a>
      </li>
    ))}
    <div className="indicator"></div>
  </ul>
  </div>

  );
};

export default BottomNavigation;
