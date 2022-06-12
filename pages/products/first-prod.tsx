import Link from "next/link";
import React from "react";
import Image from "next/image";

const firstProd = () => {
  return (
    <div>
      <h1>First Prod</h1>
      <br />
      <Image src="/img/1.jpg" width={600} height={600} alt="test" />
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default firstProd;
