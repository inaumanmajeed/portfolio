// Typewriter.js
import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = () => {
  return (
    <Typewriter
      options={{
        strings: ["Web Developer", "Webflow Developer", "FrontEnd Developer"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterComponent;
