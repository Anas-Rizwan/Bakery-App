import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bgimg3.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1 style={{color:"brown"}}> Baker's C </h1>
        <p style={{color:"brown"}}> Cake is for life, not just for birthdays!</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
