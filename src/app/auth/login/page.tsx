"use client";
import React, { useEffect } from "react";
import LoginForm from "./_components/LoginForm";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store/store";
import { useAppDispatch, useAppSelector } from "@/lib/store/store.hooks";
import { resetAuthState } from "@/lib/store/slices/auth.slice";
import { Alert } from "antd";

export default function LoginPage() {
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
      dispatch(resetAuthState());
      router.back();
    }
    if (!loading && error) {
      // alert(error);
      console.log("Captured error: ", error);
    }
  }, [loading, error, successMesage]);
  return (
    <div className="flex items-center justify-center pt-10  h-full">
      <div className="flex flex-col items-center justify-center w-[600px] h-[50%]">
        <h1 className="text-3xl font-bold text-white mb-5 ">Login</h1>
        {error && (
          <Alert
            message={error}
            onClick={() => closeAlert()}
            type="error"
            closable
          />
        )}
        {successMesage && (
          <Alert
            message={successMesage}
            onClick={() => closeAlert()}
            type="success"
            closable
          />
        )}
        <LoginForm />
      </div>
    </div>
  );
}
