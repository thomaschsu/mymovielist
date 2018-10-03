import React from "react";
import "../components/Home/Home.css";
import LandingContent from "../components/LandingContent";

const Home = () => (
  <div>
    <video muted loop id="video" autoPlay="autoplay">
      <source src="hero.mp4" type="video/mp4" />
    </video>
    <div className="title-spinner">
      <span id="spin"></span><h4 id="video-title">Movies</h4>
    </div>
    <LandingContent />
  </div>
);

export default Home;