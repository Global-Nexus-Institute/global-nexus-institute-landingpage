"use client";
import { Spin } from "antd";
import React from "react";
import { useAppSelector } from "@/lib/store/store.hooks";
import { useRouter } from "next/navigation";
import { useAuth } from "@/shared/hooks/auth/auth.hooks";
import { RootState } from "@/lib/store/store";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { loading, user } = useAppSelector((store: RootState) => store.auth);
  const { authStatus } = useAuth();
  return (
    <div className="h-full">
      <Spin size="large" spinning={loading}>
        {children}
      </Spin>
    </div>
  );
}
