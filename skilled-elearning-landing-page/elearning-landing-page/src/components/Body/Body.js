import React from "react";
import Tile from "../Tile/Tile";
import "./Body.css";

const Body = () => {
  const tileData = [
    {
      title: "Animation",
      description:
        "Learn the latest animation techniques to create stunning motion design and captivate your audience.",
      logo: "../../assets/icon-animation.svg",
    },
    {
      title: "Design",
      description:
        "Create beautiful, usable interfaces to help shape the future of how the web looks.",
      logo: "../../assets/icon-design.svg",
    },
    {
      title: "Photography",
      description:
        "Explore critical fundamentals like lighting, composition and focus.",
      logo: "../../assets/icon-photography.svg",
    },
    {
      title: "Crypto",
      description: "All you need to know to get started investing in crypto.",
      logo: "../../assets/icon-crypto.svg",
    },
    {
      title: "Animation",
      description:
        "A step-by-step playbook to help you start, scale and sustain your business.",
      logo: "../../assets/icon-business.svg",
    },
  ];

  return (
    <div id="body-component">
      {tileData.map((tile) => (
        <Tile data={tile} />
      ))}
    </div>
  );
};

export default Body;
