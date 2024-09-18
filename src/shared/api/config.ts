import axios from "axios";

import { baseEndpoint, apiKey } from "../constants";

export const backend = axios.create({
  baseURL: baseEndpoint,
  headers: {
    Accept: "application/json",
    Authorization: apiKey,
  },
});

export const endpoints = {
  courses: "/courses/",
};
