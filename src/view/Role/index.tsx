/*
 * @Author: XuYang 
 * @Date: 2021-05-17 16:25:46 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-19 10:08:11
 */
import React, { useState, useEffect } from 'react'
import { Form, Input, message, Select, Button, Table, Divider, Popconfirm } from 'antd'
import './index.scss'
import {  withRouter } from 'react-router-dom';
import { getAllRoles } from '../../api/role';
import {
    // DeleteOutlined,
    PlusOutlined,
    SearchOutlined
} from  '@ant-design/icons'
interface IRole {
    id: string,
    name: string,
    label: string;
}
const Role = (props: any) => {
    const [form] = Form.useForm();
    const [roleList, setRoleList] = useState([]); // 角色列表
    useEffect(() => {
        getRoleList();
    }, [])
    /**
     * 获取角色列表
     */
    const getRoleList = async ():Promise<void> => {
        const res = await getAllRoles({name: undefined});
        if(res.code === 0){
            setRoleList(res.data);
        }else {
            message.error(res.message);
            setRoleList([]);
        }
    }
    /**
     * 表格变化
     * @param pagination 
     * @param filters 
     * @param sorter 
     */
     const tableChangeHandle = (pagination: any, filters: any, sorter: any) => {
        // 筛选
       
    }
    /**
     *  修改角色
     */
    const modifyRoleHandle = async (record: any): Promise<void> => {

    }
    /**
     * 查询
     */
    const searchHandle = () => {

    }
    /**
     * 添加角色
     */
    const addRoleHandle = () => {

    }
    /**
     * 删除
     */
    const del = async (record: any): Promise<void> => {

    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '标签',
            dataIndex: 'label',
            key: 'label',
        },
        {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
            sorter: true
        },
        {
            title: '更新时间',
            dataIndex: 'updateTime',
            key: 'updateTime',
            sorter: true
        },
        {
            title:'操作',
            dataIndex: 'action',
            key: 'action',
            render: (text:any, record: any) => {
                return  <div>
                            <a onClick={()=> modifyRoleHandle(record)}>修改</a>
                            <Divider type="vertical" />
                            <Popconfirm title="确定删除?？" okText="确定" cancelText="取消" onConfirm={()=>del(record)}>
                                <a style={{color: 'red'}}>删除</a>
                            </Popconfirm>
                        </div>
            }
        }
    ]
    return (
        <div className="home-content">
            <div className='home-main'>
                <h2 className='home-title'>标签管理</h2>
                <Form className='search-form' layout='inline' form={form}>
                    <Form.Item
                        name='name'
                        label='标签名称'
                    >
                        <Input style={{width:120}} placeholder='请输入用户名'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' icon={<SearchOutlined />} onClick={searchHandle}>查询</Button>
                    </Form.Item>
                </Form>
                <div className='user-controller'>
                    {/* <Button danger icon={<DeleteOutlined />}>批量删除</Button> */}
                    <Button type='primary' icon={<PlusOutlined />} onClick={addRoleHandle}>新增角色</Button>
                </div>
                <div>
                    <Table columns={columns} dataSource={roleList} onChange={tableChangeHandle} pagination={false} rowKey='id'></Table>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Role);