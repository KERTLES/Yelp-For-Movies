import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGitlab } from "react-icons/si";
import Stack from 'react-bootstrap/Stack';


function Footer() {
  return(
    <>
    <footer className="text-lg-start bg-dark text-light border-top">
      <div className="mx-5 text-md-start mt-3 pt-2">
        <div className="row justify-content-center mt-2">
          <div className="col-xl-3 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">About us</h6>
            <p>
            Yoovies is dedicated to providing movie-goers the best place to share their opinions on up and coming movies.
            </p>
          </div>
      
          <div className="col-xl-2 mx-auto mb-2">
            <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
            <p>Los Angeles, CA  90013, US</p>
            <p>
              Yoovies@gmail.com
            </p>
          </div>

          <div className="col-xl-4 mx-auto mb-2">
            <h6 className="fw-bold mb-4">Get connected with us on social networks:</h6>
            <Stack direction="horizontal" gap={4}>
              <div>
                <a href="https://facebook.com/yoovies" target="blank_" className="mx-4 text-reset">
                  <i className="btn btn-dark me-2"><BsFacebook style={{fontSize: "45px", color: "#3b5998"}} /></i>
                </a>
              </div>
              <div>
                <a href="https://instagram.com/yoovies" target="blank_" className="me-4 text-reset">
                  <i className="btn btn-dark me-2"><BsInstagram style={{fontSize: "45px", color: "#458eff"}} /></i>
                </a>
              </div>
              <div>
                <a href="https://gitlab.com/yoovies/yelp-for-movies" target="blank_" className="me-4 text-reset">
                  <i className="btn btn-dark me-2"><SiGitlab style={{fontSize: "45px", color: "#FC6D26"}} /></i>
                </a>
              </div>
              <div className="dropdown">
                <i className="btn btn-dark me-2 dropdown-toggle " type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><BsLinkedin style={{fontSize: "45px", color: " #0A66C2"}} /></i>
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
            </Stack>
          </div>

          <div className="col-xl-2 mx-auto mb-2">
            <a href={`${process.env.PUBLIC_URL}/`}>
              <img src={`${process.env.PUBLIC_URL}/yoovieswhite.png`} alt="logo" width="200" height="auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;

