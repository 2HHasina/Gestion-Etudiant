import React, { Component } from "react";
import "../../style/index.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  BarChartOutlined,
  LogoutOutlined,
  SolutionOutlined,
} from "@ant-design/icons";
import { Link} from "react-router-dom";
import jwt_decode from "jwt-decode";
import RoutesStudent from "./RoutesStudent";

const { Header, Sider, Content } = Layout;

class DashboardStudent extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    const decode = jwt_decode(localStorage.getItem("token"));
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <i class="fas fa-home fa-2x"></i>
            {this.state.collapsed ? "" : "STUDENT"}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/student/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BarChartOutlined />}>
              <Link to="/student/reporting">Reporting</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<SolutionOutlined />}>
              <Link to="/student/service">Service</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<LogoutOutlined />} onClick={()=> localStorage.removeItem('token')}>
              <Link to="/">Log Out</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 500,
            }}
          >
            <RoutesStudent />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardStudent;
