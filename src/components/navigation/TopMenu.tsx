import {
  HomeOutlined,
  MoneyCollectFilled,
  FormOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu, MenuProps } from "antd";
import logo from "@/assets/images/logo.png";
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
        paddingTop: 10,
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        height: "15%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "transparent",
        color: "white",
      }}
      className="px-0"
    >
      <div
        className="logo w-[10%] h-[100%] flex justify-center items-center bg-cover image-cover bg-gray-500/20"
        style={{
          backgroundImage: `url(/assets/images/logo.png)`,
          // backgroundColor: "white",
        }}
      />
      <Menu
        style={{
          flex: 1,
          minWidth: 0,
          width: "100%",
          justifyContent: "center",
          backgroundColor: "transparent",
          color: "white",
        }}
        mode="horizontal"
        className="bg-transparent text-white"
        items={items}
      />
      <div className="flex px-2 rounded-lg text-md justify-center items-center bg-gray-500/10">
        Contact Us
      </div>
    </Layout.Header>
  );
};

export default TopMenu;
