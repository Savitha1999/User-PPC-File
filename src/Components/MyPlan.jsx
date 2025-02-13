import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Plans from './PricingPlans';  // ✅ Import the Plans component

export default function MyPlan() {
  const location = useLocation();
  const { phoneNumber } = location.state || {};
  
  const [fetchedPlan, setFetchedPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPlans, setShowPlans] = useState(false);  // ✅ Track if we should show the Plans component

  useEffect(() => {
    if (phoneNumber) {
      setLoading(true);
      axios.get(`${process.env.REACT_APP_API_URL}/get-new-plan`, {
        params: { phoneNumber }
      })
        .then((response) => {
          if (response.data && response.data.plan) {
            setFetchedPlan(response.data.plan);
          } else {
            toast.error('No plan found for this phone number.');
          }
        })
        .catch((error) => {
          toast.error('Error fetching plan data.');
          console.error('Error fetching plan:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [phoneNumber]);

  // ✅ Toggle state to show the Plans component
  const handleRenew = () => {
    toast.info('Showing available plans...');
    setShowPlans(true);  // ✅ Instead of navigating, update state
  };

  // ✅ If showPlans is true, render the Plans component
  if (showPlans) {
    return <Plans phoneNumber={phoneNumber} />;  // ✅ Pass phoneNumber to Plans
  }

  return (
    <Container className="my-5">
      <ToastContainer />
      <h2 className="text-center mb-4">My Plan</h2>

      {loading && <p className="text-center">Loading...</p>}
      
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <Card className="shadow-lg" style={{backgroundColor:"#78c6e0", color:"white"}}>
            <Card.Body>
              {fetchedPlan ? (
                <div className="plan-details">
                  <Card.Title className="text-center mb-4">{fetchedPlan.name}</Card.Title>
                  <Card.Text><strong>Package Type:</strong> {fetchedPlan.packageType}</Card.Text>
                  <Card.Text><strong>Price:</strong> ₹{fetchedPlan.price}</Card.Text>
                  <Card.Text><strong>Duration:</strong> {fetchedPlan.durationDays} days</Card.Text>
                  <Card.Text><strong>Number of Cars:</strong> {fetchedPlan.numOfCars}</Card.Text>
                  <Card.Text><strong>Featured Ads:</strong> {fetchedPlan.featuredAds}</Card.Text>
                  <Card.Text><strong>Description:</strong> {fetchedPlan.description}</Card.Text>
                  <Card.Text><strong>Card Type:</strong> {fetchedPlan.cardType || 'Not Available'}</Card.Text>

                  <div className="text-center">
                    <Button onClick={handleRenew} variant="primary" size="lg" className="mt-3">
                      Renew Plan
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="text-center">No plan data available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}





