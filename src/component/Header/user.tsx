/*
 * @Author: XuYang 
 * @Date: 2021-05-06 15:19:54 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-06 15:33:11
 */
import React from 'react';
import {
    BellOutlined
} from '@ant-design/icons'
import { Dropdown, Menu } from 'antd'
import { useHistory } from 'react-router-dom'

import './index.scss'

const User = () => {

    const history = useHistory();
    /**
     * 下拉菜单按钮
     */
    const menuHandle = ( key:any ):void => {
        switch(key){
            case 'center':
                history.push('/center');
            case 'logout':
                history.push('/login')
        }
    }
    
    const menu = (
        <Menu onClick={menuHandle}>
            <Menu.Item key='center'>
                个人中心
            </Menu.Item>
            <Menu.Item key='logout'>
                退出登陆
            </Menu.Item>
        </Menu>
    )
    return (
        <div className='user'>
            <BellOutlined />
            <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <span>管理员</span><img></img>
            </Dropdown>
        </div>
    )
    
}

export default User;