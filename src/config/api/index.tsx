import axios from "axios";
import { BASE_URL } from "../urls";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: "",
  },
  timeout: 1000,
});
