import React from "react";
import {
  RiArrowRightUpLine,
  RiDownloadLine,
  RiFacebookCircleFill,
  RiLinkedinFill,
  RiGithubLine,
  RiInstagramFill,
} from "@remixicon/react";
import profile_img from "../../assets/images/about/profile.png";
import SlideUp from "../animations/slideUp";
const About = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row align-items-center">
          {/*  START ABOUT IMAGE DESIGN AREA  */}
          <div className="col-lg-5">
            <SlideUp>
              <div className="about-image-part">
                <img src={profile_img} alt="About Me" />
                <h2>Nauman Majeed</h2>
                <div className="about-btn btn-one text-center">
                  <h6>Available for Work</h6>
                  <div className="circle pulse color-pulse"></div>
                </div>
                <div className="about-social text-center">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/naaumann/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <RiFacebookCircleFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/inaumanmajeed/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <RiInstagramFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/naaumann/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <RiLinkedinFill size={20} />
                        </i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/inaumanmajeed"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i>
                          <RiGithubLine size={20} />
                        </i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/*  END ABOUT IMAGE DESIGN AREA  */}
          {/*  START ABOUT TEXT DESIGN AREA  */}
          <div className="col-lg-7">
            <div className="about-content-part">
              <SlideUp>
                <h2>
                  Hello, I’m Nauman M., <span>Framer Finance Advisor</span> and
                  FrontEnd Designer Based in Pakistan.
                </h2>
                <div className="hero-btns">
                  <a href="#" className="theme-btn">
                    Download CV
                    <i>
                      <RiDownloadLine size={16} />
                    </i>
                  </a>
                </div>
              </SlideUp>
              <SlideUp>
                <ul className="list-style-one two-column">
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    HTML
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    CSS
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    JavaScript
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    React.js
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    TypeScript
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    Next.js
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    GitHub
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    Bootstrap
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    Mui
                  </li>
                  <li>
                    <i>
                      <RiArrowRightUpLine size={18} />
                    </i>
                    Tailwind CSS
                  </li>
                </ul>
              </SlideUp>
            </div>
          </div>
          {/*  END ABOUT TEXT DESIGN AREA  */}
        </div>
      </div>
    </section>
  );
};

export default About;
