import { getPaymentStatus } from "@/shared/api/payments/paypal.api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface PaymentState {
  paymentStatus: string | null;
  loading: boolean;
  paymentErrorMessage: string;
  paymentSuccessMessage: string;
}

const initialState: PaymentState = {
  paymentStatus: null,
  loading: false,
  paymentErrorMessage: "",
  paymentSuccessMessage: "",
};

export const getPaymentStatusThunk = createAsyncThunk(
  "payments/getPaymentStatus",
  async ({ userId, courseId }: { userId: string; courseId: string }) => {
    try {
      const res = await getPaymentStatus(userId, courseId);
      console.log("payment status: ", res.data);
      return res.data.paymentStatus;
    } catch (err: any) {
      return err.response.data ?? err.response.error;
    }
  },
);

const paymentSlice = createSlice({
  name: "payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPaymentStatusThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPaymentStatusThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentStatus = action.payload.data;
      })
      .addCase(getPaymentStatusThunk.rejected, (state) => {
        state.loading = false;
        state.paymentStatus = null;
      });
  },
});

export default paymentSlice.reducer;
