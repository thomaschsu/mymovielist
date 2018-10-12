import React from "react";
import './scrollButton.css';

const ScrollButton = () => (
    <button onClick="topFunction()" id="myBtn" title="Go to top"><i className="med material-icons">arrow_upward</i>
</button>
);

export default ScrollButton;