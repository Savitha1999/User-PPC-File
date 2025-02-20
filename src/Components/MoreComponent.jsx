





import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MoreComponent.css';
import imge1 from '../Assets/myaccountmore.png';
import imge2 from '../Assets/sellermore.png';
import imge3 from '../Assets/buyermore.png';
import more2 from '../Assets/bottom.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


// MenuLink Component
const MenuLink = ({ to, label }) => (
    <Link to={to} style={{ textDecoration: "none" }}>
        <li className="list-group-item d-flex justify-content-between align-items-center custom-list-item">
            <div className="d-flex align-items-center">
                <span>{label}</span>
            </div>
            <span className="badge bg-primary rounded-pill">0</span>
        </li>
    </Link>
);

const MoreComponent = ({ phoneNumber }) => {
    const [activeTab, setActiveTab] = useState('myAccount');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const navigate = useNavigate();



    const handleAddProperty = async () => {
        if (!phoneNumber) {
            console.error("Missing phone number");
            return;
        }
    
    
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}/store-data`,
                { phoneNumber }
            );
    
            if (response.status === 201) {
                const ppcId = response.data.ppcId;
                console.log("Navigating with PPC-ID:", ppcId); // Debugging log
                
                // Corrected navigation URL format
                navigate(`/add-property/${phoneNumber}?ppcId=${ppcId}`);
            }
        } catch (error) {
        }
    };
    


    return (
        <div className="container mt-4 p-1" 
        // style={{ fontFamily: "Inter, sans-serif", width: "100%", maxWidth: '600px' }}
        style={{
            fontFamily: "Inter, sans-serif",
            width: "100%",
            maxWidth: "600px",
            height: "80vh", // Adjust as needed
            overflowY: "auto",
            scrollbarWidth:"none"
        }}
        >
            {/* Navigation Tabs */}
            <ul className="nav nav-tabs d-flex justify-content-around align-items-center">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'myAccount' ? 'active' : ''}`}
                        style={activeTab === 'myAccount' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
                        onClick={() => handleTabClick('myAccount')}
                    >
                        MY ACCOUNT
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'ownerMenu' ? 'active' : ''}`}
                        style={activeTab === 'ownerMenu' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
                        onClick={() => handleTabClick('ownerMenu')}
                    >
                        OWNER MENU
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === 'buyerMenu' ? 'active' : ''}`}
                        style={activeTab === 'buyerMenu' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
                        onClick={() => handleTabClick('buyerMenu')}
                    >
                        BUYER MENU
                    </button>
                </li>
            </ul>

            {/* Content for Each Tab */}
            <div className="tab-content mt-3">
                {/* My Account Tab Content */}
               
             

 {/* My Account Tab Content */}
{activeTab === 'myAccount' && (
    <div className="tab-pane active">
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="m-0" style={{ color: '#30747F' }}>My Account</h3>
            <img src={imge1} alt="My Account" className="rounded" />
        </div>
      


<ul className="list-group custom-list-group">
            <li 
                className="list-group-item d-flex justify-content-between align-items-center custom-list-item" 
                onClick={handleAddProperty} 
                style={{ cursor: "pointer" }}
            >
                <span>ADD RENTAL PROPERTY</span>
                <span className="badge bg-primary rounded-pill">0</span>
            </li>

            <MenuLink to={`/my-property`} label="My Property" />
            <MenuLink to={`/my-profile`} label="My Profile " />
            <MenuLink to={`/my-plan`} label="My Plan" />
            <MenuLink to={`/notification`} label="Notification" />
            <MenuLink to={`/removed-property`} label="Removed Property" />
            <MenuLink to={`/expired-plans`} label="Expired Property" />
        </ul> 
    </div>
)}


                {/* Owner Menu Tab Content */}
                {activeTab === 'ownerMenu' && (
                    <div className="tab-pane active">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="m-0" style={{ color: '#30747F' }}>Owner Menu</h3>
                            <img src={imge2} alt="Owner Menu" className="rounded" />
                        </div>
                        <ul className="list-group">
                            {/* Using MenuLink Component for Navigation */}
                            <MenuLink to={`/interest-owner/${phoneNumber}`} label="Interested Owners" />
                            <MenuLink to={`/help-owner/${phoneNumber}`} label="NeedHelp Owners" />
                            <MenuLink to={`/contact-owner/${phoneNumber}`} label="contact Owners" />
                            <MenuLink to={`/report-property-owner/${phoneNumber}`} label="report property Owners" />
                            <MenuLink to={`/soldout-owner/${phoneNumber}`} label="soldout Owners" />
                            <MenuLink to={`/favorite-owner/${phoneNumber}`} label="Favorite Owners" />
                            <MenuLink to={`/add-plan/${phoneNumber}`} label="Add Plans Owners" />



                            <MenuLink to={`/matched-buyers`} label="Matched Buyers" />
                            <MenuLink to={`/offer-from-buyer`} label="Offers From Buyers" />
                            <MenuLink to={`/photo-request-send`} label="Photo Request Buyer" />
                            <MenuLink to={`/shortlist-buyer`} label="Shortlisted Buyers" />
                            <MenuLink to={`/view-buyers`} label="Viewed Buyers" />
                            <MenuLink to={`/buyer-lists`} label="Buyer List" />
                            <MenuLink to={`/leads`} label="Leads Center" />
                        </ul>
                    </div>
                )}

                {/* Buyer Menu Tab Content */}
                {activeTab === 'buyerMenu' && (
                    <div className="tab-pane active">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h3 className="m-0" style={{ color: '#30747F' }}>Buyer Menu</h3>
                            <img src={imge3} alt="Buyer Menu" className="rounded" />
                        </div>
                        <ul className="list-group">
                            {/* Example usage of MenuLink for buyer */}
                            <MenuLink to={`/interest-buyer/${phoneNumber}`} label="Buyer Interested " />
                            <MenuLink to={`/help-buyer/${phoneNumber}`} label="Buyer NeedHelp " />
                            <MenuLink to={`/contact-buyer/${phoneNumber}`} label="Contacted Buyers" />
                            <MenuLink to={`/report-property-buyer/${phoneNumber}`} label="Buyer report property " />
                            <MenuLink to={`/soldout-buyer/${phoneNumber}`} label="Buyer Soldout" />
                            <MenuLink to={`/favorite-buyer/${phoneNumber}`} label="Buyer favorite" />

                            {/* <MenuLink to={`/buyer-profile/${phoneNumber}`} label="Buyer Profile" /> */}
                        </ul>
                    </div>
                )}
            </div>

            {/* Footer Image */}
            <img src={more2} alt="Footer" style={{ width: '100%', marginTop: '20px' }} />
        </div>
    );
};

export default MoreComponent;


































// **********************










// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './MoreComponent.css';
// import imge1 from '../Assets/myaccountmore.png';
// import imge2 from '../Assets/sellermore.png';
// import imge3 from '../Assets/buyermore.png';
// import more2 from '../Assets/bottom.png';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// // MenuLink Component
// const MenuLink = ({ to, label, onClick }) => (
//     <li className="list-group-item d-flex justify-content-between align-items-center custom-list-item"
//         onClick={onClick} 
//         style={{ cursor: "pointer" }}>
//         <div className="d-flex align-items-center">
//             <span>{label}</span>
//         </div>
//         <span className="badge bg-primary rounded-pill">0</span>
//     </li>
// );



// const MoreComponent = ({ phoneNumber }) => {
//     const [activeTab, setActiveTab] = useState('myAccount');
    // const navigate = useNavigate();

    // const handleAddProperty = async () => {
    //     if (!phoneNumber) {
    //         console.error("Missing phone number");
    //         return;
    //     }

    //     try {
    //         const response = await axios.post(
    //             `${process.env.REACT_APP_API_URL}/store-data`,
    //             { phoneNumber }
    //         );

    //         if (response.status === 201) {
    //             const ppcId = response.data.ppcId;
    //             console.log("Navigating with PPC-ID:", ppcId); // Debugging log
    //             navigate(`/add-property?ppcId=${ppcId}`); // Ensure PPC-ID is in URL
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // };



//     return (
//         <div className="container mt-4 p-1" style={{ fontFamily: "Inter, sans-serif", width: "100%", maxWidth: "600px", height: "80vh", overflowY: "auto", scrollbarWidth: "none" }}>
//             <ul className="nav nav-tabs d-flex justify-content-around align-items-center">
//                 <li className="nav-item">
//                     <button className={`nav-link ${activeTab === 'myAccount' ? 'active' : ''}`} 
//                         style={activeTab === 'myAccount' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
//                         onClick={() => setActiveTab('myAccount')}>
//                         MY ACCOUNT
//                     </button>
//                 </li>
//                 <li className="nav-item">
//                     <button className={`nav-link ${activeTab === 'ownerMenu' ? 'active' : ''}`} 
//                         style={activeTab === 'ownerMenu' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
//                         onClick={() => setActiveTab('ownerMenu')}>
//                         OWNER MENU
//                     </button>
//                 </li>
//                 <li className="nav-item">
//                     <button className={`nav-link ${activeTab === 'buyerMenu' ? 'active' : ''}`} 
//                         style={activeTab === 'buyerMenu' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
//                         onClick={() => setActiveTab('buyerMenu')}>
//                         BUYER MENU
//                     </button>
//                 </li>
//             </ul>

//             {/* My Account Tab */}
//             {activeTab === 'myAccount' && (
//                 <div className="tab-pane active">
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3 className="m-0" style={{ color: '#30747F' }}>My Account</h3>
//                         <img src={imge1} alt="My Account" className="rounded" />
//                     </div>
//                     <ul className="list-group custom-list-group">
//                     <MenuLink onClick={handleAddProperty} label="ADD RENTAL PROPERTY" />
//                     <MenuLink to="/my" label="My Property" />
//                     <MenuLink label="My Profile " />
//                         <MenuLink label="My Plan" />
//                         <MenuLink label="Notification" />
//                         <MenuLink label="Removed Property" />
//                         <MenuLink label="Expired Property" />
//                     </ul>
//                 </div>
//             )}

//                       {/* Owner Menu Tab Content */}
//                       {activeTab === 'ownerMenu' && (
//                     <div className="tab-pane active">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <h3 className="m-0" style={{ color: '#30747F' }}>Owner Menu</h3>
//                             <img src={imge2} alt="Owner Menu" className="rounded" />
//                         </div>
//                         <ul className="list-group">
//                             {/* Using MenuLink Component for Navigation */}
//                             <MenuLink to={`/interest-owner/${phoneNumber}`} label="Interested Owners" />
//                             <MenuLink to={`/help-owner/${phoneNumber}`} label="NeedHelp Owners" />
//                             <MenuLink to={`/contact-owner/${phoneNumber}`} label="contact Owners" />
//                             <MenuLink to={`/report-property-owner/${phoneNumber}`} label="report property Owners" />
//                             <MenuLink to={`/soldout-owner/${phoneNumber}`} label="soldout Owners" />
//                             <MenuLink to={`/favorite-owner/${phoneNumber}`} label="Favorite Owners" />


//                             <MenuLink to={`/matched-buyers/${phoneNumber}`} label="Matched Buyers" />
//                             <MenuLink to={`/offer-from-buyer/${phoneNumber}`} label="Offers From Buyers" />
//                             <MenuLink to={`/contact-buyer/${phoneNumber}`} label="Contacted Buyers" />
//                             <MenuLink to={`/photo-request-send/${phoneNumber}`} label="Photo Request Buyer" />
//                             <MenuLink to={`/shortlist-buyer/${phoneNumber}`} label="Shortlisted Buyers" />
//                             <MenuLink to={`/view-buyers/${phoneNumber}`} label="Viewed Buyers" />
//                             <MenuLink to={`/my-interest-buyer/${phoneNumber}`} label="My Interested Buyers" />
//                             <MenuLink to={`/buyer-lists/${phoneNumber}`} label="Buyer List" />
//                             <MenuLink to={`/leads/${phoneNumber}`} label="Leads Center" />
//                         </ul>
//                     </div>
//                 )}

//                 {/* Buyer Menu Tab Content */}
//                 {activeTab === 'buyerMenu' && (
//                     <div className="tab-pane active">
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <h3 className="m-0" style={{ color: '#30747F' }}>Buyer Menu</h3>
//                             <img src={imge3} alt="Buyer Menu" className="rounded" />
//                         </div>
//                         <ul className="list-group">
//                             {/* Example usage of MenuLink for buyer */}
//                             <MenuLink to={`/interest-buyer/${phoneNumber}`} label="Buyer Interested " />
//                             <MenuLink to={`/help-buyer/${phoneNumber}`} label="Buyer NeedHelp " />
//                             <MenuLink to={`/contact-buyer/${phoneNumber}`} label="Contacted Buyers" />
//                             <MenuLink to={`/report-property-buyer/${phoneNumber}`} label="Buyer report property " />
//                             <MenuLink to={`/soldout-buyer/${phoneNumber}`} label="Buyer Soldout" />
//                             <MenuLink to={`/favorite-buyer/${phoneNumber}`} label="Buyer favorite" />

//                             <MenuLink to={`/buyer-profile/${phoneNumber}`} label="Buyer Profile" />
//                             {/* More items for the buyer menu */}
//                         </ul>
//                     </div>
//                 )}
//             {/* </div> */}

//             {/* Footer Image */}
//             <img src={more2} alt="Footer" style={{ width: '100%', marginTop: '20px' }} />
//         </div>
//     );
// };

// export default MoreComponent;





// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './MoreComponent.css';
// import imge1 from '../Assets/myaccountmore.png';
// import imge2 from '../Assets/sellermore.png';
// import imge3 from '../Assets/buyermore.png';
// import more2 from '../Assets/bottom.png';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// // MenuLink Component
// const MenuLink = ({ to, label, onClick }) => {
//     const navigate = useNavigate();

//     const handleClick = () => {
//         if (onClick) {
//             onClick();
//         } else if (to) {
//             navigate(to);
//         }
//     };

//     return (
//         <li 
//             className="list-group-item d-flex justify-content-between align-items-center custom-list-item"
//             onClick={handleClick} 
//             style={{ cursor: "pointer" }}>
//             <div className="d-flex align-items-center">
//                 <span>{label}</span>
//             </div>
//             <span className="badge bg-primary rounded-pill">0</span>
//         </li>
//     );
// };

// const MoreComponent = ({ phoneNumber }) => {
//     const [activeTab, setActiveTab] = useState('myAccount');
//     const navigate = useNavigate();

//     const handleAddProperty = async () => {
//         if (!phoneNumber) {
//             console.error("Missing phone number");
//             return;
//         }

//         try {
//             const response = await axios.post(
//                 `${process.env.REACT_APP_API_URL}/store-data`,
//                 { phoneNumber }
//             );

//             if (response.status === 201) {
//                 const ppcId = response.data.ppcId;
//                 console.log("Navigating with PPC-ID:", ppcId);
//                 navigate(`/add-property/:phoneNumber?ppcId=${ppcId}`);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     return (
//         <div className="container mt-4 p-1" style={{ fontFamily: "Inter, sans-serif", width: "100%", maxWidth: "600px", height: "80vh", overflowY: "auto", scrollbarWidth: "none" }}>
//             <ul className="nav nav-tabs d-flex justify-content-around align-items-center">
//                 <li className="nav-item">
//                     <button className={`nav-link ${activeTab === 'myAccount' ? 'active' : ''}`} 
//                         style={activeTab === 'myAccount' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
//                         onClick={() => setActiveTab('myAccount')}>
//                         MY ACCOUNT
//                     </button>
//                 </li>
//                 <li className="nav-item">
//                     <button className={`nav-link ${activeTab === 'ownerMenu' ? 'active' : ''}`} 
//                         style={activeTab === 'ownerMenu' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
//                         onClick={() => setActiveTab('ownerMenu')}>
//                         OWNER MENU
//                     </button>
//                 </li>
//                 <li className="nav-item">
//                     <button className={`nav-link ${activeTab === 'buyerMenu' ? 'active' : ''}`} 
//                         style={activeTab === 'buyerMenu' ? { backgroundColor: '#30747F', color: 'white' } : { color: 'black' }}
//                         onClick={() => setActiveTab('buyerMenu')}>
//                         BUYER MENU
//                     </button>
//                 </li>
//             </ul>

//             {/* My Account Tab */}
//             {activeTab === 'myAccount' && (
//                 <div className="tab-pane active">
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                         <h3 className="m-0" style={{ color: '#30747F' }}>My Account</h3>
//                         <img src={imge1} alt="My Account" className="rounded" />
//                     </div>
//                     <ul className="list-group custom-list-group">
//                         <MenuLink to={`/add-property/${phoneNumber}`}  onClick={handleAddProperty} label="ADD RENTAL PROPERTY" />
//                         <MenuLink to={`/my/${phoneNumber}`} label="My Property" />
//                         <MenuLink label="My Profile" />
//                         <MenuLink label="My Plan" />
//                         <MenuLink label="Notification" />
//                         <MenuLink label="Removed Property" />
//                         <MenuLink label="Expired Property" />
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default MoreComponent;
