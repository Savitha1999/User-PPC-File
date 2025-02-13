






import React, { useState, useEffect, useRef } from "react";
import { FaRulerCombined, FaBed, FaUser, FaCalendarAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import NewProperty from "./NewProperty";

const slides = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
  "https://via.placeholder.com/800x400?text=Slide+4",
];

const 
Carousel = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login"); // Navigate to the "About" page
  };
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const carouselRef = useRef(null); // Ref for carousel track
  const [isAnimating, setIsAnimating] = useState(true); // Flag to control animation pause

  const product = {
    id: 1,
    image: slides[0], // Use carousel images or specific product images
    name: "Beautiful House",
    location: "New York",
    price: "$500,000",
    size: "2000 sqft",
    bhk: "4 BHK",
    owner: "John Doe",
    time: "2 days ago",
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setIsAnimating(false); // Stop auto-scrolling temporarily
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide
    setTimeout(() => {
      setIsAnimating(true); // Resume auto-scrolling after 1 second delay
    }, 3000); // After 1 second delay, resume the scroll
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setIsAnimating(false); // Stop auto-scrolling temporarily
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    ); // Move to the previous slide
    setTimeout(() => {
      setIsAnimating(true); // Resume auto-scrolling after 1 second delay
    }, 3000); // After 1 second delay, resume the scroll
  };

  // Use keyframes for continuous scrolling without pausing
  useEffect(() => {
    const track = carouselRef.current;
    if (track) {
      track.style.animation = isAnimating
        ? "scroll 20s linear infinite" // Smooth animation
        : "none"; // Stop the animation temporarily when buttons are pressed
    }
  }, [isAnimating]);

  return (
    <>
    <NewProperty />
    <div   className="p-1 mt-5"
        style={{
          background: "linear-gradient(to right, #ee9ca7 , #ffdde1)",   
          backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
        height: "auto", // Example height
        width: "100%", // Example width
      }}>
    <h3 className="m-2" style={{color:'#763A87 '}}>FEATURE PROPERTY</h3>
    <div  style={{ overflow: "hidden", width: "100%" , position: "relative", fontFamily: 'Inter, sans-serif'}}>
    <Link to={'/login'} style={{textDecoration:"none"}} >
 
      <div
        className="carousel-track p-0"
        ref={carouselRef}
        style={{
          display: "flex",
          flexWrap: "nowrap",
          transform: `translateX(-${currentIndex * 100}%)`, // Adjust the translateX for smooth scrolling
        }}
      >
        
        {slides.concat(slides).map((slide, index) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 mb-4"
            key={index}
            style={{ flex: "0 0 auto", marginRight: "10px" }}
          >
            <div className="card w-100 h-100">
              <img
                src={slide}
                className="card-img-top"
                alt={`Slide ${index + 1}`}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "250px",
                  objectPosition: "center",
                }}
              />
              <div className="card-body">
                <p className="card-title">{product.name || "N/A"}</p>
                <p className="card-text text-muted">
                  <MdLocationOn color="#DD589E"/> {product.location || "N/A"}
                </p>
                <p className="card-text" >
                  <span style={{color:"#A13272"}}>{product.price || "0"}</span>
                </p>

                <div className="container p-0">
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <p>
                        <FaRulerCombined className="" color="#DD589E"/> {product.size || "N/A"}
                      </p>
                    </div>
                    <div className="col-md-6 col-6">
                      <p>
                        <FaBed className="ms-3" color="#DD589E" /> {product.bhk || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-6">
                      <p>
                        <FaUser className="" color="#DD589E"/> {product.owner || "N/A"}
                      </p>
                    </div>
                    <div className="col-md-6 col-6">
                      <p>
                        <FaCalendarAlt className="ms-3" color="#DD589E"/> {product.time || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
                <Link to={'/login'} style={{textDecoration:"none"}} >
                <button
                  className="btn"
                  style={{
                    width: "100%",
                    background: "#C82B60",
                    color: "#FFC631",
                    border: "none",
                    height: "50px",
                  }}
                >
                  VIEW DETAILS
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      </Link>

      <div style={{ textAlign: "center", marginTop: "10px",   position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: 1, }}>
        <button
          onClick={prevSlide}
          className="btn"
          style={{
            background: "#C23AA0",
            color: "#fff",
            border: "none",
            height: "50px",
            width: "100px",
          }}
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="btn btn-secondary"
          style={{
            background: "#A5009C",
            color: "#fff",
            border: "none",
            height: "50px",
            width: "100px",
            marginLeft: "10px",
          }}
        >
          Next
        </button>
      </div>

      <style>
        {`
          .carousel-track {
            display: flex;
            flex-wrap: nowrap;
            transition: transform 1s ease-in-out; /* Smooth transition */
          }

          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      <p onClick={handleClick} style={{float:'right', fontSize: '16px', color:'red', cursor:'pointer'}}> view more</p>

    </div>

    </div>
    </>
  );
};

export default Carousel;







// import React, { useState, useEffect, useRef } from "react";
// import { FaRulerCombined, FaBed, FaUser, FaCalendarAlt } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import NewProperty from './NewProperty';

// const slides = [
//   "https://via.placeholder.com/800x400?text=Slide+1",
//   "https://via.placeholder.com/800x400?text=Slide+2",
//   "https://via.placeholder.com/800x400?text=Slide+3",
//   "https://via.placeholder.com/800x400?text=Slide+4",
// ];

// const 
// Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
//   const carouselRef = useRef(null); // Ref for carousel track
//   const [isAnimating, setIsAnimating] = useState(true); // Flag to control animation pause

//   const product = {
//     id: 1,
//     image: slides[0], // Use carousel images or specific product images
//     name: "Beautiful House",
//     location: "New York",
//     price: "$500,000",
//     size: "2000 sqft",
//     bhk: "4 BHK",
//     owner: "John Doe",
//     time: "2 days ago",
//   };

//   // Function to go to the next slide
//   const nextSlide = () => {
//     setIsAnimating(false); // Stop auto-scrolling temporarily
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Move to the next slide
//     setTimeout(() => {
//       setIsAnimating(true); // Resume auto-scrolling after 1 second delay
//     }, 3000); // After 1 second delay, resume the scroll
//   };

//   // Function to go to the previous slide
//   const prevSlide = () => {
//     setIsAnimating(false); // Stop auto-scrolling temporarily
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//     ); // Move to the previous slide
//     setTimeout(() => {
//       setIsAnimating(true); // Resume auto-scrolling after 1 second delay
//     }, 3000); // After 1 second delay, resume the scroll
//   };

//   // Use keyframes for continuous scrolling without pausing
//   useEffect(() => {
//     const track = carouselRef.current;
//     if (track) {
//       track.style.animation = isAnimating
//         ? "scroll 20s linear infinite" // Smooth animation
//         : "none"; // Stop the animation temporarily when buttons are pressed
//     }
//   }, [isAnimating]);

//   return (
//     <>
//     <h6 style={{color:'#105EEB '}}>FEATURE PROPERTY</h6>
//     <div style={{ overflow: "hidden", width: "100%" , position: "relative", fontFamily: 'Inter, sans-serif'}}>
//       <div
//         className="carousel-track"
//         ref={carouselRef}
//         style={{
//           display: "flex",
//           flexWrap: "nowrap",
//           transform: `translateX(-${currentIndex * 100}%)`, // Adjust the translateX for smooth scrolling
//         }}
//       >
//         {slides.concat(slides).map((slide, index) => (
//           <div
//             className="col-lg-4 col-md-6 col-sm-12 mb-4"
//             key={index}
//             style={{ flex: "0 0 auto", marginRight: "10px" }}
//           >
//             <div className="card w-100">
//               <img
//                 src={slide}
//                 className="card-img-top"
//                 alt={`Slide ${index + 1}`}
//                 style={{
//                   objectFit: "cover",
//                   width: "100%",
//                   height: "250px",
//                   objectPosition: "center",
//                 }}
//               />
//               <div className="card-body">
//                 <p className="card-title">{product.name}</p>
//                 <p className="card-text text-muted">
//                   <MdLocationOn /> {product.location}
//                 </p>
//                 <p className="card-text">
//                   <span className="text-success">{product.price}</span>
//                 </p>

//                 <div className="container p-0">
//                   <div className="row">
//                     <div className="col-md-6 col-6">
//                       <p>
//                         <FaRulerCombined className="icon" /> {product.size}
//                       </p>
//                     </div>
//                     <div className="col-md-6 col-6">
//                       <p>
//                         <FaBed className="icon ms-3" /> {product.bhk}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-md-6 col-6">
//                       <p>
//                         <FaUser className="icon" /> {product.owner}
//                       </p>
//                     </div>
//                     <div className="col-md-6 col-6">
//                       <p>
//                         <FaCalendarAlt className="icon ms-3" /> {product.time}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   className="btn btn-primary"
//                   style={{
//                     width: "100%",
//                     background: "#001F3F",
//                     color: "#FFC631",
//                     border: "none",
//                     height: "50px",
//                   }}
//                 >
//                   VIEW DETAILS
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: "center", marginTop: "10px",   position: "absolute",
//           top: "10px",
//           right: "10px",
//           zIndex: 1, }}>
//         <button
//           onClick={prevSlide}
//           className="btn btn-secondary"
//           style={{
//             background: "#001F3F",
//             color: "#FFC631",
//             border: "none",
//             height: "50px",
//             width: "100px",
//           }}
//         >
//           Prev
//         </button>
//         <button
//           onClick={nextSlide}
//           className="btn btn-secondary"
//           style={{
//             background: "#001F3F",
//             color: "#FFC631",
//             border: "none",
//             height: "50px",
//             width: "100px",
//             marginLeft: "10px",
//           }}
//         >
//           Next
//         </button>
//       </div>

//       <style>
//         {`
//           .carousel-track {
//             display: flex;
//             flex-wrap: nowrap;
//             transition: transform 1s ease-in-out; /* Smooth transition */
//           }

//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-100%); }
//           }
//         `}
//       </style>
//     </div>
//     <NewProperty />
//     </>
//   );
// };

// export default 
// Carousel;
