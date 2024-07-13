import React from "react";
import "./Programs.css";
import p1 from "../../assets/program-1.png";
import p2 from "../../assets/program-2.png";
import p3 from "../../assets/program-3.png";
import pi1 from "../../assets/program-icon-1.png";
import pi2 from "../../assets/program-icon-2.png";
import pi3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={p1} alt="" />
        <div className="caption">
          <img src={pi1} alt="" />
          <p>Undergraduate Program</p>
        </div>
      </div>

      <div className="program">
        <img src={p2} alt="" />
        <div className="caption">
          <img src={pi2} alt="" />
          <p>Graduation Program</p>
        </div>
      </div>

      <div className="program">
        <img src={p3} alt="" />
        <div className="caption">
          <img src={pi3} alt="" />
          <p>Phd Program</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
