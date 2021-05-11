/*
 * @Author: XuYang 
 * @Date: 2021-05-06 14:32:50 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-11 14:49:51
 */
import * as constant from '../action/constant';
const initState = {
    menu: [
        {
            key:'home',
            title:'工作台',
            icon: 'HomeOutlined'
        },
        {
            key: 'system',
            title:'系统管理',
            icon:'StarOutlined',
            children:[
                {
                    key:'auth',
                    title:'权限管理',
                    icon:'SafetyCertificateOutlined'
                },
                {
                    key:'user',
                    title: '用户管理',
                    icon:'UserOutlined'
                },
                {
                    key:'logs',
                    title:'日志管理',
                    icon:'log'
                }
            ]
        },
        {
            key: 'plugins',
            title:'插件管理',
            icon:'StarOutlined'
        }
    ],
    bread: [
        {
            href: '/',
            name: '首页'
        }
    ]
}

const home = (state = initState, action: any) => {
    switch(action.type) {
        case constant.BREAD:
            return {
                ...state,
                bread: action.params
            }
        default: 
            return state;
    }
}
export default home;