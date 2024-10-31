import { getPaymentStatusThunk } from "@/lib/store/slices/payments.slice";
import { useAppDispatch } from "@/lib/store/store.hooks";
export const usePayments = () => {
  const dispatch = useAppDispatch();
  const getPaymentStatus = async (userId: string, courseId: string) => {
    await dispatch(getPaymentStatusThunk({ userId, courseId }));
  };

  return { getPaymentStatus };
};
