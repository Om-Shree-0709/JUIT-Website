import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          At Jaypee University of Information Technology (JUIT), we are
          dedicated to providing an exceptional education that empowers our
          students to excel in their chosen fields. Our state-of-the-art
          facilities, innovative curriculum, and esteemed faculty ensure that
          every student has the resources they need to succeed.
        </p>
        <p>
          Our university offers a diverse range of programs designed to meet the
          needs of today's competitive job market. From cutting-edge research
          opportunities to hands-on learning experiences, JUIT is committed to
          fostering a dynamic and supportive learning environment.
        </p>
        <p>
          Join us at JUIT and become part of a vibrant community of scholars,
          innovators, and leaders. Together, we are shaping the future and
          making a positive impact on the world.
        </p>
      </div>
    </div>
  );
};

export default About;
