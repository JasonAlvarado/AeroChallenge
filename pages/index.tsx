import type { NextPage } from "next";
import Layout from "../components/Main/Layout";
import Products from "../components/Products/Products";
import Hero from "../components/Landing/Hero";
import api from "../components/Products/api";

const Home: NextPage = ({ products }: { products: any }) => {
  return (
    <Layout>
      <Hero />
      <Products products={products} />
    </Layout>
  );
};

export async function getStaticProps() {
  const products = await api.getAllProducts();

  return {
    props: {
      products,
    },
  };
}

export default Home;
