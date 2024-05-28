import React from "react";
import add from "../images/Add.png";
import add2 from "../images/Add2.png";
import profile from "../images/profile.png";
import audioTrack from "../images/AudioTrack.png";

function Testimonial() {
  return <>
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center main-1">
        <div className="col-12 custom-add mx-3">
          <div className="icons d-flex align-items-center ">
            <i><img src={add} alt="add button"/></i>
            <p className="fw-bold ms-3 mb-0">
              Testimonials
            </p>
          </div>
          <div className="icons mt-4 d-flex align-items-center ">
            <p className="fs-6">
              Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know
              someone who should be on hobbycue? Go ahead and Add your Own page
            </p>
          </div>
          <div className="icons mt-4 mt-md-0  d-flex align-items-center ">
            <button type="submit" className="btn-2 btn-primary mt-3">Add new</button>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center main-2">
        <div className="col-12 custom-add2 mt-5">
          <div className="icons d-flex align-items-center ">
            <i><img src={add2} alt="add button"/></i>
            <p className="fw-bold ms-3 mb-0">
              Testimonials
            </p>
          </div>
          <div className="icons mt-4 d-flex align-items-center ">
            <p className="fs-6 fw-light">
              In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or
              connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch
              with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be assured is going to be of great quality as
              it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to
              be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent
              idea and I highly recommend it.
            </p>
          </div>
          <div className="container mt-4">
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-12 col-md-6 order-2 order-md-1 mt-4 mt-md-0 audio_track">
                <img className="img-fluid" src={audioTrack} alt="audio track"/>
              </div>
              <div
                  className="col-12 col-md-6 order-1 order-md-2 d-flex align-items-center justify-content-md-end content">
                <div>
                  <img className="img-fluid" src={profile} alt="profile pic"/>
                </div>
                <div className="d-flex align-items-start flex-column ms-2 fw-light fs-6 text-start">
                  <p style={{color: "#8064A2"}} className="mb-0 fs-5 fw-bold">Shubha Nagarajan</p>
                  <p style={{color: "#0096C8"}} className="mb-0">Classical Dancer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>;
}

export default Testimonial;
