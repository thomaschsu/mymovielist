import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ clear: "both", textAlign: "center", width:1024, marginLeft: "auto", marginRight: "auto" }}
    className="jumbotron animated fadeInDownBig delay-2s"
  >
    {children}
  </div>
);

export default Jumbotron;
