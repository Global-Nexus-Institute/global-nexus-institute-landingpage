import { useEffect, useState } from "react";
import { loadScript } from "@paypal/paypal-js";
import {
  executePaymentOrder,
  createPaymentOrder,
} from "@/shared/api/payments/paypal.api";
import { paypalClient } from "@/shared/constants";
import {
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";
import { useRouter } from "next/navigation";

const PaymentWrapper = ({
  amount,
  name,
  slug,courseId,
}: {
  amount: number;
  name: string;
  slug: string;
  courseId: string;
}) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const {user} = useAppSelector((store: RootState) => store.auth);

  const router = useRouter();

  const createOrder = async () => {
    if (user === null) {
      router.push("/auth/login");
    } 
    try {
      const response = await createPaymentOrder({
        amount: amount,
        name: name,
        slug: slug,
        courseId: courseId,
      });
      const data = await response.data;
      console.log("data ", data);
      return data.orderID;
    } catch (error) {
      console.log("Error creating order: ", error);
      throw error;
    }
  };

  const onApprove = async (data: any) => {
    // const response = await capturePaymentOrder({
    //   orderID: data.orderID,
    // });
    try {
      const response = await executePaymentOrder({
        paymentID: data.paymentID,
        payerID: data.payerID,
        orderID: data.orderID,
      });
      // const response = await fetch(
      //   "http://localhost:5000/payments/execute-payment",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       paymentID: data.paymentID,
      //       payerID: data.payerID,
      //     }),
      //   },
      // );
      console.log("response ", response);
      const results = await response.data;
      if (results.status === "Payment success") {
        alert("Payment successful!");
        // save to database
      }
    } catch (err) {
      console.log("Error: ", err);
      alert("Payment failed or already processed!: " + err);
    }
  };

  if (isPending) return <div>Loading PayPal SDK...</div>;

  return (
    <div>
      <h1>PayPal Payment</h1>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </div>
  );
};

const Payment = ({
  amount,
  name,
  slug,
  courseId,
}: {
  amount: number;
  name: string;
  slug: string;
  courseId: string;
}) => {
  return (
    <PayPalScriptProvider options={{ clientId: paypalClient! }}>
      <PaymentWrapper amount={amount} name={name} slug={slug} courseId={courseId} />
    </PayPalScriptProvider>
  );
};

export default Payment;
