import React, {  useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../../style/index.css";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LaptopOutlined
} from '@ant-design/icons';

import {Cours} from './Cours'
import Modules from './Modules'
import {AddAbs} from './absences/AddAbsence'
const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout

const Dashboard = ()=>{
 
    const [collapsed,setCollapsed] = useState(false)



    return(
        <Layout  >
            <Sider
            trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
    
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/prof/home">Modules</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/prof/cours">Cours</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="Absences">
            <Menu.Item key="3"><Link to="/prof/addAbs">Marquer l'absence </Link></Menu.Item>
            <Menu.Item key="4">Liste d'absence</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Notes">
            <Menu.Item key="5">Ajouter les notes</Menu.Item>
            <Menu.Item key="6">afficher les notes</Menu.Item>
          </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: ()=> setCollapsed(!collapsed),
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/prof/home" component={Modules}/>
              <Route exact path="/prof/cours" component={Cours} />
              <Route exact path="/prof/addAbs" component={AddAbs} />
            </Switch>
          </Content>
        </Layout>
        </Layout>
    )
}

export default Dashboard;