import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma0 mt0">
      <Tilt>
        <div
          className="logo"
          style={{ height: "90px", backgroundColor: "#FF5EDF" }}
        >
          <img src={brain} alt="logo"></img>
          <div></div>
          <h1 style={{ paddingTop: "5px" }}>👀</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
