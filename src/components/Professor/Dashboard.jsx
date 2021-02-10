import React, {  useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "../../style/index.css";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined,
  UploadOutlined,
  LaptopOutlined
} from '@ant-design/icons';

import Cours from '../Admin/GCours/ListCours'
import Modules from './Modules'
import {AddAbs} from './absences/AddAbsence'
import {AddNote} from './notes/addNote'
import {ListAbs} from './absences/ListAbs'
import {ListNotes} from './notes/ListNotes'
const {SubMenu} = Menu;
const {Header, Sider, Content} = Layout

const Dashboard = ()=>{
 
    const [collapsed,setCollapsed] = useState(false)



    return(
        <Layout  >
            <Sider
            trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
              <i class="fas fa-home fa-2x"></i>
              {collapsed ? "" : "PROF"}
            </div>
    
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/prof">Modules</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/prof/cours">Cours</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<LaptopOutlined />} title="Absences">
            <Menu.Item key="3"><Link to="/prof/addAbs">Marquer l'absence </Link></Menu.Item>
            <Menu.Item key="4"><Link to="/prof/listAbs">Liste d'absence </Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="Notes">
            <Menu.Item key="5"><Link to="/prof/addNote"> Saisir une note </Link></Menu.Item>
            <Menu.Item key="6"><Link to="/prof/listNotes">Liste des notes </Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="7" icon={<LogoutOutlined />} onClick={()=> localStorage.removeItem('token')}>
              <Link to="/">Log Out</Link>
            </Menu.Item>
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
              <Route exact path="/prof" component={Modules}/>
              <Route exact path="/prof/cours" component={Cours} />
              <Route exact path="/prof/addAbs" component={AddAbs} />
              <Route exact path="/prof/addNote" component={AddNote} />
              <Route exact path="/prof/listAbs" component={ListAbs} />
              <Route exact path="/prof/listNotes" component={ListNotes} />
            </Switch>
          </Content>
        </Layout>
        </Layout>
    )
}

export default Dashboard;