import { Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "./ProductCard";
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
            <ProductCard product={product} key={product._id} />
          ))}
      </Grid>
    </div>
  );
};

export default Products;
