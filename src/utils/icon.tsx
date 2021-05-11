/*
 * @Author: XuYang 
 * @Date: 2021-05-11 14:42:28 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-11 14:47:49
 */
import React from 'react';
import {
    HomeOutlined,
    SettingOutlined,
    StarOutlined,
    SafetyCertificateOutlined,
    UserOutlined
} from  '@ant-design/icons'

const iconKeys = (key: string) => {
    switch(key) {
        case 'HomeOutlined':
            return <HomeOutlined />
        case 'SettingOutlined':
            return <SettingOutlined />;
        case 'StarOutlined':
            return <StarOutlined />;
        case 'SafetyCertificateOutlined':
            return <SafetyCertificateOutlined />
        case 'UserOutlined':
            return <UserOutlined />;
        default:
            return <HomeOutlined />
    }
}

export default iconKeys;