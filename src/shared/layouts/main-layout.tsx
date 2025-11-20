import { ALL_ROUTES } from "@shared/model/consts";
import { getLocalStorage } from "@shared/model/helpers";
import { ContentWrapper } from "@shared/ui/content-wrapper";
import { Header } from "@shared/ui/header";
import type { MenuProps } from "antd";
import { Flex, Menu } from "antd";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router";

type MenuItem = Required<MenuProps>["items"][number];

// Build Menu items directly from routes
const menuItems: MenuItem[] = ALL_ROUTES.map(({ path, title, icon }) => ({
  key: path,
  label: title,
  icon,
}));

export const MainLayout = () => {
  const token = getLocalStorage("token");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Navigate to login page if no token
  useEffect(() => {
    if (!token) {
      navigate("/login");
      localStorage.clear();
    }
  }, [token]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  const targetRoute = ALL_ROUTES.find((route) => route.path === pathname);
  if (!targetRoute) return null;

  return (
    <div>
      <Header />
      <Flex>
        <Menu
          mode="inline"
          items={menuItems}
          onClick={handleMenuClick}
          selectedKeys={[pathname]}
          style={{ width: 256, height: "calc(100vh - 60px)" }}
        />
        <ContentWrapper title={targetRoute.title}>
          <Outlet />
        </ContentWrapper>
      </Flex>
    </div>
  );
};
