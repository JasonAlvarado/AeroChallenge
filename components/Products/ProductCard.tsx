import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button, Grid } from "@material-ui/core";
import { IProduct } from "./types";
import api from "./api";
import toast, { Toaster } from "react-hot-toast";
import { useUser } from "../User/context";
import { mutate } from "swr";

const ProductCard = ({ product }: { product: IProduct }) => {
  const { _id: id, category, cost, createDate, img, name } = product;

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const { user } = useUser();

  const handleRedeem = async () => {
    setIsProcessing(true);
    const redeemResponse = await api.redeemProduct(id);
    setIsProcessing(false);

    mutate("userProfile");

    if (redeemResponse) {
      toast.success("You've redeem the product successfully");
    } else {
      toast.error("errorrrrrrrrrrr");
    }
  };

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
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            alt={name}
            src={img.url}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <hr />
        <div style={{ paddingLeft: "10px" }}>
          <b>{name}</b>
          <p style={{ color: "gray" }}>{category}</p>
        </div>
      </article>
      {isProcessing ? (
        <button className="btn-grad" style={{ width: "100%" }}>
          Processing
        </button>
      ) : user?.points >= cost ? (
        <button
          className="btn-grad"
          style={{ width: "100%" }}
          onClick={handleRedeem}
        >
          Redeem for {cost}
        </button>
      ) : (
        <button className="btn-unavailable" style={{ width: "100%" }}>
          You need {cost - user?.points}
        </button>
      )}
    </Grid>
  );
};

export default ProductCard;
