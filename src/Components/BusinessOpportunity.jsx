import React from 'react'
import business from '../Assets/business.png'


export default function BusinessOpportunity() {
  return (

   <div
   className="d-flex justify-content-center align-items-center"
   style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
 >
   <div
     style={{
       width: "450px",
       height: "100vh",
       overflow: "auto", // Enables scrolling if content overflows
       border: "1px solid #ccc",
       borderRadius: "10px",
       backgroundColor: "#fff",
     }}
   >
     <style>
          {`
            /* Hide scrollbar for all browsers */
            div::-webkit-scrollbar {
              width: 0;
              height: 0;
            }

            div {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
          `}
        </style>
     <img
        src={business}
        alt="Scrollable"
       style={{ width: "100%", height: "auto" }}
     />
   </div>
 </div>
)
}



