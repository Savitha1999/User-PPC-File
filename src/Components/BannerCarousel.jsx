import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../Carousel.css"; // Custom CSS file

// Import images from assets folder
import ppc from "../Assets/ppc.jpeg"
import puc from "../Assets/puc.jpeg"
import rentpondy from "../Assets/rentpondy.jpeg"
import pmpondy from "../Assets/pmpondy.jpeg"

const BannerCarousel = () => {
  const banners = [ppc, puc, rentpondy,pmpondy];

  return (
    <div
      id="carouselExampleFade"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {banners.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={image}
              className="d-block w-100 custom-carousel-image"
              alt={`Slide ${index + 1}`}
              style={{
                objectFit: "cover",
                maxHeight: "75vh",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
