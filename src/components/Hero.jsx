import React from "react";
import { Link } from "react-router-dom";
import "../components/Hero.css";
import RestImage from "../images/restauranfood.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <section className="left">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            <button className="btn">Reserve a Table</button>
          </Link>
        </section>
        <section className="right">
          <img src={RestImage} alt="food" />
        </section>
      </div>
    </>
  );
};

export default Hero;
