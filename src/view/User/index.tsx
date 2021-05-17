/*
 * @Author: XuYang 
 * @Date: 2021-05-17 16:25:46 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-17 17:19:43
 */
import React, { useState, useEffect } from 'react'
import { Form, Input, message, Select, Button } from 'antd'
import './index.scss'
import {  withRouter } from 'react-router-dom';
import { getAllRoles } from '../../api/role';

interface IRole {
    id: string,
    name: string,
    label: string;
}
const User = (props: any) => {
    const [form] = Form.useForm();
    const [roleList,setRoleList] = useState([]);
    useEffect(() => {
        getRoleList();
    }, [])
    /**
     * 获取角色列表
     */
    const getRoleList = async ():Promise<void> => {
        const res = await getAllRoles();
        if(res.code === 0){
            setRoleList(res.data);
        }else {
            message.error(res.message);
            setRoleList([]);
        }
    }
    return (
        <div className="home">
            <div>
                <Form layout='inline' form={form}>
                    <Form.Item 
                        label='用户名'
                    >
                        <Input placeholder='请输入用户名'/>
                    </Form.Item>
                    <Form.Item 
                        label='角色'
                    >
                        <Select placeholder='请选择角色'>
                            {
                                roleList.map((item: IRole) => <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary'>查询</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default withRouter(User);