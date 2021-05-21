/*
 * @Author: XuYang 
 * @Date: 2021-05-06 15:19:54 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-17 17:32:15
 */
import React, { useState } from 'react';
import {
    BellOutlined
} from '@ant-design/icons'
import { Dropdown, Menu, Badge, Avatar, message } from 'antd'
import { useHistory } from 'react-router-dom'

import './index.scss'
import ChangePassword from './ChangePassword';

const User = () => {
    const history = useHistory();
    const [showChangePsw, setShowChangePsw] = useState(false);
    /**
     * 下拉菜单按钮
     */
    const menuHandle = ( e:any ):void => {
        switch(e.key){
            case 'changePsw':
                setShowChangePsw(true);
                break;
            case 'center':
                history.push('/center');
                break;
            case 'logout':
                history.push('/login')
                break;
        }
    }
    
    const hideChangePsw = (flag: boolean): void => {
        if(flag){
            //修改成功, 重新登录
            message.success('修改成功,请重新登录');
            history.push('/login');
        }else {
            setShowChangePsw(false);
        }
    }
    const menu = (
        <Menu onClick={menuHandle}>
            <Menu.Item key='changePsw'>
                修改密码
            </Menu.Item>
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
            <div className='userBadge'> 
                <Badge count={5}>
                    <BellOutlined />
                </Badge>
            </div>
            <Dropdown overlay={menu} placement="bottomCenter" arrow>
                <div className='userInfo'>
                    <span>管理员</span><Avatar />
                </div>
            </Dropdown>
            {
                showChangePsw &&
                <ChangePassword
                    visible={showChangePsw}
                    hideModal={hideChangePsw}
                    
                />
            }
        </div>
    )
    
}

export default User;