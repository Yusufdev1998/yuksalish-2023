import React from "react";

import { Breadcrumb, Layout, theme } from "antd";
import Siders from "../components/Sider";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const { Content, Footer } = Layout;

const MainLayaut: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const location = useLocation();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Siders />
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {location.pathname}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              height: "100%",
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Yuksalish 2023</Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayaut;
