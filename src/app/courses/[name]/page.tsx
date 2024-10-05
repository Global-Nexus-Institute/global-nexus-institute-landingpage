"use client";
import { sampleFeaturedCourses } from "@/shared/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Image, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { paypalClient } from "@/shared/constants";

const Course: React.FC = () => {
  const [openModal, setModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const details = sampleFeaturedCourses.find(
    (course) => course.slug === pathname.split("/")[2],
  );

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Load PayPal script
    if (openModal) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClient}`;
      script.addEventListener("load", () => {
        window.paypal
          .Buttons({
            createOrder: (data: any, actions: any) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: details?.cost,
                    },
                  },
                ],
              });
            },
            onApprove: (data: any, actions: any) => {
              return actions.order.capture().then((details: any) => {
                const orderID = details.id;
                // const userID = "sb-sjfnx5772473@personal.example.com"; // Replace with actual user ID

                // Verify payment on the server
                fetch("http://localhost:5000/verify-payment", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ orderID }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.status === "success") {
                      alert("Payment successful!");
                    } else {
                      alert("Payment failed or already processed.");
                    }
                  });
              });
            },
          })
          .render("#paypal-button-");
      });
      document.body.appendChild(script);
    }
  }, [pathname, openModal]);
  return (
    <>
      <div>
        <div className="w-full flex bg-white h-[80px] ">
          <div className="pl-3 h-full w-[100px] flex justify-center items-center">
            <Link href={"/#courses"} onClick={() => router.replace("/")}>
              <Image
                src="/assets/images/logo.png"
                alt="logo"
                className="h-full w-[60px]"
                preview={false}
              />
            </Link>
          </div>
          <div className="flex justify-center items-center self-center w-full">
            Navs
          </div>
        </div>
        <div className="flex h-[400px] w-full bg-gradient-to-r from-gndarkblue to-blue-900 ">
          <div className="pl-3 h-full flex flex-col justify-center basis-1/2">
            <div className="space-y-4">
              <h1 className="text-3xl text-white font-bold">{details?.name}</h1>
              <p className="text-sm px-2 text-white">{details?.short_intro}</p>
              <div className="flex pl-3 space-x-2">
                <button
                  className="bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px]"
                  onClick={() => setModalOpen(true)}
                >
                  Enroll now
                </button>
                <div className="flex  items-center justify-center bg-blue-900 text-white px-3 py-1 rounded-md w-[100px] h-[50px]">
                  <Link
                    href={`https://globalnexusinstitute.illumidesk.com/courses/${details?.slug}`}
                    target="_blank"
                  >
                    Explore
                  </Link>
                </div>
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
      <Modal open={openModal} width={600} onCancel={closeModal}>
        <div>
          <div>Make Payment</div>
          <div id="paypal-button-"></div>
        </div>
      </Modal>
    </>
  );
};

export default Course;
