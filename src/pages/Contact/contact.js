import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="top-bar">
          <h2 className="white-color mt-5 mb-5 text-center">
            Feel free to reach out
          </h2>
          <div className="row">
            <div className="col-lg-3 col-md-3 com-sm-12 text-center">
              <i
                class="fa fa-phone mb-3"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
              <h4 className="white-color">Phone</h4>
              <p className="white-color">+92 9876543210</p>
            </div>
            <div className="col-lg-3 col-md-3 com-sm-12 text-center">
              <i
                class="fa fa-envelope mb-3"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
              <h4 className="white-color">Email</h4>
              <p className="white-color">maazbinsohail15@gmail.com</p>
            </div>
            <div className="col-lg-3 col-md-3 com-sm-12 text-center">
              <i
                class="fa fa-github mb-3"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
              <h4 className="white-color">Github</h4>
              <p className="white-color">Maazbinsohail</p>
            </div>

            <div className="col-lg-3 col-md-3 com-sm-12 text-center">
              <i
                class="fa fa-map-marker mb-3"
                style={{ color: "white", fontSize: "30px" }}
              ></i>
              <h4 className="white-color">Location</h4>
              <p className="white-color">karachi</p>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
        <h2 className="white-color text-center mt-5 mb-3">Drop Your Message</h2>
        <p className="white-color text-center">Freely contact with us anytime. We are available here for you</p>
          <form>
            <div class="form-group">
              <div className="row">
                <div className="col-6">
                  <label for="exampleInputEmail1" className="white-color mb-2" >Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp" style={{borderRadius:"10px"}}/>
                </div>

                <div className="col-6">
                  <div class="form-group">
                    <label className="white-color mb-2" for="exampleInputPassword1">
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1" style={{borderRadius:"10px"}}/>
                  </div>
                </div>
              </div>

              <div className="row">
              <div className="col-12">
              <label for="exampleInputEmail1" className="white-color mb-2 mt-2" >Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" style={{borderRadius:"10px"}}/>
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className="white-color mb-2 mt-2" >Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" style={{borderRadius:"10px"}}/>
              
                </div>
                </div>
                <div className="row">
                <div className="col-12">
                <label for="exampleInputEmail1" className="white-color mb-2 mt-2" >Message</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp" style={{height:"200px", borderRadius:"10px" }}/>
              
                </div>
                </div>
              </div>
           

              <div class="button-container">
              <button type="submit" class="btn btn-navbar  mt-3 mb-4">
              Send Message
            </button>
            </div>
            
           
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
