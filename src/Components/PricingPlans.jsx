import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowLeft, FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function PricingPlans({phoneNumber}) {
  const location = useLocation();
  // const phoneNumber = location.state?.phoneNumber;

  const [hoverIndex, setHoverIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null); // Track loading state for each button
  const [cardData, setCardData] = useState([]); // State to hold the fetched plan data

  const navigate = useNavigate();  // This should not conflict with any other variables

  useEffect(() => {
    fetchActivePlans();
  }, []);

  const fetchActivePlans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/active-plans`);
      console.log(`${process.env.REACT_APP_API_URL}/register-plan`);

      setCardData(response.data); // Update state with the fetched plans
    } catch (error) {
      console.error('Error fetching active plans', error);
      toast.error('Error fetching active plans.');
    }
  };




  const handleButtonClick = async (card, index) => {
    if (!phoneNumber) {
      toast.error('Phone number is missing.');
      return;
    }

    const planData = {
      name: card.name,
      packageType: card.packageType,
      unlimitedAds: card.unlimitedAds,
      price: card.price,
      durationDays: card.durationDays,
      numOfCars: card.numOfCars,
      featuredAds: card.featuredAds,
      description: card.description,
      phoneNumber
    };

    setLoadingIndex(index); 

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register-plan`, planData);

      if (response.status === 201) {
        // toast.success('Plan added successfully!');
        
        // navigate('/my-plan', {
        //   state: { phoneNumber: phoneNumber, planData: response.data.newPlan },
        // });
      }
    } catch (error) {
      if (error.response) {
        // toast.error(error.response.data.message || 'Error adding plan.');
      } else if (error.request) {
        // toast.error('No response received from the server.');
      } else {
        // toast.error('Error adding plan. Please try again.');
      }
    } finally {
      setLoadingIndex(null); // Reset loading state after the request completes
    }
  };



  
  return (
    <div className="container my-5" style={{ maxWidth: '500px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
      <ToastContainer />
      {/* Heading Section */}
      <div className="text-center mb-5">
       
        <h2 className="display-5">Pricing Plans</h2>
        <p className="lead">It's very Simple to choose pricing & Plan</p>
      </div>

      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 d-flex justify-content-center mb-4">
            <div 
              className="card shadow-lg" 
              style={{
                width: '100%', // Ensures the card takes full width of the container
                backgroundColor: hoverIndex === index ? '#D4EEFF' : 'white', // Change color only for the hovered card
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={() => setHoverIndex(index)} // Set hover to the current card index
              onMouseLeave={() => setHoverIndex(null)} // Reset hover when mouse leaves
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title text-start"><strong>{card.name}</strong></h4>
                  <FaRegCheckCircle style={{ color: 'green', fontSize: '40px' }} />
                </div>
                <h5 className="card-subtitle mb-3 text-muted text-start">{card.packageType}</h5>
                <h5 className="card-subtitle mb-3 text-muted text-start">UNLIMITED car ads</h5>

                <h3 className="display-4 mb-4 text-start" style={{ fontSize: '3rem' }}>₹ {card.price}</h3>
                <p className="text-muted text-start" style={{ fontSize: '1.25rem' }}>{card.durationDays} Days / {card.numOfCars} Car{card.numOfCars > 1 ? 's' : ''}</p>
                <h3 className="display-4 mb-4 text-start">{card.featuredAds} FEATURED ADS</h3>
                <p className="card-subtitle mb-3 text-muted text-start">{card.description}</p>

                <div className="d-flex justify-content-center">
                  <button 
                    className="btn p-3" 
                    style={{background:'#4F4B7E', color:'#fff', borderRadius:'58px'}}
                    onClick={() => handleButtonClick(card, index)} 
                    disabled={loadingIndex === index} 
                  >
                    {loadingIndex === index ? 'Posting...' : 'Post Add'} {/* Show loading text */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



