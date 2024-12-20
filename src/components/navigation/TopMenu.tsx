"use client";
import {
  HomeOutlined,
  MoneyCollectFilled,
  FormOutlined,
  EditOutlined,
  UserOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { Avatar, Button, Image, Layout, Menu, MenuProps, Modal } from "antd";
import Link from "next/link";
import CourseApplicationForm from "../forms/CourseApplicationForm";
import JobApplicationForm from "../forms/JobApplicationForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "@/lib/store/store";
import { useAppSelector } from "@/lib/store/store.hooks";
import { useAuth } from "@/shared/hooks/auth/auth.hooks";

type MenuItem = Required<MenuProps>["items"][number];

const TopMenu: React.FC = () => {
  const router = useRouter();
  const { logOutUser } = useAuth();
  const { user, loading, error, successMesage } = useAppSelector(
    (store: RootState) => store.auth,
  );
  const [isTrainingModalOpen, setTrainingModalOpen] = useState(false);
  const [isJobModalOpen, setJobModalOpen] = useState(false);

  const items: MenuItem[] = [
    {
      label: <Link href={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: (
        <a href="/#courses" className="text-white">
          Courses
        </a>
      ),
      key: "courses",
    },
    {
      label: <Link href={"/research"}>Research</Link>,
      key: "research",
    },
    {
      label: <Link href={"/#team"}>Team</Link>,
      key: "team",
    },
    {
      label: "Apply",
      key: "apply",
      icon: <FormOutlined />,
      children: [
        {
          key: "apply1",
          label: (
            <Link
              href={"https://form.jotform.com/242266972261561"}
              target="_blank"
            >
              Course Application
            </Link>
          ),
          icon: <EditOutlined />,
        },
        {
          key: "apply2",
          label: (
            <Link
              href={"https://form.jotform.com/242267742948569"}
              target="_blank"
            >
              Volunteer Application
            </Link>
          ),
          icon: <EditOutlined />,
        },
        // {
        //   key: "apply3",
        //   label: (
        //     <Link
        //       href={"/apply/course"}
        //       onClick={() => {
        //         // setTrainingModalOpen(true);
        //       }}
        //     >
        //       Training Application
        //     </Link>
        //   ),
        //   icon: <EditOutlined />,
        // },
        // {
        //   key: "apply4",
        //   label: (
        //     <Link
        //       href={"/apply/job"}
        //       onClick={() => {
        //         // setJobModalOpen(true);
        //       }}
        //     >
        //       Job Application
        //     </Link>
        //   ),
        //   icon: <EditOutlined />,
        // },
      ],
    },
    {
      label: <Link href={"/donate"}>Donate</Link>,
      key: "donate",
      icon: <MoneyCollectFilled />,
    },
    {
      label: <Link href={"/#contact"}>Contact Us</Link>,
      key: "contact",
      icon: <PhoneFilled />,
    },
  ];
  return (
    <>
      <Layout.Header
        style={{
          position: "sticky",
          paddingTop: 5,
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          height: "20%",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
        className="px-0"
      >
        <div
          className="logo h-[80px] flex justify-center items-center  bg-contain bg-gray-500/20 cursor-pointer"
          style={{
            // backgroundImage: `url(/assets/images/logo.png)`,
            backgroundColor: "white",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => router.replace("/")}
        >
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={80}
            preview={false}
          />
        </div>
        <Menu
          theme="dark"
          style={{
            flex: 1,
            minWidth: 0,
            width: "100%",
            justifyContent: "center",
            color: "white",
            background: "transparent",
            fontWeight: "bold",
          }}
          mode="horizontal"
          items={items}
        />

        {user == null ? (
          <div className="flex px-2 h-[40px] cursor-pointer rounded-lg text-sm justify-center items-center bg-gray-500/10">
            <Button
              type="text"
              style={{ color: "white" }}
              onClick={() => router.push("/auth/login")}
            >
              Login
            </Button>
          </div>
        ) : (
          <div className="flex px-2 h-[40px] cursor-pointer rounded-lg text-sm justify-center items-center bg-gray-500/10">
            <Avatar size="large" icon={<UserOutlined />} />{" "}
            <span>
              <Button
                type="text"
                style={{ color: "white" }}
                onClick={() => logOutUser()}
              >
                Logout
              </Button>{" "}
            </span>
          </div>
        )}
      </Layout.Header>
      <Modal
        open={isTrainingModalOpen}
        onCancel={() => {
          setTrainingModalOpen(false);
        }}
        style={{ width: 800 }}
        footer={false}
      >
        <CourseApplicationForm />
      </Modal>
      <Modal
        open={isJobModalOpen}
        onCancel={() => {
          setJobModalOpen(false);
        }}
        footer={false}
        style={{ width: "800px" }}
      >
        <JobApplicationForm />
      </Modal>
    </>
  );
};

export default TopMenu;
