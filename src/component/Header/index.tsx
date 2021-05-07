
import React, { FC } from 'react'
import { Layout, Breadcrumb } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
import './index.scss'
import { useSelector } from 'react-redux'
import { defaultState } from '../../interface';
import  UserComponent from './UserComponent';
const { Header } = Layout;

interface HeaderInterface {
    collapsed: boolean;
    toggle: any;
}
const HeaderComponent: FC<HeaderInterface>= ({collapsed, toggle}) => {
    const bread = useSelector((state: defaultState) => state.home.bread)

    return (
        <Header className='header'>
            <div className='menuBread'>
                {/* 折叠图标 */}
                {
                    React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })
                }
                {/* 面包屑 */}
                <Breadcrumb>
                    {
                        bread.map((item: any, index: number) => <Breadcrumb.Item key={index.toString()}><a href={item.href}>{item.name}</a></Breadcrumb.Item>)
                    }
                </Breadcrumb>
            </div>
            <UserComponent />
        </Header>
    )
}
export default HeaderComponent;