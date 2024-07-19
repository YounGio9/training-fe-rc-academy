import React from "react";
import "../styles/Home/index.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-wrapper">
        <IoIosArrowBack className="home-icon-left" size={40} />
        <IoIosArrowForward
          className="home-icon-right"
          size={40}
        />

        <h1 className=" home-title">
          Welcome to <strong>Sushi</strong> Restaurant
        </h1>
        <p className=" home-description">
          People eat with their eyes and Sushi creates an easy
          way for customers to order when they can see beautiful
          photos of your food
        </p>
        <div className="home-btns">
          <button className="home-btn">about</button>
          <Link to={"/shop"} className="home-btn">
            menu
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
