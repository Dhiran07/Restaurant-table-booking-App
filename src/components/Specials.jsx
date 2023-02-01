import React from "react";
import "./Specials.css";
import greeksalad from "../images/greek salad.jpg";
import Bruschetta from "../images/bruchetta.svg";
import dessert from "../images/lemon dessert.jpg";
import { GiScooter } from "react-icons/gi";

const Specials = () => {
  return (
    <>
      <div className="specials">
        <section className="specials-top">
          <h1>This Week's Specials!</h1>
          <button className="btn">Online Menu</button>
        </section>
        <section className="specials-card">
          {/* Start of Card 1 */}
          <div className="card">
            <img src={greeksalad} alt="" />

            <div className="item">
              <h3 className="item-name">Greek Salad</h3>
              <p className="item-price">$12.99</p>
            </div>

            <p className="item-description">
              The famous greek salad of crispy lettuce,peppers,olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>

            <div className="delivery">
              <div className="order">Order a delivery</div>
              <GiScooter className="icon-scooter" />
            </div>
          </div>
          {/* End of Card 1 */}

          <div className="card">
            <img src={Bruschetta} alt="" />

            <div className="item">
              <h3 className="item-name">Bruschetta</h3>
              <p className="item-price">$5.99</p>
            </div>

            <p className="item-description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil; made perfect for
              an evening dinner.
            </p>

            <div className="delivery">
              <div className="order">Order a delivery</div>
              <GiScooter className="icon-scooter" />
            </div>
          </div>

          {/* End of Card 2 */}

          <div className="card">
            <img src={dessert} alt="" />

            <div className="item">
              <h3 className="item-name">Lemon Dessert</h3>
              <p className="item-price">$5.00</p>
            </div>

            <p className="item-description">
              This comes straight from Grandma's recipe book. Every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>

            <div className="delivery">
              <div className="order">Order a delivery</div>
              <GiScooter className="icon-scooter" />
            </div>
          </div>

          {/* End of Card 3 */}
        </section>
      </div>
    </>
  );
};

export default Specials;
