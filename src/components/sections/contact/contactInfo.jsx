import React from "react";
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiClockwise2Fill, RiHourglass2Fill, RiQuestionFill, RiCalendarScheduleFill } from "@remixicon/react";

const ContactInfo = () => {
  return (
    <div className="col-lg-4">
      <div className="contact-content-part  wow fadeInUp delay-0-2s">
        <div className="single-contact wow fadeInUp" data-wow-delay=".2s">
          <div className="contact-icon">
            <i>
              <RiMapPinLine size={20} />
            </i>
          </div>
          <div className="Adjustments__contact">
            <h2>our office:</h2>
            <p>DHA, Lahore Pakistan</p>
          </div>
        </div>

        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
          <div className="contact-icon">
            <i>
              <RiPhoneLine size={20} />
            </i>
          </div>
          <div className="Adjustments__contact">
            <h2>contact number:</h2>
            <p>+92 314 6601881</p>
          </div>
        </div>

        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
          <div className="contact-icon">
            <i>
              <RiMailLine size={20} />
            </i>
          </div>
          <div className="Adjustments__contact">
            <h2>Email us:</h2>
            <p>inaumanmajeed@gmail.com</p>
          </div>
        </div>
        <div className="single-contact wow fadeInUp" data-wow-delay=".8s">
          <div className="contact-icon">
            <i>
              <RiHourglass2Fill size={20} />
            </i>
          </div>
          <div className="Adjustments__contact">
            <h2>Response Time:</h2>
            <p>Within 2 hours</p>
          </div>
        </div>
        <div className="single-contact wow fadeInUp" data-wow-delay=".8s">
          <div className="contact-icon">
            <i>
              <RiCalendarScheduleFill size={20} />
            </i>
          </div>
          <div className="Adjustments__contact">
            <h2>Schedule a meeting:</h2>
            <p>
              Use the form to propose a meeting. I'll confirm the details shortly. Thank you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
