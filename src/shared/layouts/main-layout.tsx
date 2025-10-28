import { FileDoneOutlined, PlusOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Flex, Menu } from "antd";
import { Outlet } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "sub2",
    label: "Create load",
    icon: <PlusOutlined />,
  },
  {
    key: "sub1",
    label: "Loads",
    icon: <FileDoneOutlined />,
  },
];

export const MainLayout = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Flex>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
      <div className="w-full" style={{ padding: "1rem" }}>
        <Outlet />
      </div>
    </Flex>
  );
};
