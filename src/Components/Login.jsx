






import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setPhoneNumber } from '../red/userSlice';
import { Helmet } from 'react-helmet';
import Flag from 'react-world-flags';
import logo from '../Assets/ppc logo.jpg';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [phoneNumber, setPhoneNumberState] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(30);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [selectedCountry, setSelectedCountry] = useState('IN');
  const [isPhoneNumberEntered, setIsPhoneNumberEntered] = useState(false);
  const [mockOtp, setMockOtp] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const countryCodes = [
    { code: '+1', country: 'USA', flag: 'US' },
    { code: '+44', country: 'UK', flag: 'GB' },
    { code: '+91', country: 'IN', flag: 'IN' },
    { code: '+61', country: 'Australia', flag: 'AU' },
    { code: '+81', country: 'Japan', flag: 'JP' },
    // ... add more country codes as needed
  ];

  useEffect(() => {
    let timer;
    if (otpTimer > 0 && !canResendOtp) {
      timer = setInterval(() => {
        setOtpTimer(prev => {
          if (prev === 1) {
            setCanResendOtp(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [otpTimer, canResendOtp]);

  useEffect(() => {
    const storedPhoneNumber = localStorage.getItem('userPhoneNumber');
    if (storedPhoneNumber) {
      setPhoneNumberState(storedPhoneNumber);
      dispatch(setPhoneNumber(storedPhoneNumber));
    }
  }, [dispatch]);

  const handleCountryChange = (e) => {
    const selected = e.target.value;
    const country = countryCodes.find(c => c.flag === selected);
    setCountryCode(country.code);
    setSelectedCountry(selected);
  };

  const handlePhoneNumberChange = (e) => {
    const phone = e.target.value;
    setPhoneNumberState(phone);

    const fullPhoneNumber = countryCode + phone; // Combine country code and phone number
    dispatch(setPhoneNumber(fullPhoneNumber));
    localStorage.setItem('userPhoneNumber', fullPhoneNumber); // Store the full phone number
    setIsPhoneNumberEntered(phone.length > 0);
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
  
    if (!phoneNumber) {
      toast.error('Please enter a valid phone number.', {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/register`, {
        phone: phoneNumber,
        countryCode,
        mode: 'web'
      });
  
      if (response.status === 200 || response.status === 201) {
        const generatedOtp = response.data.data.otp;
        toast.success(`OTP sent successfully! Your OTP is: ${generatedOtp}`, {
          position: "top-center",
          autoClose: 5000,
        });
        setMockOtp(generatedOtp);
        setIsOtpSent(true);
        setOtpTimer(30);
        setCanResendOtp(false);
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message &&
        error.response.data.message.includes('OTP')
      ) {
        const generatedOtp = error.response.data.data.otp;
        toast.success(`OTP sent successfully! Your OTP is: ${generatedOtp}`, {
          position: "top-center",
          autoClose: 5000,
        });
        setMockOtp(generatedOtp);
        setIsOtpSent(true);
        setOtpTimer(30);
        setCanResendOtp(false);
      } else {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error('Error: ' + errorMessage, {
          position: "top-center",
          autoClose: 5000,
        });
      }
    }
  };
  
  // const handleVerifyOtp = (e) => {
  //   e.preventDefault();
  //   // In a production scenario, you might verify the OTP via another API call.
  //   // Here, we use local mock OTP for demonstration.
  //   if (otp === mockOtp) {
  //     toast.success('OTP verified successfully!');
  //     navigate('/mobileviews', { state: { phoneNumber} });
  //   } else {
  //     toast.error('Invalid OTP. Please try again.');
  //   }
  // };

  
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
  
    if (!otp) {
      toast.error('Please enter the OTP.');
      return;
    }
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/verify-otp`, {
        phone: phoneNumber,
        otp:otp,
      });
  
      if (response.status === 200) {
        toast.success('OTP verified successfully!');
        navigate('/mobileviews', { state: { phoneNumber } });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'OTP verification failed!';
      toast.error(errorMessage);
    }
  };
  

  return (
    <Container fluid className="p-0 login">
      <Helmet>
        <title>Pondy Property | Login</title>
      </Helmet>
      <Row className="g-0">
        <Col lg={12} className="d-flex align-items-center justify-content-center">
          <div className="d-flex mt-3 justify-content-center align-items-center">
            <div
              style={{
                width: "100%",
                maxWidth: "600px",
                minWidth: "300px",
                height: "100vh",
                position: "relative",
                backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcuV4KOIIk3EuvX9hVPSTszzfiPqalO5Oipbfm5wXCPVFgtWiFpMEiO3K2GpjuV87G61Y&usqp=CAU')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "2rem",
                borderRadius: "8px",
                margin: "0 20px",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(49, 49, 49, 0.5)",
                  backdropFilter: "blur(3px)",
                  borderRadius: "8px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  color: "white",
                }}
              >
                <h1 className="welcome-title text-white">Welcome Back</h1>
                <p className="subtitle text-white">Login to continue</p>
                <div
                  className="logo-container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                    marginTop: "100px",
                  }}
                >
                  <img src={logo} alt="Logo" className="login-logo rounded-3" height={40} />
                </div>
                <p className="description text-center mt-2 mb-5">Buy and Sell your Property in Pondicherry</p>

                {!isOtpSent ? (
                  <Form onSubmit={handleSendOtp}>
                    <Form.Group className="mb-3" controlId="countryCode">
                      <InputGroup>
                        <InputGroup.Text className="custom-background mb-2 border-0">
                          <Flag code={selectedCountry} style={{ width: '30px', marginRight: '8px' }} />
                        </InputGroup.Text>
                        <Form.Select
                          value={selectedCountry}
                          onChange={handleCountryChange}
                          aria-label="Select Country"
                          className="custom-background small-input fw-normal "
                          style={{ width: 'auto', maxWidth: '120px' }}
                        >
                          {countryCodes.map((country) => (
                            <option className="text-dark" key={country.code} value={country.flag}>
                              ({country.country}) {country.code}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control
                          type="text"
                          placeholder="Enter Mobile No"
                          onChange={handlePhoneNumberChange}
                          required
                          className="custom-background small-input fw-normal rounded-0"
                          style={{ width: 'auto', maxWidth: '140px' }}
                        />
                      </InputGroup>
                    </Form.Group>
                    <div className="d-flex justify-content-center mt-3">
                      <Button type="button" style={{ backgroundColor: "white", border: "1px solid orangered", color: "orangered" }} className="btn-secondary w-50 btn-small mx-2">
                        SKIP
                      </Button>
                      <Button type="submit" style={{ backgroundColor: "orangered", border: "2px solid orangered" }} className="btn w-50 btn-small mx-2">
                        LOGIN
                      </Button>
                    </div>
                  </Form>
                ) : (
                  <Form onSubmit={handleVerifyOtp}>
                    <Form.Group className="mb-3" controlId="otp">
                      <Form.Control
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        required
                        className="custom-background small-input fw-normal  rounded-0"
                      />
                    </Form.Group>
                    {canResendOtp && (
                      <Button style={{ backgroundColor: "white", border: "1px solid orangered", color: "orangered" }} onClick={handleSendOtp} className="w-100 mt-2">
                        RESEND OTP
                      </Button>
                    )}
                    {otpTimer > 0 && !canResendOtp && (
                      <p className="text-center mt-2">Resend OTP in {otpTimer} seconds</p>
                    )}
                    <Button type="submit" style={{ backgroundColor: "orangered", border: "2px solid orangered" }} className="btn-small w-50 mt-5">
                      VERIFY OTP
                    </Button>
                  </Form>
                )}
                <p className="footer-text">
                  Edit or Add Your Property <span style={{ color: "rgb(22, 198, 22)" }} className="highlight fw-bold ms-2">
                    Pondy Property
                  </span>
                  <div style={{ marginLeft: "30%", borderBottom: "2px solid orangered", width: "40%", marginTop: "15px" }}></div>
                </p>
                <ToastContainer />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
