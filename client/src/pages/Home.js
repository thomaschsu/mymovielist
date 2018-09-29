import React from "react";
import "../components/Home/Home.css";

const Home = () => (
  <div>
    <video muted loop id="video" autoPlay="autoplay">
      <source src="hero.mp4" type="video/mp4" />
    </video>
    <span id="spin"></span><h4 id="video-title">Movies</h4>
  </div>
);

export default Home;