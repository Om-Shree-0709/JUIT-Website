import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import u1 from "../../assets/user-1.png";
import u2 from "../../assets/user-2.png";
import u3 from "../../assets/user-3.png";
import u4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const totalSlides = 4;

  const slideForward = () => {
    if (tx > -100 * (totalSlides - 1)) {
      // Move to next slide if not at the last slide
      tx -= 100;
    } else {
      // If at the last slide, wrap to the first slide
      tx = 0;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      // Move to previous slide if not at the first slide
      tx += 100;
    } else {
      // If at the first slide, wrap to the last slide
      tx = -100 * (totalSlides - 1);
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u1} alt="" />
                <div>
                  <h3>Name</h3>
                  <span>Currently Working In</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusamus aut labore? Libero neque sit harum ducimus atque
                dolores et officiis quia at cumque, incidunt aspernatur repellat
                reiciendis repudiandae perspiciatis iure necessitatibus facilis
                asperiores aliquid maxime optio. Suscipit non, corporis illum,
                iste maiores quo voluptatibus, nesciunt a repellat quisquam
                quod!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u2} alt="" />
                <div>
                  <h3>Name</h3>
                  <span>Currently Working In</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusamus aut labore? Libero neque sit harum ducimus atque
                dolores et officiis quia at cumque, incidunt aspernatur repellat
                reiciendis repudiandae perspiciatis iure necessitatibus facilis
                asperiores aliquid maxime optio. Suscipit non, corporis illum,
                iste maiores quo voluptatibus, nesciunt a repellat quisquam
                quod!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u3} alt="" />
                <div>
                  <h3>Name</h3>
                  <span>Currently Working In</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusamus aut labore? Libero neque sit harum ducimus atque
                dolores et officiis quia at cumque, incidunt aspernatur repellat
                reiciendis repudiandae perspiciatis iure necessitatibus facilis
                asperiores aliquid maxime optio. Suscipit non, corporis illum,
                iste maiores quo voluptatibus, nesciunt a repellat quisquam
                quod!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u4} alt="" />
                <div>
                  <h3>Name</h3>
                  <span>Currently Working In</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusamus aut labore? Libero neque sit harum ducimus atque
                dolores et officiis quia at cumque, incidunt aspernatur repellat
                reiciendis repudiandae perspiciatis iure necessitatibus facilis
                asperiores aliquid maxime optio. Suscipit non, corporis illum,
                iste maiores quo voluptatibus, nesciunt a repellat quisquam
                quod!
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={u1} alt="" />
                <div>
                  <h3>Name</h3>
                  <span>Currently Working In</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                accusamus aut labore? Libero neque sit harum ducimus atque
                dolores et officiis quia at cumque, incidunt aspernatur repellat
                reiciendis repudiandae perspiciatis iure necessitatibus facilis
                asperiores aliquid maxime optio. Suscipit non, corporis illum,
                iste maiores quo voluptatibus, nesciunt a repellat quisquam
                quod!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
