import { Button, Grid } from "@material-ui/core";
import React from "react";

const Hero = () => {
  return (
    <Grid container spacing={4}>
      <Grid item lg={6} style={{ textAlign: "center" }}>
        <p className="banner-secondary">EXPLORE THE</p>
        <div className="banner">
          <span className="text-grad">TECH</span>
          <span style={{ color: "#252F3D" }}>ZONE</span>
        </div>
        <p className="banner-secondary">
          Here you&apos;ll be able to exchange all of your hard-earned
          Aeropoints and exchange them for cool tech.
        </p>
        <button className="btn-grad">
          <a href="#products">VIEW ALL PRODUCTS ⬇</a>
        </button>
      </Grid>
      <Grid item lg={6}>
        <img src="/img/banner.png" alt="banner" width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default Hero;
