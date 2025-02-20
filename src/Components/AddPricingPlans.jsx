


import React, { useState, useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AddPricingPlans() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve phone number from state or local storage
  const phoneNumber = location.state?.phoneNumber || localStorage.getItem("phoneNumber");

  const [hoverIndex, setHoverIndex] = useState(null);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    if (!phoneNumber) {
      toast.error("Phone number is missing.");
    }
    fetchActivePlans();
  }, [phoneNumber]);

  const fetchActivePlans = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/active-plans`);
      setCardData(response.data);
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

    const planData = { ...card, phoneNumber };
    setLoadingIndex(index);

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/register-plan`, planData);
      if (response.status === 201) {
        toast.success('Plan added successfully!');
        navigate('/my-plan', { state: { phoneNumber, planData: response.data.newPlan } });
      }
    } catch (error) {
      toast.error('Error adding plan. Please try again.');
    } finally {
      setLoadingIndex(null);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <ToastContainer />
      <div className="text-center mb-5">
        <h2 className="display-5">Pricing Plans</h2>
        <p className="lead">Choose a pricing plan that suits you best</p>
      </div>
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div key={index} className="col-12 d-flex justify-content-center mb-4">
            <div 
              className="card shadow-lg" 
              style={{
                width: '100%',
                backgroundColor: hoverIndex === index ? '#D4EEFF' : 'white',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title"><strong>{card.name}</strong></h4>
                  <FaRegCheckCircle style={{ color: 'green', fontSize: '40px' }} />
                </div>
                <h5 className="card-subtitle mb-3 text-muted">{card.packageType}</h5>
                <h3 className="display-4 mb-4">₹ {card.price}</h3>
                <p className="text-muted">{card.durationDays} Days / {card.numOfCars} Car{card.numOfCars > 1 ? 's' : ''}</p>
                <h3 className="display-4 mb-4">{card.featuredAds} FEATURED ADS</h3>
                <p className="card-subtitle mb-3 text-muted">{card.description}</p>
                <div className="d-flex justify-content-center">
                  <button 
                    className="btn p-3" 
                    style={{background:'#4F4B7E', color:'#fff', borderRadius:'58px'}}
                    onClick={() => handleButtonClick(card, index)} 
                    disabled={loadingIndex === index} 
                  >
                    {loadingIndex === index ? 'Posting...' : 'Post Ad'}
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
