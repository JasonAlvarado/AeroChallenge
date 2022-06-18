import type { NextPage } from "next";
import Layout from "../components/Main/Layout";
import Products from "../components/Products/Products";
import Hero from "../components/Landing/Hero";
import api from "../components/Products/api";
import { ProvideUser } from "../components/User/context";
import { IProduct } from "../components/Products/types";
import { Toaster } from "react-hot-toast";

interface Props {
  products: IProduct[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <ProvideUser>
      <Layout>
      <Toaster />
        <Hero />
        <Products products={products} />
      </Layout>
    </ProvideUser>
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
