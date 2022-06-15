import { Container } from "@material-ui/core";
import React from "react";
import UserCard from "../User/UserCard";

const Header = () => {
  return (
    <Container>
      {/* <h1>aerolab</h1> */}
      <UserCard />
    </Container>
  );
};

export default Header;
