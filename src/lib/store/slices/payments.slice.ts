import {
  getPaymentStatus,
  createPaymentOrder,
  executePaymentOrder,
} from "@/shared/api/payments/paypal.api";
import { PaymentEntityDataType } from "@/shared/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PaymentState {
  data: PaymentEntityDataType | null;
  paymentStatus: string | null;
  loading: boolean;
  paymentErrorMessage: string;
  paymentSuccessMessage: string;
}

const initialState: PaymentState = {
  data: null,
  paymentStatus: null,
  loading: false,
  paymentErrorMessage: "",
  paymentSuccessMessage: "",
};

// create payment
export const createPaymentThunk = createAsyncThunk(
  "payments/createPayment",
  async ({
    amount,
    name,
    slug,
    courseId,
    userId,
  }: {
    amount: number;
    name: string;
    slug: string;
    courseId: string;
    userId: string | null;
  }) => {
    try {
      const res = await createPaymentOrder({
        amount: amount,
        name: name,
        slug: slug,
        courseId: courseId,
        userId: userId,
      });
      console.log("create payment: ", res.data);
      return res.data;
    } catch (err: any) {
      return err.response.data ?? err.response.error;
    }
  },
);

// execute payment
export const executePaymentThunk = createAsyncThunk(
  "payments/executePayment",
  async ({
    paymentID,
    payerID,
    orderID,
  }: {
    paymentID: string;
    payerID: string | null;
    orderID: string;
  }) => {
    try {
      const res = await executePaymentOrder({
        paymentID: paymentID,
        payerID: payerID,
        orderID: orderID,
      });
      console.log("execute payment: ", res.data);
      return res.data;
    } catch (err: any) {
      return err.response.data ?? err.response.error;
    }
  },
);

export const getPaymentStatusThunk = createAsyncThunk(
  "payments/getPaymentStatus",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    try {
      const res = await getPaymentStatus(userId, courseId);
      console.log("payment status: ", res.data);
      return res.data;
    } catch (err: any) {
      return err.response.data ?? err.response.error;
    }
  },
);

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {
    resetMessages: (state) => {
      state.paymentSuccessMessage = "";
      state.paymentErrorMessage = "";
    },
  },
  extraReducers: (builder) => {
    // get payment status
    builder
      .addCase(getPaymentStatusThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentStatusThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.paymentStatus = action.payload.paymentStatus;
        state.paymentSuccessMessage =
          action.payload.message ?? "Payment retrieved!";
      })
      .addCase(getPaymentStatusThunk.rejected, (state) => {
        state.loading = false;
        state.data = null;
      });

    // execute payment
    builder
      .addCase(executePaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(executePaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload ?? action.payload.data;
        state.paymentSuccessMessage =
          action.payload.message ?? "Payment successful!";
      })
      .addCase(executePaymentThunk.rejected, (state) => {
        state.loading = false;
        state.data = null;
      });

    // create payment
    builder
      .addCase(createPaymentThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPaymentThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload ?? action.payload.data;
        state.paymentSuccessMessage = "Payment successful!";
      })
      .addCase(createPaymentThunk.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.paymentErrorMessage = action.error.message ?? "Payment failed!";
      });
  },
});

export const { resetMessages } = paymentSlice.actions;

export default paymentSlice.reducer;
