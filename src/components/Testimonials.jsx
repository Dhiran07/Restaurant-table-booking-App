import React from "react";
import { AiFillStar } from "react-icons/ai";
import avatar1 from "../images/avatar1.jpg";
import avatar2 from "../images/avatar2.jpg";
import avatar3 from "../images/avatar3.jpg";
import avatar4 from "../images/avatar4.jpg";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <>
      <section className="testimonials">
        <h1>Testimonials</h1>

        <section className="test-cards">
          <div className="test-card">
            <div className="test-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="test-profile">
              <img src={avatar1} alt="" />
              <h4>Samir</h4>
            </div>

            <p className="review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              veritatis iusto voluptatum ad labore sunt officiis nam excepturi
              non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas,
              possimus! Totam, repellat.
            </p>
          </div>
          {/* Start of test 2 */}
          <div className="test-card">
            <div className="test-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="test-profile">
              <img src={avatar2} alt="" />
              <h4>Yusron</h4>
            </div>

            <p className="review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              veritatis iusto voluptatum ad labore sunt officiis nam excepturi
              non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas,
              possimus! Totam, repellat.
            </p>
          </div>
          {/* Start of test 3 */}
          <div className="test-card">
            <div className="test-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="test-profile">
              <img src={avatar3} alt="" />
              <h4>Shami</h4>
            </div>

            <p className="review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              veritatis iusto voluptatum ad labore sunt officiis nam excepturi
              non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas,
              possimus! Totam, repellat.
            </p>
          </div>

          {/* Start of test 4 */}
          <div className="test-card">
            <div className="test-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="test-profile">
              <img src={avatar4} alt="" />
              <h4>Aleem</h4>
            </div>

            <p className="review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              veritatis iusto voluptatum ad labore sunt officiis nam excepturi
              non dignissimos, dolorum laborum quis, deserunt eum commodi. Quas,
              possimus! Totam, repellat.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Testimonials;
