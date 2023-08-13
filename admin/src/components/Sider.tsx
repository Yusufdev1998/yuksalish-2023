import React, { useState } from "react";
import { SettingFilled, TeamOutlined } from "@ant-design/icons";
import { Menu, type MenuProps, Layout } from "antd";
import { anketa, filial, hr, lavozim, spravochnik } from "../constant/constant";
type MenuItem = Required<MenuProps>["items"][number];
const { Sider } = Layout;
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
import { useLocation, useNavigate } from "react-router-dom";
const items: MenuItem[] = [
  getItem(spravochnik, "sub1", <SettingFilled />, [
    getItem("Filiallar", `/${filial}`),
    getItem("Lavozimlar", `/${lavozim}`),
  ]),
  getItem(hr, "sub2", <TeamOutlined />, [getItem(anketa, `/${anketa}`)]),
];
function Siders() {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[location.pathname]}
        mode="inline"
        items={items}
        onClick={(item) => {
          navigate(item.key);
        }}
      />
    </Sider>
  );
}

export default Siders;
