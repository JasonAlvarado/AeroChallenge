import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center", margin: "40px 0 20px 0" }}>
      <a href="https://github.com/JasonAlvarado/AeroChallenge.git">
        {/* <Image
          src="/img/github-default.svg"
          height={24}
          width={24}
          style={{ display: "inline-block", margin: "0 20px" }}
        ></Image> */}
        <p style={{ display: "inline-block", fontSize: "1.2em" }}>
          View this repository
        </p>
      </a>
    </footer>
  );
};

export default Footer;
