import { Container, Grid } from "@material-ui/core";
import React from "react";
import Card from "./Card";
import { IProduct } from "./types";

const Products = ({ products }: { products: IProduct[] }) => {
  products = products.sort((a, b) => {
    return b.cost - a.cost;
  });

  return (
    <Grid container spacing={4} id="products">
      {products &&
        products.map((product) => <Card product={product} key={product._id} />)}
    </Grid>
  );
};

export default Products;
