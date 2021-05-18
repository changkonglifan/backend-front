/*
 * @Author: XuYang 
 * @Date: 2021-05-17 16:25:46 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-18 10:34:37
 */
import React, { useState, useEffect } from 'react'
import { Form, Input, message, Select, Button, Table, Pagination, Avatar, Tag, Divider } from 'antd'
import './index.scss'
import {  withRouter } from 'react-router-dom';
import { getAllRoles } from '../../api/role';
import { getAllUsersByParams } from '../../api/user'
import {
    DeleteOutlined,
    PlusOutlined,
    SearchOutlined
} from  '@ant-design/icons'
import AddModal from './AddModal';
interface IRole {
    id: string,
    name: string,
    label: string;
}
const User = (props: any) => {
    const [form] = Form.useForm();
    const [roleList,setRoleList] = useState([]); // 角色列表
    const [userList, setUserList] = useState({
        page: 1,
        pageSize: 10,
        total: 0,
        list: []
    }); // 用户列表
    const [showAddModal, setShowAddModal] = useState(false);//新增/修改 弹窗
    const [isAdd, setIsAdd] = useState(false); //新增
    const [currentUser, setCurrentUser] = useState({}); //当前用户
    useEffect(() => {
        getRoleList();
        getAllUser(1, 10);
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
    /**
     * 根据选择条件获取用户
     */
    const getAllUser = async (page: number | undefined, pageSize: number | undefined):Promise<void> => {
        const values = form.getFieldsValue();
        values.page = userList.page;
        values.pageSize = userList.pageSize;
        const res = await getAllUsersByParams(values);
        if(res.code === 0){
            setUserList(res.data);
        }else {
            setUserList({
                page: page || 1,
                pageSize: pageSize || 10,
                total: 0,
                list: []
            });
            message.error(res.message);
        }
    }
    /**
     * 翻页改变
     * @param page 
     * @param pageSize 
     */
    const pageChange = (page: number| undefined, pageSize: number | undefined):void => {
        getAllUser(page, pageSize);
    }
    /**
     * 查询按钮
     */
    const searchHandle = ():void => {
        getAllUser(1, 10);
    }

    /**
     * 删除
     */
    const del = (record:  any):void => {
        console.log(record)
    }
    /**
     * 新增用户
     */
    const addUserHandle = ():void => {
        setShowAddModal(true);
        setIsAdd(true);
    }
    /**
     * 修改用户
     * @param user 
     */
    const modifyUserHandle = (user: any): void => {
        setIsAdd(false);
        setShowAddModal(true);
        setCurrentUser(user);
    }
    /**
     * 隐藏弹窗
     */
    const hideModal = (): void => {
        setShowAddModal(false);
        setCurrentUser({});
    }
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: '昵称',
            dataIndex: 'nickName',
            key: 'nickName',
        },
        {
            title: '头像',
            dataIndex: 'headImg',
            key: 'headImg',
            render: (text:any) => {
                return  <Avatar src={text}/>
            }
        },
        {
            title: '手机',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            filters: [
                { text: '禁用', value: '0' },
                { text: '启用', value: '1' },
            ],
            render:(text: any) => {
                if(text + '' === '0'){
                    return <Tag color="#f50">禁用</Tag>
                }else {
                    return <Tag color="#87d068">启用</Tag>
                }
            }
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
        },
        {
            title: '更新时间',
            dataIndex: 'updateTime',
            key: 'updateTime',
        },
        {
            title:'操作',
            dataIndex: 'action',
            key: 'action',
            render: (text:any, record: any) => {
                return  <div>
                            <a onClick={()=> modifyUserHandle(record)}>修改</a>
                            <Divider type="vertical" />
                            <a onClick={()=> del(record)}>删除</a>
                        </div>
            }
        }
    ]
    return (
        <div className="home-content">
            <div className='home-main'>
                <h2 className='home-title'>用户管理</h2>
                <Form className='search-form' layout='inline' form={form}>
                    <Form.Item
                        name='username'
                        label='用户名'
                    >
                        <Input style={{width:120}} placeholder='请输入用户名'/>
                    </Form.Item>
                    <Form.Item
                        name='role'
                        label='角色'
                    >
                        <Select style={{width:120}} placeholder='请选择角色'>
                            {
                                roleList.map((item: IRole) => <Select.Option key={item.id + ''} value={item.id}>{item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' icon={<SearchOutlined />} onClick={searchHandle}>查询</Button>
                    </Form.Item>
                </Form>
                <div className='user-controller'>
                    <Button danger icon={<DeleteOutlined />}>批量删除</Button>
                    <Button type='primary' icon={<PlusOutlined />} onClick={addUserHandle}>新增用户</Button>
                </div>
                <div>
                    <Table columns={columns} dataSource={userList.list} pagination={false} rowKey='id'></Table>
                    <div className='pageSize'>
                        <Pagination size='small' total={userList.total} current={userList.page} pageSize={userList.pageSize} onChange={pageChange} onShowSizeChange={pageChange}></Pagination>
                    </div>
                </div>
            </div>
            <AddModal
                isAdd={isAdd}
                user={currentUser}
                visible={showAddModal}
                hideModal={hideModal}
            ></AddModal>
        </div>
    )
}

export default withRouter(User);