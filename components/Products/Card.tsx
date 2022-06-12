import React from "react";
import Image from "next/image";
import { Button, Grid } from "@material-ui/core";
import { IProduct } from "./types";

const Card = ({ product }: { product: IProduct }) => {
  const { _id: id, name, img, cost, category } = product;

  return (
    <Grid item xs={12} sm={6} lg={3} xl={2}>
      <article
        key={id}
        style={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          margin: "10px 0",
          boxShadow: "4px 5px 15px -9px #000000",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image src={img.url} alt={name} width="100%" height="100%" />
        </div>
        <hr />
        <div style={{ paddingLeft: "10px" }}>
          <b>{name}</b>
          <p style={{ color: "gray" }}>{category}</p>
        </div>
      </article>
      <button className="btn-grad">Redeem for {cost}</button>
    </Grid>
  );
};

export default Card;
