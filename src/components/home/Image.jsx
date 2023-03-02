import React from "react";
import imageHome from "../../assets/plane-image.png";
import "./home.scss";

const Image = () => {
  return (
    <section className="main-container__image-container">
      <img
        className="main-container__image"
        src={imageHome}
        alt="Plane Image"
      />
    </section>
  );
};

export default Image;
