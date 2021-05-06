/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-06 11:22:38
 */
import React, { FC } from 'react'
import { Layout } from 'antd'
import './index.scss'

const { Header, Sider, Content } = Layout;

const Home: FC = () => (
    <div className="home">
      <Layout>
        <Sider>
          sider
        </Sider>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
        </Layout>
      </Layout>
    </div>
  );

export default Home;