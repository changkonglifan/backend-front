/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-11 15:43:11
 */
import React, { useState } from 'react'
import { Layout } from 'antd'
import './index.scss'
import Header from '../../component/Header'
import SiderComponent from '../../component/Sider';
import {  withRouter } from 'react-router-dom';

const {  Content } = Layout;
const Home = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggle = () => {
    setCollapsed(!collapsed)
  }
    return (
      <div className="home">
        <Layout className="home-layout">
         <SiderComponent collapsed={collapsed}/>
          <Layout>
            <Header collapsed={collapsed} toggle={toggle}></Header>
            <Content>
              {
                props.children
              }
            </Content>
          </Layout>
        </Layout>
      </div>
    )
}

export default withRouter(Home);