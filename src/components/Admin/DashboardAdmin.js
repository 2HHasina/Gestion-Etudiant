import React from "react";
import "antd/dist/antd.css";
import "../../style/index.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  BookOutlined,
  SolutionOutlined
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";
import Routes from './Routes'

const { Header, Sider, Content } = Layout;

class DashboardAdmin extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
          <i class="fas fa-home fa-2x"></i>
            { this.state.collapsed ? '': 'ADMIN'}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <SubMenu
              key="sub1"
              icon={<UsergroupAddOutlined />}
              title="Gestion des utilisateurs"
            >
              <Menu.ItemGroup key="g1" title="Etudiant">
                <Menu.Item key="1">
                  <Link to="/listEtd">Liste des Etudiants</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/ajoutEtd">Ajouter Etudiant</Link>
                </Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup key="g2" title="Professeur">
                <Menu.Item key="3">
                  <Link to="/listProf">Liste des Professeurs</Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/ajoutProf">Ajouter Professeur</Link>
                </Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<SettingOutlined />}
              title="Gestion des Filieres"
            >
              <Menu.Item key="5">
                <Link to="/listFiliere">Liste des Filieres</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/ajoutFiliere">Ajouter Filiere</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<SettingOutlined />} key="sub3" title="NIVEAU">
              <Menu.Item key="7">
                <Link to="/listNv">Liste des Niveau</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/ajoutNv">Ajouter Niveau</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<SettingOutlined />} key="sub4" title="SEMESTRE">
              <Menu.Item key="9">
                <Link to="/listSemestre">Liste des Semestre</Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/ajoutSemestre">Ajouter Semestre</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<SettingOutlined />} key="sub5" title="MODULE">
              <Menu.Item key="11">
                <Link to="/listModule">Liste des Modules</Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to="/ajoutModule">Ajouter Module</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<BookOutlined />} key="sub6" title="COURS">
              <Menu.Item key="13">
                <Link to="/listCours">Liste des Cours</Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to="/ajoutCours">Ajouter Cours</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu icon={<SolutionOutlined />} key="sub7" title="SERVICE">
              <Menu.Item key="15">
                <Link to="/listService">Liste des Service</Link>
              </Menu.Item>
            </SubMenu>
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
              minHeight: 280,
            }}
          >
            <Routes />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default DashboardAdmin;
