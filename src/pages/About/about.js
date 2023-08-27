import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="white-color text-center mt-5 mb-5">About Us</h1>
      <div className="about-card">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <h2 className="white-color">
              On a mission to environmentalsustainability with NFT's
            </h2>
            <p className="white-color">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              vel ea beatae neque reiciendis sint Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Explicabo minima repellendus
              sapiente aliquid cum itaque.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 text-center">
            <img
              src="/images/meta11.webp"
              alt=""
              className="tech-img"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      <h1 className="text-center white-color mt-5 mb-5">
        NFT Gen Marketplace with everything for everyone
      </h1>
      <div className="text-center mb-5 mt-5">
        <video
          className="background-video" type="video/mp4" autoPlay muted loop style={{ width: "500px" }}>
          <source src="/images/about.mp4" type="video/mp4" />

        </video>
      </div>

      <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12   text-center pt-4 pb-4"  >
            <img src="/images/meta10.jpg" alt="" style={{ width:"450px", height:"250px"   }} />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 pt-4 pb-4">
            <h1 className="white-color">
              Create, Sell, Well and collect your best NFTs with us very fast
            </h1>
            <p className="white-color">
              The world’s first and largest digital marketplace for crypto
              collectibles and non-fungible tokens (NFTs). Buy, sell, and
              discover exclusive digital items.
            </p>
            <button className="btn btn-navbar">Connect Wallet</button>
          </div>
        </div>

      
    </div>
  );
};

export default About;
