import React from "react";
import "./Tile.css";

const Tile = ({ data }) => {
  console.log(data.title);
  return (
    <div className="tile">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <a href="#" alt="placeholder-link">
        Get Started
      </a>
      {/* <img src={require(data.logo).default} alt="tile-logo"></img> */}
    </div>
  );
};

export default Tile;
