import Link from "next/link";
import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

const firstProd = () => {
  return (
    <Layout title="First product" description="prod description">
      <h1>First Prod</h1>
      <br />
      <Image src="/img/1.jpg" width={600} height={600} alt="test" />
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </Layout>
  );
};

export default firstProd;
