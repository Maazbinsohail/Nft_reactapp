import React from "react";
import "./project.css";
import { projects, upComingProjects } from "../../data";

const Projects = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="projects-top">
          <h2  className=" white-color text-center mt-5">
            Never miss an interesting NFT drop again. Subscribe to NFT Calendar
            and stay tuned to the biggest announcements.
          </h2>
        </div>

        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 text-center">
            <img
              src="images/map.png"
              alt=""
              className="mt-4"
              style={{ width: "150px", height: "150px" }}
            />
            <h3 className="white-color mt-3">CryptoPunks</h3>
            <h6 className="white-color mt-2">Eth Chain</h6>

            <div className="projects-btn d-flex flex-column ">
              <button className="btn-navbar btn mt-2 mb-2">Chains</button>
              <button className="btn-navbar btn mt-2 mb-2">Floor Price</button>
              <button className="btn-navbar btn mt-2 mb-2">Volume</button>
              <button className="btn-navbar btn mt-2 mb-2">Trade</button>
            </div>
          </div>

          <div className="col-lg-10 col-md-10 col-sm-12">
            <div className="row">
              {projects.map((project) => (
                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
                  <img src={project.img} className="project-img" alt="" />
                  <h5 className="white-color mt-2 mb-2">{project.name}</h5>
                  <button
                    className="btn-navbar btn mt-2 mb-2"
                    style={{ width: "120px" }}
                  >
                    {project.button}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="white-color" />
        
        <div>
          <h2 className="white-color text-center mt-5">Up Coming Projects</h2>
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-12 text-center">
              <img
                src="images/secure.png"
                alt=""
                className="mt-4"
                style={{ width: "150px", height: "150px" }}
              />
              <h6 className="white-color mt-4">Safe & Secure</h6>
              <img
                src="images/Link.png "
                alt=""
                className="mt-5"
                style={{ width: "150px", height: "150px" }}
              />
              <h6 className="white-color mt-4">Hidden Identity</h6>
            </div>

            <div className="col-lg-10 col-md-10 col-sm-12">
              <div className="row">
                {upComingProjects.map((upComingProjects) => (
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 mt-4">
                    <img src={upComingProjects.img} className="project-img" alt="" />
                    <h5 className="white-color mt-2 mb-2">{upComingProjects.name}</h5>
                    <button className="btn-navbar btn mt-2 mb-2" style={{ width: "120px" }}>{upComingProjects.button}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
