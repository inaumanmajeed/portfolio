import React, { useEffect, useState } from "react";
import SlideUp from "../animations/slideUp";
import TypewriterComponent from "../shared/TypeWriter";

const Banner = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <section id="home" className="main-hero-area">
      <div className="container">
        <div className="container-inner">
          <div className="row align-items-center">
            <div className="col-lg-12 col-sm-12">
              {/*  START HERO DESIGN AREA  */}
              <SlideUp>
                <div className="hero-content rmb-25 text-center">
                  <h1>
                    I'm <span>Nauman</span> M.
                  </h1>
                  <div className="job">
                    {isMobile ? (
                      <TypewriterComponent />
                    ) : (
                      <>
                        <span>Web Developer</span>
                        <span>Webflow Developer</span>
                        <span>FrontEnd Developer</span>
                      </>
                    )}
                  </div>
                </div>
              </SlideUp>
              {/*  / END HERO DESIGN AREA  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
