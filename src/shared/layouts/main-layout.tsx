/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlusCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router";
import { useWindowSize } from "@shared/model/hooks/use-window-size";
import { getLocalStorage } from "@shared/model/helpers";

const { Header, Sider, Content } = Layout;

export const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = getLocalStorage("token");

  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { width } = useWindowSize();

  const isMobile = width < 768;

  const menuItems = [
    { key: "/", icon: <FileDoneOutlined />, label: "Yuklar" },
    {
      key: "/load-post",
      icon: <PlusCircleOutlined />,
      label: "Yuk qo'shish",
    },
  ];

  // Navigate to login page if no token
  useEffect(() => {
    if (!token) {
      navigate("/login");
      localStorage.clear();
    }
  }, [token]);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key); // navigate to the route
    if (isMobile) setDrawerVisible(false); // close drawer after click
  };

  return (
    <Layout>
      {/* Desktop Sider */}
      {!isMobile && (
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
            items={menuItems}
            onClick={handleMenuClick}
          />
        </Sider>
      )}

      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
          <Button
            type="text"
            icon={
              collapsed || isMobile ? (
                <MenuUnfoldOutlined />
              ) : (
                <MenuFoldOutlined />
              )
            }
            onClick={() =>
              isMobile ? setDrawerVisible(true) : setCollapsed(!collapsed)
            }
            style={{ fontSize: 16, width: 64, height: 64 }}
          />
        </Header>

        {/* Mobile Drawer */}
        {isMobile && (
          <Drawer
            title="Menu"
            placement="left"
            closable
            onClose={() => setDrawerVisible(false)}
            open={drawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              mode="inline"
              selectedKeys={[location.pathname]}
              items={menuItems}
              onClick={handleMenuClick}
            />
          </Drawer>
        )}

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            borderRadius: 8,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
