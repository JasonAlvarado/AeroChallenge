import { getHeaders } from "../../utils/api/getHeaders";
import { IProduct } from "./types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllProducts: async (): Promise<IProduct> => {
    const prods = await fetch(`${API_URL}/products`, {
      method: "GET",
      headers: getHeaders(),
    })
      .then((res) => (res.ok ? res.json() : []))
      .catch((err) => console.error(err));

    return prods;
  },
  redeemProduct: async (productId: string): Promise<any> => {
    return fetch(`${API_URL}/redeem`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ productId: productId }),
    })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  },
};
