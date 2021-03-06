import React from "react";
import Image from "next/image";
import { Container, Grid } from "@material-ui/core";
import UserCard from "../User/UserCard";
import DarkButton from "./DarkButton";
import aerolab_logo from "../../public/icons/aerolab-logo-1.svg";
import Aerocoins from "./Aerocoins";

const Header = () => {
  return (
    <Container>
      <Image
        alt="aerolab-logo"
        height="100px"
        src={aerolab_logo.src}
        priority={true}
        width="200px"
        onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
      />
      <DarkButton />
      <Aerocoins />
    </Container>
  );
};

export default Header;
