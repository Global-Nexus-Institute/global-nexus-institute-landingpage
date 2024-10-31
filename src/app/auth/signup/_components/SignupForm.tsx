"use client";
import React, { useEffect } from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Button, Checkbox, Flex, Radio, Select } from "antd";
import { useAuth } from "@/shared/hooks/auth/auth.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faEnvelope,
  faCheck,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";
import { InputField } from "@/components/input-field/InputField";
import Password from "antd/es/input/Password";
import CustomButton from "@/components/custom-button/CustomButton";
import axios from "axios";
import { useAppSelector } from "@/lib/store/store.hooks";
import { RootState } from "@/lib/store/store";
import Link from "next/link";
export default function SignupForm() {
  const router = useRouter();
  const { loginUser, createUser, loginLoading } = useAuth();
  const { loading } = useAppSelector((store: RootState) => store.auth);
  const handleSignUp = () => {
    router.replace("/auth/signup");
  };

  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const options = {
        method: "GET",
        url: "https://restcountries.com/v3.1/all",
        headers: {
          "content-type": "application/json",
        },
      };

      try {
        const response = await axios.request(options);
        setCountries(response.data.map((c: any) => c.name.common));
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);
  return (
    <div className="w-full px-5">
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          firstName: "",
          lastName: "",
          role: "student",
          address: { city: "", country: "", streetAddress: "", zipCode: "" },
          phoneNumber: "",
        }}
        onSubmit={(values) => {
          console.log("these values: ", {
            ...values,
            name: `${values.firstName} ${values.lastName}`,
          });
          createUser({
            ...values,
            name: `${values.firstName} ${values.lastName}`,
          }).finally(() => {});
        }}
      >
        {({ handleSubmit, values, handleChange, setFieldValue, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold text-gray-100">
                  Personal Information
                </h2>
                <p className="mt-1 text-gray-500">
                  Use a permanent address where you can receive mail.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="firstName"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="firstName"
                        name="firstName"
                        type="text"
                        style={{ height: "45px" }}
                        autoComplete="given-name"
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="lastName"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="lastName"
                        name="lastName"
                        type="text"
                        style={{ height: "45px" }}
                        autoComplete="lastName"
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="email"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={handleChange}
                        style={{ height: "45px" }}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="password"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <Password
                        style={{ height: "45px" }}
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="address.country"
                      className="block  font-medium text-gray-100 text-[18px]"
                    >
                      Country <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-2">
                      <Select
                        id="address.country"
                        allowClear
                        onChange={handleChange}
                        onSelect={(value) => {
                          setFieldValue("address.country", value);
                        }}
                        style={{ height: "45px", width: "100%" }}
                        showSearch
                        options={countries.map((c: any) => ({
                          label: c,
                          value: c,
                        }))}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="address.streetAddress"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      Street address
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="address.streetAddress"
                        name="address.streetAddress"
                        type="text"
                        style={{ height: "45px" }}
                        autoComplete="address.streetAddress"
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-[18px]"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:col-start-1">
                    <label
                      htmlFor="address.city"
                      className="block  font-medium text-gray-100 text-[18px]"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="address.city"
                        name="address.city"
                        type="text"
                        style={{ height: "45px" }}
                        onChange={handleChange}
                        autoComplete="address-level2"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="region"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="region"
                        name="region"
                        type="text"
                        style={{ height: "45px" }}
                        onChange={handleChange}
                        autoComplete="address-level1"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address.zipCode"
                      className="block font-medium text-gray-100 text-[18px]"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="address.zipCode"
                        name="address.zipCode"
                        type="text"
                        style={{ height: "45px" }}
                        onChange={handleChange}
                        autoComplete="address.zipCode"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button
                type="text"
                style={{
                  height: "45px",
                  fontSize: "18px",
                  color: "white",
                  backgroundColor: "darkgray",
                }}
                className="font-semibold text-gray-900"
                onClick={() => resetForm()}
              >
                Cancel
              </Button>
              <Button
                type="primary"
                style={{
                  height: "45px",
                  backgroundColor: "darkblue",
                  color: "white",
                  fontSize: "18px",
                }}
                htmlType="submit"
                loading={loginLoading}
                disabled={loginLoading}
                className="w-full font-semibold border border-2 border-gray-100 shadow-md"
                icon={<FontAwesomeIcon icon={faSignIn} />}
              >
                Sign Up
              </Button>
            </div>

            <div className="text-[18px]">
              <p className="mt-10 text-center text-gray-500">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
