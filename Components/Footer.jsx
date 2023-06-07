import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className=" bg-black" style={{ padding: "20px", color: "white" }}>
        <div>
          <div className="row">
            <div className="col-md-2 col-sm-4">
              <h3>About Us</h3>

              <p>
                Unlock your linguistic potential with our premier language
                training institute. We offer expert instruction in a variety of
                global languages, empowering you to communicate confidently
                across cultures. Join us and embark on a transformative journey
                to fluency.
              </p>
            </div>
            <div className="col-md-2 col-sm-4">
              <h3>Journey with World Tongues</h3>
              <p>
                Join World Tongues and embark on a transformative journey to
                fluency. Explore our diverse range of language courses,
                experience our nurturing learning environment, and unlock the
                doors to new opportunities.
              </p>
            </div>
            <div className="col-md-2 col-sm-4">
              <h3>Unlock the Doors to New Opportunities</h3>
              <p>
                we empower you to unlock these doors of opportunity. Our
                comprehensive language courses are designed to equip you with
                the skills and cultural understanding needed to thrive in todays
                globalized society.
              </p>
            </div>
            <div className="col-md-2 col-sm-4">
              <h3>StudentSupport</h3>
              <p>
                At World Tongues, we prioritize your success and well-being. Our
                dedicated team provides comprehensive student support, offering
                personalized guidance, resources, and assistance every step of
                the way
              </p>
            </div>
            <div className="col-md-2 col-sm-4">
              <h3>Contact Us</h3>
              <p>E-37 ,Nayanagar</p>
              <p>Dhamrai,Dhaka</p>
              <p>Email: shahadat10023@gmail.com</p>
              <p>Phone: 01676420675</p>
            </div>
            <div className="col-md-2 col-sm-4">
              <h3>Follow Us</h3>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.facebook.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="fb.png"
                      alt=""
                      style={{ width: 27, height: 27, borderRadius: "50%" }}
                    ></img>
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="twit.png"
                      alt=""
                      style={{ width: 27, height: 27, borderRadius: "50%" }}
                    ></img>
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="github.png"
                      alt=""
                      style={{ width: 27, height: 27, borderRadius: "50%" }}
                    ></img>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    className="text-decoration-none text-white"
                  >
                    <img
                      src="instra.png"
                      alt=""
                      style={{ width: 27, height: 27, borderRadius: "50%" }}
                    ></img>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <img
                  src="titleLogo.webp"
                  alt=""
                  style={{ width: 27, height: 27, borderRadius: "50%" }}
                  className="me-2"
                ></img>
                World Tongues. copyright: All rights reserved.
                {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
