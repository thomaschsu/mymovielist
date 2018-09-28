import React from "react";
import "../components/Home/Home.css";

const Home = () => (
  <div>
    <video muted loop id="video" autoplay="autoplay">
      <source src="hero.mp4" type="video/mp4" />
    </video>
    <h4 id="video-title">Discover Movies</h4>
  </div>
);

export default Home;