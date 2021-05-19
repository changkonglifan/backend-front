/*
 * @Author: XuYang 
 * @Date: 2021-05-18 10:02:39 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-19 10:10:36
 */

import React, { useState } from 'react';
import { Modal, Form, Upload, message, Input } from 'antd';
import { baseURL } from '../../utils/config';
import { getBase64, getCookie } from '../../utils';
import {
    LoadingOutlined,
    PlusOutlined
} from '@ant-design/icons'
import {
    addUser,
    editUser
} from '../../api/user'
import { RuleObject } from 'antd/lib/form';

interface IAddModal {
    isAdd: boolean;
    visible: boolean;
    user: any;
    hideModal: any;
}
const AddModal = (props: IAddModal) => {
    const [form]  = Form.useForm();
    const [headLoading, setHeadLoading] = useState(false);
    const [imgUrl, setImgUrl] = useState('');
    const [headImgUrl, setHeadImgUrl] = useState('');// 头像上传路径
    const userInfo = JSON.parse(localStorage.getItem('userInfo')|| '');
    /**
     * 上传前
     */
    const beforeUpload = (file: any): boolean => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('图片格式不正确!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('图片大小不能超过 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
    /**
     * 修改
     */
    const handleChange = (info: any) => {
        if (info.file.status === 'uploading') {
            setHeadLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (imageUrl: string) =>{
                setHeadLoading(false);
                setImgUrl(imageUrl);
                setHeadImgUrl(info.file.response.url);
            });
            message.success('上传成功');
        }
    }
    /**
     * 确认按钮
     */
    const okHandle = ():void => {
        if(props.isAdd){
            addUserHandle();
        }else {
            editUserHandle();
        }
    }
    /**
     * 添加用户
     */
    const addUserHandle = () => {
        form.validateFields().then(async (values: any): Promise<void> =>{
            values.headImg = headImgUrl;
            const res = await addUser(values)
            if(res.code === 0){
                message.success('新增成功');
                props.hideModal(true);
            }else{
                message.error(res.message)
            }
        }).catch((err) => {

        })
    }
    /**
     * 修改用户
     */
    const editUserHandle = () => {
        form.validateFields().then(async (values: any): Promise<void> =>{
            values.headImg = headImgUrl;
            values.id = props.user.id;
            const res = await editUser(values)
            if(res.code === 0){
                message.success('修改成功');
                props.hideModal(true);
            }else{
                message.error(res.message)
            }
        }).catch((err) => {

        })
    }
    const uploadButton = (
        <div>
            {headLoading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    )
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
    return (
        <Modal
            title={props.isAdd ? '新增用户' : `修改${props.user.name}`}
            visible={props.visible}
            width={600}
            okText='确认'
            cancelText='取消'
            onCancel={props.hideModal}
            onOk={okHandle}
        >
            <Form form={form}  {...layout}>
                <Form.Item
                    label='头像'
                    name='headImg'
                >
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action={`${baseURL()}/user/headImg`}
                        headers={
                            {
                                authorization: getCookie('token'),
                            }
                        }
                        data={
                            {
                                username: userInfo.username
                            }
                        }
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {
                            (imgUrl || props.user.headImg !== '') ? <img src={ imgUrl|| baseURL() + props.user.headImg } alt="avatar" style={{ width: '100%' }} /> : uploadButton
                        }
                    </Upload>
                </Form.Item>
                <Form.Item
                    label='姓名'
                    name='name'
                    initialValue={props.user.name}
                    rules={[{ required: true, message: '请输入姓名!' }]}
                >
                    <Input placeholder='请输入姓名'></Input>
                </Form.Item>
                <Form.Item
                    label='用户名'
                    name='username'
                    initialValue={props.user.username}
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input placeholder='请输入用户名' disabled={!props.isAdd}></Input>
                </Form.Item>
                <Form.Item
                    label='昵称'
                    name='nickName'
                    initialValue={props.user.nickName}
                >
                    <Input placeholder='请输入昵称' ></Input>
                </Form.Item>
                <Form.Item
                    label='手机'
                    name='phone'
                    initialValue={props.user.phone}
                    rules={
                        [
                            { required: true, message: '请输入手机号!' },
                            {
                                validator: (rule: RuleObject, value:any, callback:any) => {
                                    if(!(/^1[345678]\d{9}$/.test(value))){
                                        callback('手机号码格式不正确!')
                                    }else {
                                        callback();
                                    }
                                }
                            }
                        ]
                    }
                >
                    <Input placeholder='请输入手机号'></Input>
                </Form.Item>
                <Form.Item
                    label='邮箱'
                    name='email'
                    initialValue={props.user.email}
                >
                    <Input placeholder='请输入邮箱'></Input>
                </Form.Item>
                <Form.Item
                    label='备注'
                    name='remark'
                    initialValue={props.user.remark}
                >
                    <Input.TextArea placeholder='请输入备注'></Input.TextArea>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default AddModal;