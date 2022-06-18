import React, { useState } from "react";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import { IProduct } from "./types";
import api from "./api";
import toast from "react-hot-toast";
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
      toast.error("Error claiming product");
    }
  };

  return (
    <Grid item xs={12} sm={6} lg={3} xl={2} spacing={4}>
      <article
        key={id}
        style={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          marginBottom: "10px",
          boxShadow: "4px 5px 15px -9px #000000",
        }}
      >
        <div className="card-header">
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
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
        </div>
        <div className="card-content">
          <div style={{ padding: "10px" }}>
            <b>{name}</b>
            <p style={{ color: "gray" }}>{category}</p>
          </div>
        </div>
        <div className="card-button" style={{ margin: "10px 0" }}>
          {isProcessing ? (
            <button
              className="btn-grad"
              style={{ width: "100%", padding: "8px" }}
            >
              Processing
            </button>
          ) : user?.points >= cost ? (
            <button
              className="btn-grad"
              style={{ width: "100%", padding: "8px" }}
              onClick={handleRedeem}
            >
              Redeem for {cost}
            </button>
          ) : (
            <button
              className="btn-unavailable"
              style={{ width: "100%", padding: "8px" }}
            >
              You need {cost - user?.points}
            </button>
          )}
        </div>
      </article>
    </Grid>
  );
};

export default ProductCard;
