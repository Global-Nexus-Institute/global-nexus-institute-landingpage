import { paymentApi, endpoints } from "../config";

export const createPaymentOrder = (data: {
  amount: number;
  slug: string;
  name: string;
}) =>
  paymentApi.post(endpoints.paypal.createOrder, {
    amount: data.amount,
    slug: data.slug,
    name: data.name,
  });

export const executePaymentOrder = async (data: {
  paymentID: string;
  payerID: string;
  orderID: string;
}) =>
  paymentApi.post(endpoints.paypal.captureOrder, {
    paymentID: data.paymentID,
    payerID: data.payerID,
    orderID: data.orderID,
  });
