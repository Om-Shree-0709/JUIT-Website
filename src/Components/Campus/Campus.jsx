import React from "react";
import "./Campus.css";
import g1 from "../../assets/1.jpg";
import g2 from "../../assets/2.jpg";
import g3 from "../../assets/3.jpg";
import g4 from "../../assets/4.jpg";
import g5 from "../../assets/5.jpg";
import g6 from "../../assets/6.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={g1} alt="" />
        <img src={g2} alt="" />
        <img src={g3} alt="" />
        <img src={g4} alt="" />
        <img src={g5} alt="" />
        <img src={g6} alt="" />
      </div>
      <button className="btn dark-btn">
        See More Here <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
