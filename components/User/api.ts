import { getHeaders } from "../../utils/api/getHeaders";
import { IProduct } from "../Products/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser: async (): Promise<any> => {
    return fetch(`${API_URL}/user/me`, {
      method: "GET",
      headers: getHeaders(),
    })
      .then((resp) => (resp.ok ? resp.json() : null))
      .catch((err) => console.error(err));
  },
  addPoints: async (amount: number): Promise<any> => {
    return fetch(`${API_URL}/user/points`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({ amount: amount }),
    });
  },
  getHistory: async (): Promise<IProduct> => {
    return await fetch(`${API_URL}/user/history`, {
      method: "GET",
      headers: getHeaders(),
    })
      .then((res) => (res.ok ? res.json() : []))
      .catch((err) => console.error(err));
  },
};
