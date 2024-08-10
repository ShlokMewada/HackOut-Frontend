

import React from "react";
import image1 from "../assest/image1.jpg";
import { Link } from "react-router-dom";
import image2 from "../assest/image2.jpg";
import image3 from "../assest/image3.jpeg";
import image4 from "../assest/image4.jpg";
const Browse = () => {
  return (
    <div>
      {/* Full-Page Image with Heading and Button */}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        height: "100vh", 
        backgroundImage: `url(${image1})`,  // Correct format for backgroundImage
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",
        
        
      }}>
        <div style={{ 
          position: "absolute", 
          top: "60%", 
          left: "75%", 
          transform: "translate(-50%, -50%)", 
          textAlign: "center", 
          color:"white"
        }} >
          <h1 style={{ fontSize: "2.5em", marginBottom: "20px"}} >Get Started Predicting Your Yield</h1>
          <button style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            backgroundColor: "#331eed",
            color: "white",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer"
          }}>
            <Link to="/some-page" style={{ color: "white", textDecoration: "none" }}>Get Started</Link>
          </button>
        </div>
      </div>

      {/* First Text Section */}
      <div style={{ maxWidth: "800px", margin: "20px auto",padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px"  }} >AgroPredict</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
        The project aims to predict whether the weather conditions will enable successful crop yields for farmers. Additionally, it offers insights into the potential for farmers to sell their goods effectively.
        </p>
      </div>

      {/* Second Image */}
      <div style={{ 
        width: "100%", 
        height: "80vh", 
        backgroundImage: `url(${image2})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
          
        


      </div>

      {/* Second Text Section */}
      <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px" }}>Continues Help to the farmers</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
          
Helping farmers by analyzing soil health, providing weather forecasts, predicting crop impact, and offering guidance on planting, harvesting, and pest control to improve crop yield and sustainability
        </p>
      </div>

      {/* Third Image */}
      <div style={{ 
        width: "100%", 
        height: "80vh", 
        backgroundImage: `url(${image3})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
      </div>

      {/* Third Text Section */}
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px" }}>Farmer can Sell Their product</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
         
Farmers can list and sell their crops directly through our platform, allowing customers to purchase fresh, locally-grown produce with ease. Enjoy quality farm-fresh goods delivered straight to your table
        </p>
      </div>

      {/* Fourth Image */}
      <div style={{ 
        width: "100%", 
        height: "80vh", 
        backgroundImage: `url(${image4})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
      </div>

    </div>
  );
};

export default Browse;
