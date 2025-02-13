// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import ppc from "./Assets/ppc.jpeg"
// import puc from "./Assets/puc.jpeg"
// import rentpondy from "./Assets/rentpondy.jpeg"
// import pmpondy from "./Assets/pmpondy.jpeg"

// const BannerCarousel = () => {
//   const banners = [
//     { id: 1, image: ppc },
//     { id: 2, image: puc },
//     { id: 3, image: rentpondy },
//     { id: 4, image: pmpondy },

//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
//     }, 3000); // Change slides every 3 seconds
//     return () => clearInterval(interval);
//   }, [banners.length]);

//   return (
//     <div
//       id="carouselExampleFade"
//       className="carousel slide carousel-fade"
//       data-bs-ride="carousel"
//       style={{ height: "auto", overflow: "hidden" }}
//     >
//       <div className="carousel-inner" style={{ height: "100%" }}>
//         {banners.map((banner, index) => (
//           <div
//             key={banner.id}
//             className={`carousel-item ${index === activeIndex ? "active" : ""}`}
//             style={{ height: "100%" }}
//           >
//             <img
//               src={banner.image}
//               className="d-block w-100"
//               alt={`Banner ${index + 1}`}
//               style={{
//                 objectFit: "cover",
//                 height: "100%",
//                 width: "100%",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerCarousel;


// import React, { useEffect, useState } from "react";
// import "./Carousel.css"; // Import the custom CSS

// // Import images from assets folder
// import ppc from "./Assets/ppc.jpeg"
// import puc from "./Assets/puc.jpeg"
// import rentpondy from "./Assets/rentpondy.jpeg"
// import pmpondy from "./Assets/pmpondy.jpeg"
// const BannerCarousel = () => {
//   const banners = [
//     { id: 1, image: ppc },
//     { id: 2, image: puc },
//     { id: 3, image: rentpondy },
//     { id: 4, image: pmpondy },

//   ];

//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
//     }, 3000); // Change slides every 3 seconds
//     return () => clearInterval(interval);
//   }, [banners.length]);

//   return (
//     <div className="custom-carousel">
//       {banners.map((banner, index) => (
//         <img
//           key={banner.id}
//           src={banner.image}
//           alt={`Banner ${index + 1}`}
//           className={`carousel-image ${index === activeIndex ? "active" : ""}`}
//           style={{
//             height: "100%",
//             width: "100%",
//             objectFit: "cover",
//             position: "absolute",
//             top: 0,
//             left: 0,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default BannerCarousel;


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./Carousel.css"; // Custom CSS file

// // Import images from assets folder
// import ppc from "./Assets/ppc.jpeg"
// import puc from "./Assets/puc.jpeg"
// import rentpondy from "./Assets/rentpondy.jpeg"
// import pmpondy from "./Assets/pmpondy.jpeg"

// const BannerCarousel = () => {
//   const banners = [ppc, puc, rentpondy,pmpondy];

//   return (
//     <div
//       id="carouselExampleFade"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       <div className="carousel-inner">
//         {banners.map((image, index) => (
//           <div
//             key={index}
//             className={`carousel-item ${index === 0 ? "active" : ""}`}
//           >
//             <img
//               src={image}
//               className="d-block w-100 custom-carousel-image"
//               alt={`Slide ${index + 1}`}
//               style={{
//                 objectFit: "cover",
//                 maxHeight: "75vh",
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BannerCarousel;


import React from 'react'
import BannerCarousel from './Components/BannerCarousel'
import Ads from './Components/Ads'
import FrontFooter from './Components/FrontFooter'
import Header from './Components/Header'
import Carousel from './Components/Carousel';

export default function App() {
  return (
    <>
    <Header />
    <BannerCarousel />
     <div className="container-fluid">
      <div className="row">
        {/* Main Content */}
        <div className="col-12 col-md-9" style={{fontFamily:"Inter, sans-serif", fontWeight:'Medium'}}>
          {/* <PropertyCard /> */}
          <Carousel />
          </div>
        {/* Sidebar */}
        <div className="d-none d-md-block col-md-3 mt-4">
          <Ads />
          </div>
      </div>
    </div>
    {/* <CardCarousel /> */}
    <FrontFooter />
    </>
  )
}
