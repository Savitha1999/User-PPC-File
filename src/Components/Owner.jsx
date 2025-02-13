// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom'; // To get phoneNumber and ppcId from route state

// const Owner = () => {
//   const { phoneNumber } = useLocation().state || {}; // Get phoneNumber from the location state (or default value)
  
//   const [ownerData, setOwnerData] = useState(null);
//   const [buyerData, setBuyerData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [message, setMessage] = useState('');

//   // Fetch Owner Data
//   const fetchOwnerData = async () => {
//     if (!phoneNumber) {
//       setMessage('Phone number is required.');
//       return;
//     }

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/owner-data?phoneNumber=${phoneNumber}`);
//       setOwnerData(response.data.ownerData);
//     } catch (err) {
//       setError('Failed to fetch owner data.');
//       console.error(err);
//     }
//   };

//   // Fetch Buyer Data
//   const fetchBuyerData = async () => {
//     if (!phoneNumber) {
//       setMessage('Phone number is required.');
//       return;
//     }

//     try {
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/buyer-data?phoneNumber=${phoneNumber}`);
//       setBuyerData(response.data.buyerData);
//     } catch (err) {
//       setError('Failed to fetch buyer data.');
//       console.error(err);
//     }
//   };

//   // Use useEffect to fetch data when component is mounted
//   useEffect(() => {
//     if (phoneNumber) {
//       setLoading(true);
//       fetchOwnerData();
//       fetchBuyerData();
//     }
//   }, [phoneNumber]);

//   // Render loading state or error message
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mt-4 p-4">
//       <h3>Owner Data</h3>
//       {message && <p>{message}</p>}

//       {/* Owner Data Section */}
//       {ownerData ? (
//         <div>
//           <h4>Owned Properties</h4>
//           <ul>
//             {ownerData.map((property) => (
//               <li key={property.ppcId}>
//                 <strong>PPC ID:</strong> {property.ppcId}
//                 <br />
//                 <strong>Posted Time:</strong> {new Date(property.postedTime).toLocaleDateString()}
//                 <br />
//                 <strong>Interest Requests:</strong> {property.interestRequests.length}
//                 <br />
//                 <strong>Help Requests:</strong> {property.helpRequests.length}
//                 <br />
//                 <strong>Report Property Requests:</strong> {property.reportPropertyRequests.length}
//                 <br />
//                 <strong>Sold Out Reports:</strong> {property.soldOutReports.length}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No owner data available.</p>
//       )}

//       {/* Buyer Data Section */}
//       {buyerData ? (
//         <div>
//           <h4>Buyer Activity</h4>
//           <ul>
//             {buyerData.map((property) => (
//               <li key={property.ppcId}>
//                 <strong>PPC ID:</strong> {property.ppcId}
//                 <br />
//                 <strong>Property Owner:</strong> {property.propertyOwner}
//                 <br />
//                 <strong>Interest Requests Sent:</strong> {property.interestSent.length}
//                 <br />
//                 <strong>Help Requests Sent:</strong> {property.helpRequestsSent.length}
//                 <br />
//                 <strong>Report Requests Sent:</strong> {property.reportRequestsSent.length}
//                 <br />
//                 <strong>Sold Out Reports Sent:</strong> {property.soldOutReportsSent.length}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No buyer activity found.</p>
//       )}
//     </div>
//   );
// };

// export default Owner;








import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Owner = () => {
  const { ppcId } = useLocation().state || {}; // Get ppcId from the route state
  const [propertyData, setPropertyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Property Data
  const fetchPropertyData = async () => {
    if (!ppcId) {
      setError('PPC ID is required.');
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/get-property-data?ppcId=${ppcId}`);
      setPropertyData(response.data.propertyData);
    } catch (err) {
      setError('Failed to fetch property data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ppcId) {
      fetchPropertyData();
    }
  }, [ppcId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-4 p-4">
      <h3>Property Data for PPC ID: {ppcId}</h3>

      {propertyData ? (
        <div>
          <h4>Owner Information</h4>
          <p><strong>Owner Phone Number:</strong> {propertyData.ownerPhoneNumber}</p>

          <h4>Requests and Reports</h4>
          <ul>
            <li><strong>Interest Requests:</strong> {propertyData.interestRequests.length}</li>
            <li><strong>Help Requests:</strong> {propertyData.helpRequests.length}</li>
            <li><strong>Report Property Requests:</strong> {propertyData.reportPropertyRequests.length}</li>
            <li><strong>Sold Out Reports:</strong> {propertyData.soldOutReports.length}</li>
            <li><strong>Contact Requests:</strong> {propertyData.contactRequests.length}</li>
          </ul>

          <h4>Status</h4>
          <p><strong>Property Status:</strong> {propertyData.status}</p>
        </div>
      ) : (
        <p>No data available for this property.</p>
      )}
    </div>
  );
};

export default Owner;
