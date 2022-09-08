import React, { useState, useEffect } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGitlab } from "react-icons/si";
import { NavLink } from "react-router-dom";

function Footer(props) {
    
    return(
<>
<footer className="text-center text-lg-start bg-light text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="https://facebook.com/yoovies" target="blank_" className="me-4 text-reset">
        <i className="btn btn-light me-2"><BsFacebook style={{fontSize: "50px", color: "#3b5998"}} /></i>
      </a>
      <a href="https://instagram.com/yoovies" target="blank_" className="me-4 text-reset">
        <i className="btn btn-light me-2"><BsInstagram style={{fontSize: "50px", color: "#458eff"}} /></i>
      </a>
      <a href="https://gitlab.com/yoovies/yelp-for-movies" target="blank_" className="me-4 text-reset">
        <i className="btn btn-light me-2"><SiGitlab style={{fontSize: "50px", color: "#FC6D26"}} /></i>
      </a>
      <div className="dropdown">
      <i className="btn btn-light me-2 dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsLinkedin style={{fontSize: "50px", color: " #0A66C2"}} /></i>
      <ul className="dropdown-menu"  style={{ left: "unset", right: "0" }} aria-labelledby="dropdownMenuButton">
        <li>
    <a className="dropdown-item" href="https://www.linkedin.com/in/jiang-kelly/" target="blank_">Kelly</a>
    </li>
    <li>
    <a className="dropdown-item" href="https://www.linkedin.com/in/lndrnz/" target="blank_">Lander</a>
    </li>
    <li>
    <a className="dropdown-item" href="https://www.linkedin.com/in/mihso-soap/" target="blank_">Matthew</a>
    </li>
    <li>
    <a className="dropdown-item" href="https://www.linkedin.com/in/myolin-kha-58396491/" target="blank_">Myolin</a>
    </li>
    <li>
    <a className="dropdown-item" href="https://www.linkedin.com/in/nikanshamaharaj/" target="blank_">Nikansha</a>
    </li>
    </ul>
  </div>
      </div>
  

  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>About us
          </h6>
          <p>
          Yovies is dedicated to providing movie-goers the best place to share their opinions on up and coming movies.
          </p>
        </div>
        {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
          <p><i className="fas fa-home me-3"></i> Los Angeles, CA  90013, US</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            Yoovies@gmail.com
          </p>
          {/* <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p> */}
          {/* <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p> */}
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.0)"}}>
  <img src="/yooviesblack.png" alt="logo" width="200" height="auto" />
<a className="text-reset fw-bold" href="yovies.com">Yoovies.com</a>
  </div>
</footer>
</>




    )
}

export default Footer;

