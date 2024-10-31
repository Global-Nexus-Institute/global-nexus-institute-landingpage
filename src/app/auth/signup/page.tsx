"use client";
import React , { use, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";
import { Alert } from "antd";
import { resetAuthState } from "@/lib/store/slices/auth.slice";
import { useRouter } from "next/navigation";
import SignupForm from "./_components/SignupForm";

export default function SignUpPage() {
  const router = useRouter();
  const { user, loading, error, successMesage } = useAppSelector(
    (store: RootState) => store.auth,
  );
  const dispatch = useAppDispatch();
  const closeAlert = () => {
    dispatch(resetAuthState());
  };

  useEffect(() => {
    if (!loading && successMesage) {
      router.push(`/auth/login`);
    }
    if (!loading && error) {
      // alert(error);
      console.log("Captured error: ", error);
    }
  }, [loading, error, successMesage]);

  return (
    <div className="flex items-center justify-center pt-10 h-full text-white w-full">
      <div className="flex flex-col items-center justify-center w-[50%] h-[50%]">
        {error && <Alert message={error} onClick={() => closeAlert()} type="error" closable />}
        {successMesage && <Alert message={successMesage} onClick={() => closeAlert()} type="success" closable />}
        <h1 className="text-3xl font-bold text-white mb-5 ">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
