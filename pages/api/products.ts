import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.status(200).json(response.data);
  } catch (err) {
    console.log("Frtching Error", err);
    res.status(500).json({ error: "Failed to fetch product" });
  }
}
