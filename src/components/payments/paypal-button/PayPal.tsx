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
import { useAppDispatch, useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";
import { useRouter } from "next/navigation";
import { resetMessages } from "@/lib/store/slices/payments.slice";
import { UsersDataType } from "@/shared/types";

const PaymentWrapper = ({
  amount,
  name,
  slug,
  courseId,
  student,
  handlePayment,
}: {
  amount: number;
  name: string;
  slug: string;
  courseId: string;
  student: UsersDataType | null;
  handlePayment: () => void;
}) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const createOrder = async () => {
    if (student === null) {
      router.push("/auth/login");
    }
    try {
      const response = await createPaymentOrder({
        amount: amount,
        name: name,
        slug: slug,
        courseId: courseId,
        userId: student?._id ?? null,
      });
      const data = await response.data;
      console.log("data ", data);
      return data.orderID;
    } catch (error: any) {
      console.log(
        "Error creating order: ",
        error.response.data.error ?? error.error,
      );
      alert(
        "Error creating order: " +
          `${error.response.data.error ?? error.error}`,
      );
    }
  };

  const onApprove = async (data: any) => {
    if (data.orderID) {
      try {
        const response = await executePaymentOrder({
          paymentID: data.paymentID,
          payerID: student?._id ?? null,
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

        if (results.status === "COMPLETED") {
          handlePayment();
          // save to database
        }
      } catch (err) {
        console.log("Error: ", err);
        alert("Payment failed or already processed!: " + err);
      }
    } else {
      alert("Payment failed or already processed!");
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
  student,
  handlePayment,
}: {
  amount: number;
  name: string;
  slug: string;
  courseId: string;
  student: UsersDataType | null;
  handlePayment: () => void;
}) => {
  return (
    <PayPalScriptProvider options={{ clientId: paypalClient! }}>
      <PaymentWrapper
        amount={amount}
        name={name}
        slug={slug}
        courseId={courseId}
        student={student}
        handlePayment={handlePayment}
      />
    </PayPalScriptProvider>
  );
};

export default Payment;
