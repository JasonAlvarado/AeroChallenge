import { Container } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css";

const Layout = ({
  children,
  title,
  description,
}: {
  children: any;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header>
        <Navbar />
      </header>
      <Container>
        <main>{children}</main>
      </Container>
      <footer>
        <a href="#">View this repository</a>
      </footer>
    </div>
  );
};

Layout.defaultProps = {
  title: "Next.js | my website",
  description: "page description",
};

export default Layout;
