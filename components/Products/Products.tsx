import { Container } from "@material-ui/core";
import React from "react";
import Card from "./Card";

const Products = ({ products }: { products: any[] }) => {
  products = products.sort((a, b) => {
    return b.cost - a.cost;
  });

  return (
    <div id="products">
      <Container>
        {products &&
          products.length > 0 &&
          products.map((product) => (
            <Card product={product} key={product._id} />
          ))}
      </Container>
    </div>
  );
};

export default Products;
