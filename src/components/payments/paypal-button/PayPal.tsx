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

const PaymentWrapper = ({
  amount,
  name,
  slug,
}: {
  amount: number;
  name: string;
  slug: string;
}) => {
  const [{ isPending }] = usePayPalScriptReducer();

  const createOrder = async () => {
    try {
      const response = await createPaymentOrder({
        amount: amount,
        name: name,
        slug: slug,
      });

      // const response = await fetch("http://localhost:5000/payments/pay", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ amount, name, slug }),
      // });
      const data = await response.data;
      return data.token;
    } catch (error) {
      console.log("Error creating order: ", error);
      throw error;
    }
  };

  const onApprove = async (data: any) => {
    // const response = await capturePaymentOrder({
    //   orderID: data.orderID,
    // });
    try{
      const response = await executePaymentOrder({
        paymentID: data.paymentID,
        payerID: data.payerID,
      })
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
      const results = await response.data;
      if (results.status === "Payment success") {
        alert("Payment successful!");
        // save to database
      }
    } catch(err){
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
}: {
  amount: number;
  name: string;
  slug: string;
}) => {
  return (
    <PayPalScriptProvider options={{ clientId: paypalClient! }}>
      <PaymentWrapper amount={amount} name={name} slug={slug} />
    </PayPalScriptProvider>
  );
};

export default Payment;
