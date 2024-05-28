import React from "react";
import image_1 from "../images/image_1.png";


function End() {
  return <>
    <div style={{backgroundColor: "#F7FDFF"}} className="end container mt-4">
      <div className="row d-flex align-items-center justify-content-center ">
        <div className="col-12 custom-add2 mt-5">
          <div className="icons ">
            <div>
              <h3 className="fw-semibold fst-italic">Your <span style={{color: "#8064A2"}}>Hobby</span>, Your <span
                  style={{color: "#0096C8"}}>Community...</span></h3>
            </div>
            <div className="icons mt-4 mt-md-0 ">
              <button style={{backgroundColor: "#8064A2", color: "#fff"}} type="submit"
                      className="btn-2 btn-primary mt-3 fw-bold">Get started
              </button>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8 col-xl-6 d-flex align-items-center icons"
                   style={{height: "302px", width: "1240px", backgroundColor: "#F7FDFF"}}>
                <img className="img-fluid" src={image_1} alt="people"/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>;
}

export default End;
