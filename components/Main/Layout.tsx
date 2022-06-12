import { Container } from "@material-ui/core";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
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
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Next.js | my website",
  description: "page description",
};

export default Layout;
