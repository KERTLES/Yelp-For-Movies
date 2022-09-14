 // eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGitlab } from "react-icons/si";
 // eslint-disable-next-line
import { NavLink } from "react-router-dom";

function Footer(props) {
    
    return(
<>
<footer className="text-center text-lg-start bg-dark text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="https://facebook.com/yoovies" target="blank_" className="me-4 text-reset">
        <i className="btn btn-dark me-2"><BsFacebook style={{fontSize: "50px", color: "#3b5998"}} /></i>
      </a>
      <a href="https://instagram.com/yoovies" target="blank_" className="me-4 text-reset">
        <i className="btn btn-dark me-2"><BsInstagram style={{fontSize: "50px", color: "#458eff"}} /></i>
      </a>
      <a href="https://gitlab.com/yoovies/yelp-for-movies" target="blank_" className="me-4 text-reset">
        <i className="btn btn-dark me-2"><SiGitlab style={{fontSize: "50px", color: "#FC6D26"}} /></i>
      </a>
      <div className="dropdown">
      <i className="btn btn-dark me-2 dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsLinkedin style={{fontSize: "50px", color: " #0A66C2"}} /></i>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
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
          <h6 className="text-uppercase fw-bold mb-4">About us</h6>
          <p>
          Yoovies is dedicated to providing movie-goers the best place to share their opinions on up and coming movies.
          </p>
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
          <p>Los Angeles, CA  90013, US</p>
          <p>
            Yoovies@gmail.com
          </p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.0)"}}>
  <a href={`${process.env.PUBLIC_URL}/`}>
    <img src={`${process.env.PUBLIC_URL}/yoovieswhite.png`} alt="logo" width="200" height="auto" />
  </a>
  </div>
</footer>
</>




    )
}

export default Footer;

