import React from "react";
import "./home.css";
import {
  competetiveAdvantage,
  projects,
  technologies,
  topCollectibles,
  topDevelopers,
} from "../../data";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row home-topbar">
          <div className="col-lg-6 col-md-6 col-sm-12 left-col mt-5" style={{flexWrap: "wrap"}}>
            <h1 className="type-writer white-color mt-3" >Buy, sell, and showcase NFTs</h1>
            <p className="white-color mt-2 mb-5 ">from leading creators and brands</p>
            <div className="home-btns ">
              <button className="btn btn-navbar me-4 ">View Drops</button>
              <button className="btn btn-navbar">Nft Marketplace</button>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 right-col">
            <h1 className="white-color text-center mb-2">Top Collectibles</h1>
            <hr className="white-color" />
            <div className="row">
              {topCollectibles.map((collectibles) => (
                <>
                  <div className="col-6 col-lg-4 col-md-4 col-sm-6 text-center">
                    <img
                      src={collectibles.img}
                      className="collectibles-img"
                      alt=""
                    />
                    <p className="white-color collectibles-name">
                      {collectibles.name}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="top-developers mt-4 text-center">
          <h1 className="white-color">Top Developrs of Our Team</h1>
          <hr className="white-color mt-4" />

          <div className="developers-team">
            <div className="row">
              {topDevelopers.map((developers) => (
                <>
                  <div className=" col-lg-2 col-md-2 col-sm-6 col-6">
                    <img src={developers.img} className="dev-img" alt="" />
                    <h3 className="white-color mt-2">{developers.name}</h3>
                    <button className="btn-navbar btn mb-4">Linkedin</button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="projects mt-5">
          <h1 className="white-color text-center mb-5">
            Projects we Mostly work on
          </h1>
          <hr className="white-color mt-3" />

          <div className="top-projects">
            <div className="row">
              {projects.map((project) => (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={project.img} className="pro-img" alt="" />
                    <h3 className="white-color mt-2 mb-2">{project.name}</h3>
                    <button className="btn-navbar btn mt-2 mb-2">
                      {project.button}
                    </button>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="technologies mt-5">
          <h1 className="white-color text-center mt-4">
            Technologies we work in
          </h1>
          <hr className="white-color mt-5" />

          <div className="row">
            {technologies.map((technologies) => (
              <div className="col-lg-4 col-md-4 col sm-12 text-center mt-4 mb-4">
                <img src={technologies.img} className="tech-img" alt="" />
              </div>
            ))}
          </div>
        </div>

        <div className="competetive-advantages mt-5">
          <h1 className="white-color text-center mt-5">
            Competetive Advantages
          </h1>
          <hr className="white-color mt-5" />

          <div className="row">
            {competetiveAdvantage.map((competetiveAdvantage) => (
              <div className="col-lg3 col-md-3 col-sm-6 text-center">
                <img
                  src={competetiveAdvantage.img}
                  className="comp-img"
                  alt=""
                />
                <h2 className="white-color mb-2 mb-2">
                  {competetiveAdvantage.heading}
                </h2>
                <p className="white-color mt-2">{competetiveAdvantage.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-md-6 col-sm-12  text-center pt-4 pb-4"  >
            <img src="/images/eth.png" alt="" style={{ width:"500px", height:"250px"   }} />
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
    </>
  );
};

export default Home;
