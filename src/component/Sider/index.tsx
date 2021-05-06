
import React from 'react'
import { Layout, Menu } from 'antd';
import logo from '../../statics/logo.png'
import './index.scss'

const { Sider } = Layout;

interface SiderInterface {
    collapsed: boolean;
}
class SiderComponent extends React.Component<SiderInterface> {

    render (){
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
                <div className="logo">
                    <img src={logo}></img>
                    {
                        !this.props.collapsed ? 
                        <h1>ADMIN</h1> : null
                    }
                </div>
                <Menu>
                    
                </Menu>
            </Sider>
        )
    }
}
export default SiderComponent;