import React from "react";
import image1 from "../assest/image1.jpg";
import { Link } from "react-router-dom";

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
          top: "50%", 
          left: "75%", 
          transform: "translate(-50%, -50%)", 
          textAlign: "center", 
          color: "green"
        }}>
          <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>Get Started Predicting Your Yield</h1>
          <button style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            <Link to="/some-page" style={{ color: "white", textDecoration: "none" }}>Get Started</Link>
          </button>
        </div>
      </div>

      {/* First Text Section */}
      <div style={{ maxWidth: "800px", margin: "20px auto",padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px" }}>First Section Title</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
          This is the first text section. You can describe the content or provide information related to the image above. 
          The text is centered and styled for readability.
        </p>
      </div>

      {/* Second Image */}
      <div style={{ 
        width: "100%", 
        height: "80vh", 
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
      </div>

      {/* Second Text Section */}
      <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px" }}>Second Section Title</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
          This is the second text section. Continue to elaborate on the content, provide additional details, or any other information that relates to the second image.
        </p>
      </div>

      {/* Third Image */}
      <div style={{ 
        width: "100%", 
        height: "80vh", 
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
      </div>

      {/* Third Text Section */}
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px" }}>Third Section Title</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
          This is the third text section. Continue to elaborate on the content, provide additional details, or any other information that relates to the third image.
        </p>
      </div>

      {/* Fourth Image */}
      <div style={{ 
        width: "100%", 
        height: "80vh", 
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
      </div>

    </div>
  );
};

export default Browse;
