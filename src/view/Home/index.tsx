/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-06 14:26:23
 */
import React from 'react'
import { Layout } from 'antd'
import './index.scss'
import Header from '../../component/Header'
import SiderComponent from '../../component/Sider';
import {  Route } from 'react-router-dom';

import Report from '../Report'

const {  Content } = Layout;
class Home extends React.Component {
  
  state = { 
    collapsed: false
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render(){
    return (
      <div className="home">
        <Layout className="home-layout">
         <SiderComponent collapsed={this.state.collapsed}/>
          <Layout>
            <Header collapsed={this.state.collapsed} toggle={this.toggle}></Header>
            <Content>
              <Route path='/' component={Report}></Route>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Home;