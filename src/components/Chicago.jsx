import React from "react";
import img1 from "../images/Mario and Adrian A.jpg";
import img2 from "../images/Mario and Adrian b.jpg";
import './Chicago.css'

const Chicago = () => {
  return (
    <>
      <div className="chicago">
        <section className="left-chicago">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            veritatis iusto voluptatum ad labore sunt officiis nam excepturi non
            dignissimos, dolorum laborum quis, deserunt eum commodi. Quas,
            possimus! Totam, repellat.
          </p>
        </section>
        <section className="right-chicago">
          <img src={img1} alt="chef" className="img1" />
          <img src={img2} alt="chef" className="img2" />
        </section>
      </div>
    </>
  );
};

export default Chicago;
