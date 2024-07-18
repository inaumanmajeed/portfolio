import React, { useState } from "react";
import { RiMailLine } from "@remixicon/react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    const form = event.target;
    if (form.checkValidity()) {
      // Perform form submission logic here (e.g., API call, etc.)
      // For demonstration, simulate successful submission
      setTimeout(() => {
        setSubmitted(true);
      }, 1000);
    } else {
      // If the form is invalid, set formErrors state to trigger error display
      const errors = {};
      for (let key of form.elements) {
        if (key.tagName === "INPUT" || key.tagName === "TEXTAREA") {
          if (!key.validity.valid) {
            if (key.type === "email") {
              if (key.validity.valueMissing) {
                errors[key.name] = "Please enter your Email.";
              } else if (key.validity.typeMismatch) {
                errors[key.name] = "Please enter a valid Email Address.";
              }
            } else {
              errors[key.name] =
                "Please enter your " +
                key.name.charAt(0).toUpperCase() +
                key.name.slice(1).toLowerCase();
            }
          }
        }
      }
      setFormErrors(errors);
    }
  };

  return (
    <div className="col-lg-8">
      <div
        className={`contact-form contact-form-area wow fadeInUp delay-0-4s ${
          submitted ? "submitted" : ""
        }`}
      >
        {!submitted ? (
          <form
            id="contactForm"
            className={`contactForm ${submitted ? "was-validated" : ""}`}
            name="contactForm"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="row">
              <div className="col-md-6">
                <div
                  className={`form-group ${formErrors.name ? "has-error" : ""}`}
                >
                  <label
                    htmlFor="name"
                    className={formErrors.name ? "error-label" : ""}
                  >
                    {formErrors.name || "Full Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control ${
                      formErrors.name ? "is-invalid" : ""
                    }`}
                    defaultValue=""
                    placeholder="Name"
                    required
                  />
                  <div className="invalid-feedback">{formErrors.name}</div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className={`form-group ${
                    formErrors.email ? "has-error" : ""
                  }`}
                >
                  <label
                    htmlFor="email"
                    className={formErrors.email ? "error-label" : ""}
                  >
                    {formErrors.email || "Email Address"}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control ${
                      formErrors.email ? "is-invalid" : ""
                    }`}
                    defaultValue=""
                    placeholder="hello@email.com"
                    required
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  />
                  <div className="invalid-feedback">{formErrors.email}</div>
                </div>
              </div>
              <div className="col-md-12">
                <div
                  className={`form-group ${
                    formErrors.message ? "has-error" : ""
                  }`}
                >
                  <label
                    htmlFor="message"
                    className={formErrors.message ? "error-label" : ""}
                  >
                    {formErrors.message || "Your Message"}
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    id="message"
                    className={`form-control ${
                      formErrors.message ? "is-invalid" : ""
                    }`}
                    rows="4"
                    placeholder="Write Your message"
                    required
                  ></textarea>
                  <div className="invalid-feedback">{formErrors.message}</div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button type="submit" className="theme-btn">
                    Send Me Message{" "}
                    <i>
                      <RiMailLine size={16} />
                    </i>
                  </button>
                  <div id="msgSubmit" className="hidden"></div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div id="msgSubmit" className="thank-you-message">
            Thank you for your message!
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
