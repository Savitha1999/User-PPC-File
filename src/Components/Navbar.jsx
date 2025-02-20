








import React, { useState, useEffect, useRef } from 'react';
import { FaHome, FaBuilding, FaLightbulb, FaUserCircle, FaRocket, FaCogs, FaPhone, FaInfoCircle, FaRegAddressCard, FaShare, FaStar, FaShieldAlt, FaUsers, FaEnvelope, FaRegBell } from 'react-icons/fa';
import logo from "../Assets/ppc logo.jpg";
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const SidebarApp = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { phoneNumber: statePhoneNumber, countryCode: stateCountryCode } = location.state || {};
  const storedPhoneNumber = localStorage.getItem('phoneNumber');
  const storedCountryCode = localStorage.getItem('countryCode');

  const phoneNumber = statePhoneNumber || storedPhoneNumber;
  const countryCode = stateCountryCode || storedCountryCode;

  const fullPhoneNumber = `${countryCode}${phoneNumber}`;

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  useEffect(() => {
    if (phoneNumber && countryCode) {
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('countryCode', countryCode);
    } else {
      toast.error('Missing required information.');
    }
  }, [phoneNumber, countryCode]);

  const handleLinkClick = (path) => {
    navigate(path, { state: { phoneNumber: fullPhoneNumber } });
    closeSidebar();
  };

  return (
    <div className="d-flex" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`position-fixed bg-light border-end ${isSidebarOpen ? 'd-block' : 'd-none'}`}
        style={{
          width: '300px',
          height: '100vh',
          overflowY: 'auto',
          transition: 'left 0.3s ease',
          zIndex: 2000,
        }}
      >
        <button
          className="btn btn-close position-absolute top-0 end-0 m-2"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        ></button>
        <ul className="nav flex-column p-0">
          <li style={{ background: '#30747F' }}>
            <div className="d-flex align-items-center p-2">
              <img
                src={logo}
                alt=""
                style={{ height: '80px', width: '80px' }}
                className="mb-2 mb-md-0 rounded-4"
              />
              <div className="ml-md-3 ml-2" style={{ marginLeft: '5px' }}>
                <h6 style={{ color: 'white' }}>Pondy Property</h6>
                <p style={{ color: 'white', fontSize: '13px' }}>
                  Buy and sell your Property in Pondicherry
                </p>
              </div>
            </div>
          </li>
          {/* Phone number in sidebar */}
          {phoneNumber && (
            <li className="nav-item">
              <a
                className="nav-link"
                style={{ color: 'black' }}
                href="/mobileviews"
                onClick={() => handleLinkClick("/mobileviews")}
              >
                <FaPhone className="me-2" style={{ color: '#30747F' }} />
                {fullPhoneNumber}
              </a>
            </li>
          )}
          {/* Sidebar links */}
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/mobileviews"
              onClick={() => handleLinkClick("/mobileviews")}
            >
              <FaHome className="me-2" style={{ color: '#30747F' }} /> Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/my-property"
              onClick={() => handleLinkClick("/my-property")}
            >
              <FaBuilding className="me-2" style={{ color: '#30747F' }} /> My Property
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/my-plan"
              onClick={() => handleLinkClick(`/my-plan/${phoneNumber}`)}
            >
              <FaLightbulb className="me-2" style={{ color: '#30747F' }} /> My Plan
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/my-profile"
              onClick={() => handleLinkClick("/my-profile")}
            >
              <FaUserCircle className="me-2" style={{ color: '#30747F' }} /> My Profile
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/plans"
              onClick={() => handleLinkClick("/plans")}
            >
              <FaRocket className="me-2" style={{ color: '#30747F' }} /> Upgrade Membership
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/mobileviews"
              onClick={() => handleLinkClick("/mobileviews")}
            >
              <FaCogs className="me-2" style={{ color: '#30747F' }} /> More
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/contact-us"
              onClick={() => handleLinkClick("/contact-us")}
            >
              <FaPhone className="me-2" style={{ color: '#30747F' }} /> Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/about-mobile"
              onClick={() => handleLinkClick("/about-mobile")}
            >
              <FaInfoCircle className="me-2" style={{ color: '#30747F' }} /> About Us
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/refund-mobile"
              onClick={() => handleLinkClick("/refund-mobile")}
            >
              <FaInfoCircle className="me-2" style={{ color: '#30747F' }} /> Refund Policy
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/mobileviews"
              onClick={() => handleLinkClick("/mobileviews")}
            >
              <FaRegAddressCard className="me-2" style={{ color: '#30747F' }} /> More App
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/mobileviews"
              onClick={() => handleLinkClick("/mobileviews")}
            >
              <FaShare className="me-2" style={{ color: '#30747F' }} /> Share App
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/mobileviews"
              onClick={() => handleLinkClick("/mobileviews")}
            >
              <FaStar className="me-2" style={{ color: '#30747F' }} /> Rate App
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/business"
              onClick={() => handleLinkClick("/business")}
            >
              <FaShieldAlt className="me-2" style={{ color: '#30747F' }} /> Business Opportunity
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/our-support"
              onClick={() => handleLinkClick("/our-support")}
            >
              <FaUsers className="me-2" style={{ color: '#30747F' }} /> Our Support
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{ color: 'black' }}
              href="/mobileviews"
              onClick={() => handleLinkClick("/mobileviews")}
            >
              <FaEnvelope className="me-2" style={{ color: '#30747F' }} /> Login
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Navbar */}
        <nav
          className="navbar navbar-light bg-light d-flex align-items-center justify-content-between px-3"
          style={{ width: '100%', height: '60px' }}
        >
          <button className="btn" onClick={toggleSidebar}>
            ☰
          </button>
          <span className="navbar-brand mb-0 text-center mx-auto">Pondy Property</span>
          <button className="btn border-0" style={{ fontWeight: 'bold' }}>
            <FaRegBell color="#30747F" size={24} />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default SidebarApp;







