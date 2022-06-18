import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UserCard from "../User/UserCard";
import styles from "../../styles/Dark.module.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const changeMode = () => {
    setIsDarkMode((currentIsDark) => !currentIsDark);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme");
  }, [isDarkMode]);

  return (
    <Container>
      <h1>aerolab</h1>
      <button className="btn-gradient" onClick={changeMode}>
        {isDarkMode ? <span>Light Mode</span> : <span>Dark Mode</span>}
      </button>
      <UserCard />
    </Container>
  );
};

export default Header;
