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
            products.map(({ id, title, image, price }) => (
              <article key={id}>
                <h1>{title}</h1>
                <p>{price}</p>
                <Image src={image} width="200" height="200" alt={title} />
              </article>
            ))}
        </section>
      </Container>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const products = await fetch("https://fakestoreapi.com/products")
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
