import { paymentApi, endpoints, backend } from "../config";

export const createPaymentOrder = (data: {
  amount: number;
  slug: string;
  name: string;
  courseId: string;
  userId: string | null;
}) =>
  paymentApi.post(endpoints.paypal.createOrder, {
    amount: data.amount,
    slug: data.slug,
    name: data.name,
    courseId: data.courseId,
    userId: data.userId,
  });

export const executePaymentOrder = async (data: {
  paymentID: string;
  payerID: string | null;
  orderID: string;
}) =>
  paymentApi.post(endpoints.paypal.captureOrder, {
    paymentID: data.paymentID,
    payerID: data.payerID,
    orderID: data.orderID,
  });

export const getPaymentStatus = (userId: string, courseId: string) =>
  backend.post(endpoints.payments.getPaymentStatus, { userId, courseId });
