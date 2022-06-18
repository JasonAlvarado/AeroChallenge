import React from "react";
import { Container } from "@material-ui/core";
import UserCard from "../User/UserCard";
import DarkButton from "./DarkButton";
import Image from "next/image";
import aerolab_logo from "../../public/icons/aerolab-logo-1.svg";

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
      <UserCard />
    </Container>
  );
};

export default Header;
