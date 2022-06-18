import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <p>EXPLORE THE</p>
      <div className="banner">
        <span>TECH</span>
        <span>ZONE</span>
      </div>
      <p>
        Here you&apos;ll be able to exchange all of your hard-earned Aeropoints
        and exchange them for cool tech.
      </p>
      <button>
        <a href="#products">VIEW ALL PRODUCTS ⬇</a>
      </button>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          src="/img/banner.png"
          alt="banner"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default Hero;
