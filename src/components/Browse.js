import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Browse = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  // };

  return (
    // <div style={{ display: "flex", justifyContent: "space-between", margin: "50px" }}>
    //   {/* Carousel */}
    //   <div style={{ width: "65%", height: "400px" }}> {/* Adjusted width to make space for the smaller text div */}
    //     <Slider {...settings}>
    //       <div>
    //         <img 
    //           src="https://via.placeholder.com/800x400" 
    //           alt="Slide 1" 
    //           style={{ width: "100%", height: "100%", objectFit: "cover" }} 
    //         />
    //       </div>
    //       <div>
    //         <img 
    //           src="https://via.placeholder.com/800x400" 
    //           alt="Slide 2" 
    //           style={{ width: "100%", height: "100%", objectFit: "cover" }} 
    //         />
    //       </div>
    //       <div>
    //         <img 
    //           src="https://via.placeholder.com/800x400" 
    //           alt="Slide 3" 
    //           style={{ width: "100%", height: "100%", objectFit: "cover" }} 
    //         />
    //       </div>
    //     </Slider>
    //   </div>

    //   {/* Smaller Text Div */}
    //   <div style={{ width: "30%", padding: "15px", backgroundColor: "#f8f8f8", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
    //     <h2 style={{ fontSize: "1.5em" }}>Carousel Information</h2> {/* Slightly smaller heading */}
    //     <p style={{ fontSize: "1em", lineHeight: "1.4" }}>
    //       This section contains information or text related to the carousel. It's slightly smaller in size compared to before, allowing more space for the carousel itself.
    //     </p>
    //     <p style={{ fontSize: "1em", lineHeight: "1.4" }}>
    //       You can add more details here, such as links or images, and customize the content to suit your needs.
    //     </p>
    //   </div>
    // </div>


    <div>
      
    {/* Full-Page Image with Heading and Button */}
    <div style={{ 
        position: "relative", 
        width: "100%", 
        height: "100vh", 
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat"
      }}>
        <div style={{ 
          position: "absolute", 
          top: "50%", 
          left: "75%", 
          transform: "translate(-50%, -50%)", 
          textAlign: "center", 
          color: "green", 
          
        }}>
          <h1 style={{ fontSize: "2em", marginBottom: "20px" }}>Get Started Predicting your yeild</h1>
          <button style={{
            padding: "10px 20px",
            fontSize: "1.2em",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            <Link>Get Started</Link>
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


      {/* Third  Image */}
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
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2em", marginBottom: "15px" }}>Third Section Title</h2>
        <p style={{ fontSize: "1.2em", lineHeight: "1.6", color: "#555" }}>
          This is the Third text section. Continue to elaborate on the content, provide additional details, or any other information that relates to the second image.
        </p>
      </div>

      {/* Third  Image */}
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
