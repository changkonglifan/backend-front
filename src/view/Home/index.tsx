/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-07 09:51:05
 */
import React, { useState } from 'react'
import { Layout } from 'antd'
import './index.scss'
import Header from '../../component/Header'
import SiderComponent from '../../component/Sider';
import {  Route } from 'react-router-dom';

import Report from '../Report'

const {  Content } = Layout;
const Home = () => {
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
              <Route path='/' component={Report}></Route>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
}

export default Home;