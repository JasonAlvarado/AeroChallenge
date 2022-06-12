import React from "react";
import Image from "next/image";
import { Button } from "@material-ui/core";

const Card = ({ product }: { product: any }) => {
  const { _id: id, name, img, cost, category } = product;
  return (
    <div style={{ width: "25%", display: "inline-block", padding: "10px" }}>
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
          <Image src={img.url} width="200" height="200" alt={name} />
        </div>
        <hr />
        <div style={{ paddingLeft: "10px" }}>
          <p>{name}</p>
          <p>{category}</p>
        </div>
      </article>
      <button className="btn-grad">Redeem for {cost}</button>
    </div>
  );
};

export default Card;
