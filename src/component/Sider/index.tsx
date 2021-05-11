
import React from 'react'
import { Layout, Menu } from 'antd';
import logo from '../../statics/logo.png'
import './index.scss'
import { useSelector } from 'react-redux';
import { defaultState, menuInterface } from '../../interface';
import iconKeys from '../../utils/icon';
import { useHistory } from 'react-router-dom';

const { Sider } = Layout;

interface SiderInterface {
    collapsed: boolean;
}
const SiderComponent = (props: SiderInterface) => {
    // 菜单数据
    const menu = useSelector((state: defaultState) => state.home.menu);
    // 跳转
    const history = useHistory();

    /**
     * 菜单点击事件
     */
    const menuHandle = ({ key}: any): void => {
        history.push('/index/' + key);
    }
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            <div className="logo">
                <img src={logo} alt='logo'></img>
                {
                    !props.collapsed ? 
                    <h1>ADMIN</h1> : null
                }
            </div>
            <Menu
                mode='inline'
                theme='dark'
                onClick={menuHandle}
            >
                {
                    menu.map((item: menuInterface)=>{
                        if(item.children){
                            return <Menu.SubMenu icon={iconKeys(item.icon)} key={item.key} title={item.title}>
                                        {
                                            item.children && item.children.map((it: menuInterface)=> (
                                                <Menu.Item icon={iconKeys(it.icon)} key={it.key}>{it.title}</Menu.Item>
                                            ))
                                        }
                                    </Menu.SubMenu>
                        }else {
                            return <Menu.Item icon={iconKeys(item.icon)} key={item.key}>{item.title}</Menu.Item>;
                        }
                    })
                }
            </Menu>
        </Sider>
    )
}
export default SiderComponent;