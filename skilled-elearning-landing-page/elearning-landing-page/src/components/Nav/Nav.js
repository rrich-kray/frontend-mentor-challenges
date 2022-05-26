import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setOffset(e.deltaY);
      window.addEventListener("wheel", onScroll);
    };
  });
  return (
    <div id="nav">
      <div className="left-panel">
        <span>Skilled</span>
      </div>
      <div className="right-panel">
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Nav;
