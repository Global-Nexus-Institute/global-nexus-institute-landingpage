"use client";
import { sampleFeaturedCourses } from "@/shared/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Image, Modal, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { paypalClient } from "@/shared/constants";
import Payment from "@/components/payments/paypal-button/PayPal";
import { useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";
import { usePayments } from "@/shared/hooks/payments/payments.hooks";

const Course: React.FC = () => {
  const [openModal, setModalOpen] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const details = sampleFeaturedCourses.find(
    (course) => course.slug === pathname.split("/")[2],
  );

  const { user } = useAppSelector((store: RootState) => store.auth);
  const { paymentStatus, loading } = useAppSelector(
    (store: RootState) => store.payments,
  );
  const { getPaymentStatus } = usePayments();
  useEffect(() => {
    if (user && details?.uuid) {
      // load the payment status
      getPaymentStatus(user._id, details?.uuid);
    }
  }, [user, details?.uuid]);

  return (
    <>
      <div>
        <div className="flex h-[400px] w-full bg-gradient-to-r from-gndarkblue to-blue-900 ">
          <div className="pl-3 h-full flex flex-col justify-center basis-1/2">
            <div className="space-y-4">
              <h1 className="text-3xl text-white font-bold">{details?.name}</h1>
              <p className="text-sm px-2 text-white">{details?.short_intro}</p>
              <div className="flex flex-row items-center pl-3 space-x-2 w-full gap-4 border-2 border-white max-h-[75vh]">
                <div className="flex col-span-6  items-center justify-center bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px]">
                  <Link
                    href={`https://globalnexusinstitute.illumidesk.com/courses/${details?.slug}`}
                    target="_blank"
                  >
                    Explore
                  </Link>
                </div>
                <Spin spinning={loading}>
                  {paymentStatus === null && (
                    <div className=" bg-blue-900 text-white p-3 w-full overflow-y-scroll ">
                      <Payment
                        amount={details?.cost ?? 0}
                        name={details?.name ?? ""}
                        slug={details?.slug ?? ""}
                        courseId={details?.uuid ?? ""}
                      />
                    </div>
                  )}
                </Spin>
              </div>
            </div>
          </div>
          <div
            className=" h-full w-full bg-cover basis-1/2 opacity-70"
            style={{
              backgroundImage: `url(${details?.main_image})`,
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Course;
