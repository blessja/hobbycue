import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaGoogle, FaYoutube, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const iconStyle = {
    color: '#8064A2', // Set the color to #8064A2
  };

  return (
      <footer  style={{backgroundColor: '#FFFFFF'}} className="py-5 container">
        <div className="">
          <div className="row">
            {/* Hobbycue Column */}
            <div className="col-md-3 mb-4">
              <h5 className="font-weight-bold fs-4">Hobbycue</h5>
              <ul className=" custom-ul ">
                <li><a href="#" className="py-1 d-block">About Us</a></li>
                <li><a href="#" className="py-1 d-block">Our Services</a></li>
                <li><a href="#" className="py-1 d-block">Work with Us</a></li>
                <li><a href="#" className="py-1 d-block">FAQ</a></li>
                <li><a href="#" className="py-1 d-block">Contact Us</a></li>
              </ul>
            </div>

            {/* How Do I Column */}
            <div className="col-md-3 mb-4">
              <h5 className="font-weight-bold fs-5">How Do I</h5>
              <ul className="custom-ul">
                <li><a href="#" className="py-1 d-block">Sign Up</a></li>
                <li><a href="#" className="py-1 d-block">Add a Listing</a></li>
                <li><a href="#" className="py-1 d-block">Claim Listing</a></li>
                <li><a href="#" className="py-1 d-block">Post a Query</a></li>
                <li><a href="#" className="py-1 d-block">Add a Blog Post</a></li>
                <li><a href="#" className="py-1 d-block">Other Queries</a></li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="col-md-3 mb-4">
              <h5 className="font-weight-bold fs-5">Quick Links</h5>
              <ul className="custom-ul">
                <li><a href="#" className="py-1 d-block">Listings</a></li>
                <li><a href="#" className="py-1 d-block">Blog Posts</a></li>
                <li><a href="#" className="py-1 d-block">Shop / Store</a></li>
                <li><a href="#" className="py-1 d-block">Community</a></li>
              </ul>
            </div>

            {/* Social Media and Invite Friends Column */}
            <div className="col-md-3 mb-4">
              <h5 className="font-weight-bold fs-5">Social Media</h5>
              <ul className="list-inline d-flex justify-content-between">
                <li className="list-inline-item"><a href="#"><FaFacebookF style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaTwitter style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaInstagram style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaPinterestP style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaGoogle style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaYoutube style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaTelegramPlane style={iconStyle}/></a></li>
                <li className="list-inline-item"><a href="#"><FaEnvelope style={iconStyle}/></a></li>
              </ul>
              <h5 className="font-weight-bold mt-4">Invite Friends</h5>
              <form className="d-flex">
                <input type="email" className="form-control btn-3" placeholder="Email ID"/>
                <button style={{backgroundColor: "#8064A2"}} className="btn btn-primary inv" type="submit">Invite
                </button>
              </form>
            </div>
          </div>

          {/* Footer Bottom */}
          <div style={{backgroundColor: "#F7F5F9", height: "78px"}} className="row mt-5 container d-flex justify-content-around">
            <div className="col-md-6 col-lg-8 d-flex justify-content-center align-items-center">
              <p className="fw-bold">
                &copy; {new Date().getFullYear()} Purple Cues Private Limited
              </p>
            </div>
          </div>

        </div>
      </footer>
  );
};

export default Footer;
