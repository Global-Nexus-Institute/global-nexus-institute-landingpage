import React from "react";
import { Formik, useField } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import Password from "antd/es/input/Password";
import { Button, Checkbox, Flex, Input } from "antd";
import { useAuth } from "@/shared/hooks/auth/auth.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import FormItem from "antd/es/form/FormItem";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
export default function LoginForm() {
  const router = useRouter();
  const { loginUser, logOutUser, loginLoading } = useAuth();
  const handleSignUp = () => {
    router.replace("/auth/signup");
  };
  return (
    <div className="w-full px-5">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          loginUser(values.email, values.password);
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2 ">
              <div className="w-full">
                <label htmlFor="email" className="text-[24px] text-white">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <FormItem name="email">
                  <Input
                    id="email"
                    placeholder="Enter Email address"
                    type="email"
                    onChange={handleChange}
                    style={{ height: "50px" }}
                    suffix={<FontAwesomeIcon icon={faEnvelope} />}
                    required
                  />
                </FormItem>
              </div>
              <div className="mb-10">
                <label htmlFor="password" className="text-[24px] text-white">
                  Password <span className="text-red-500">*</span>
                </label>
                <Password
                  name="password"
                  id="password"
                  placeholder="Password"
                  type="password"
                  onChange={handleChange}
                  style={{ height: "50px" }}
                  iconRender={() => <FontAwesomeIcon icon={faLock} />}
                  required
                />
              </div>
              <Flex justify="space-between">
                <div className="text-white">
                  <Checkbox>
                    <span className="text-white text-[18px] ">Remember me</span>
                  </Checkbox>
                </div>
                <div className="text-[24px] text-white">
                  <a href="#">Forgot password</a>
                </div>
              </Flex>
              <div className="w-[100%]">
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loginLoading}
                  disabled={loginLoading}
                  className="w-full text-[24px] text-white"
                  style={{ height: "50px" }}
                >
                  Login
                </Button>
              </div>
              <div className="py-5 cursor-pointer text-[18px] text-white">
                Don&apos;t yet have an account?{" "}
                <span onClick={handleSignUp}>Sign Up</span>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
