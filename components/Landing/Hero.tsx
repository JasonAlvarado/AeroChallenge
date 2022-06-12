import { Button } from "@material-ui/core";
import React from "react";

const Hero = () => {
  return (
    <div>
      <h1>EXPLORE THE TECH ZONE</h1>
      <p>
        Here you&apos;ll be able to exchange all of your hard-earned Aeropoints
        and exchange them for cool tech.
      </p>
      <Button variant="contained">
        <a href="#products">VIEW ALL PRODUCTS</a>
      </Button>
    </div>
  );
};

export default Hero;
