import { Container, Grid } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import Card from "./Card";
import { IProduct } from "./types";

const Products = ({ products }: { products: IProduct[] }) => {
  products = products.sort((a, b) => {
    return b.cost - a.cost;
  });

  return (
    <div>
      <h1>TECH PRODUCTS</h1>
      <Grid container spacing={4} id="products">
        {products &&
          products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
      </Grid>
    </div>
  );
};

export default Products;
