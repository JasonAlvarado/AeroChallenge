import { Container } from "@material-ui/core";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ products }: { products: any[] }) => {
  return (
    <div>
      <Container>
        <section>
          {products &&
            products.map(({ _id: id, name, img, cost, category }) => (
              <article key={id}>
                <h1>{name}</h1>
                <p>{cost}</p>
                <Image src={img.url} width="200" height="200" alt={name} />
              </article>
            ))}
        </section>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append(
      "Authorization",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmE1NTNhYjBjZGUzODAwMjFlYzczMGEiLCJpYXQiOjE2NTUwMDIwMjd9.hpH-0Ndnx4kbM704_BcmQZAkdKZL1HredoaAVbmJR7U"
    ); //read from .env

    const prodsUrl =
      "https://private-anon-b24e8508cf-aerolabchallenge.apiary-proxy.com/products";

    const products = await fetch(prodsUrl, {
      method: "GET",
      headers: headers,
    })
      .then((data) => (data.ok ? data.json() : null))
      .catch((err) => console.error(err));

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error(error);
  }
}

export default Home;
