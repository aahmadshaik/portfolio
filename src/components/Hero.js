import React from "react";
import "../Hero.css";
import myimg from "../assests/myimg.jpg";
const image = {
  photo: myimg,
};
const Hero = () => {
  return (
    <section id="home" className="hero">
      <img alt="myImage" src={image.photo}></img>
      <h1 className="font-effect-neon"> Shaik Ahmad Aslam</h1>
      <p>Front-End Developer | Entry-Level Developer</p>

      <div className="social">
        <a href="https://www.linkedin.com/in/ahmad-shaik-web-developer">
          <img
            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
            alt="linkedin logo"
          ></img>
        </a>
        <a href="https://github.com/aahmadshaik">
          <img
            src="https://img.icons8.com/?size=100&id=SzgQDfObXUbA&format=png&color=000000"
            alt="GitHub logo"
          ></img>
        </a>
        <a href="dm.wa.link/zh7ieh">
          <img
            src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
            alt="Wap logo"
          ></img>
        </a>
      </div>
    </section>
  );
};

export default Hero;
