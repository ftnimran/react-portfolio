import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import backGround from '../assets/image/background_image01.png'

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Web Developer",
        "Frontend Developer.",
        "Backend Developer.",
        "UI &amp; UX Designer."
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true
    });

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Imran Ali</h1>
        <h3>
          And I'm a <span ref={typedRef}></span>
        </h3>
        <p>
          I'm a passionate MERN Stack Developer with a strong focus on building modern, scalable, and user-friendly web applications. I love turning creative ideas into fully functional digital products using MongoDB, Express.js, React.js, and Node.js.
        </p>
        <div className="home-sci">
          <a
            href="https://www.linkedin.com/in/imran-ali-214373241"
            target="_blank"
            style={{ "--i": 7 }}
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/ftnimran"
            target="_blank"
            style={{ "--i": 8 }}
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/ftn_imran/"
            target="_blank"
            style={{ "--i": 9 }}
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://wa.me/7783037329"
            target="_blank"
            style={{ "--i": 10 }}
          >
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>
        <a href="#" className="btn-box">
          More About Me
        </a>
      </div>
      <div className="home-content">
        <img src={backGround} alt="Img" />
      </div>
    </main>
  );
};

export default Hero;
