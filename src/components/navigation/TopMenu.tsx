import {
  HomeOutlined,
  MoneyCollectFilled,
  FormOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu, MenuProps } from "antd";
import Link from "next/link";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    label: "Home",
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: (
      <a href="#courses" className="text-white">
        Courses
      </a>
    ),
    key: "courses",
  },
  {
    label: "Consultancy",
    key: "consuktancy",
  },
  {
    label: "Team",
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
    ],
  },
  {
    label: "Donate",
    key: "donate",
    icon: <MoneyCollectFilled />,
  },
];

const TopMenu: React.FC = () => {
  return (
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
        // backgroundColor: "transparent",
        color: "white",
      }}
      className="px-0"
    >
      <div
        className="logo h-[80px] flex justify-center items-center  bg-contain bg-gray-500/20"
        style={{
          // backgroundImage: `url(/assets/images/logo.png)`,
          backgroundColor: "white",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Image src="/assets/images/logo.png" alt="logo" height={80} />
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
      <div className="flex px-2 h-[40px] cursor-pointer rounded-lg text-sm justify-center items-center bg-gray-500/10">
        Contact Us
      </div>
    </Layout.Header>
  );
};

export default TopMenu;
