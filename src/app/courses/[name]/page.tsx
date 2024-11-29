"use client";
import { sampleFeaturedCourses } from "@/shared/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Skeleton, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Payment from "@/components/payments/paypal-button/PayPal";
import { useAppDispatch, useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";
import { usePayments } from "@/shared/hooks/payments/payments.hooks";
import { useCourses } from "@/shared/hooks/courses/courses.hooks";

const Course: React.FC = () => {
  const [refresh, setRefresh] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const details = sampleFeaturedCourses.find(
    (course) => course.slug === pathname.split("/")[2],
  );

  const { user } = useAppSelector((store: RootState) => store.auth);
  const { courseDetail, loading: loadingCourse } = useAppSelector(
    (store: RootState) => store.courses,
  );

  const { paymentStatus, loading, paymentSuccessMessage } = useAppSelector(
    (store: RootState) => store.payments,
  );

  const { getPaymentStatus } = usePayments();
  const { getCourse } = useCourses();

  useEffect(() => {
    getCourse(pathname.split("/")[2]);
  }, [pathname]);

  useEffect(() => {
    if (user && courseDetail?.uuid) {
      // load the payment status
      getPaymentStatus(user._id, courseDetail?.uuid);
    }
  }, [user, courseDetail?.uuid, refresh]);

  const handlePayment = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <>
      <Skeleton loading={loadingCourse}>
        <div>
          <div className="flex h-[400px] w-full bg-gradient-to-r from-gndarkblue to-blue-900 ">
            <div className="pl-3 h-full flex flex-col justify-center basis-1/2">
              <div className="space-y-4">
                <h1 className="text-3xl text-white font-bold">
                  {courseDetail?.name}
                </h1>
                <p className="text-sm px-2 text-white">
                  {courseDetail?.short_intro}
                </p>
                <div className="flex flex-row items-center pl-3 space-x-2 w-full gap-4 max-h-[75vh]">
                  <div className="flex col-span-6  items-center justify-center bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px]">
                    <Link
                      href={`https://globalnexusinstitute.illumidesk.com/courses/${courseDetail?.slug}`}
                      target="_blank"
                    >
                      Explore
                    </Link>
                  </div>
                  <Spin spinning={loading}>
                    {user == null ? (
                      <div
                        className="flex col-span-6  items-center justify-center bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px] cursor-pointer"
                        onClick={() => router.push("/auth/login")}
                      >
                        Buy Now
                      </div>
                    ) : paymentStatus !== null ? (
                      <div></div>
                    ) : (
                      <div className=" bg-blue-900 text-white p-3 w-full overflow-y-scroll ">
                        <Payment
                          amount={courseDetail?.cost ?? 0}
                          name={courseDetail?.name ?? ""}
                          slug={courseDetail?.slug ?? ""}
                          courseId={courseDetail?.uuid ?? ""}
                          student={user}
                          handlePayment={handlePayment}
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
                backgroundImage: `url(${courseDetail?.main_image})`,
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </Skeleton>
    </>
  );
};

export default Course;
