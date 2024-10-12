import axios from "axios";

import { baseEndpoint, apiKey } from "../constants";

export const backend = axios.create({
  baseURL: baseEndpoint,
  headers: {
    Accept: "application/json",
    Authorization: apiKey,
  },
});

export const paymentApi = axios.create({
  baseURL: baseEndpoint,
  headers: {
    "Content-Type": "application/json",
  },
});

export const endpoints = {
  courses: "/courses/",
  paypal: {
    createOrder: "/payments/pay",
    captureOrder: "/payments/execute-payment",
  },
};
