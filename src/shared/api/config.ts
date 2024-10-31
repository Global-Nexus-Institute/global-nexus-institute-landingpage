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
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
    logout: "/auth/logout",
  },
  courses: "/courses/",
  paypal: {
    createOrder: "/payments/create-payment",
    captureOrder: "/payments/capture-payment",
  },
  payments: {
    getPaymentStatus: "/payments/get-payment-status",
  },
};
