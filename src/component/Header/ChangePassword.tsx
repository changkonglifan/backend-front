/*
 * @Author: XuYang 
 * @Date: 2021-05-06 15:19:54 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-17 17:32:15
 */
import React from 'react';
import { Form, Modal,  Input, message, FormItemProps } from 'antd'
import {
    changePsw
} from '../../api/user'

import './index.scss'
import { encrypt } from '../../utils';

interface IChangePsw {
    visible: boolean;
    hideModal: any;
}
const ChangePassword = (props: IChangePsw) => {
    const [form] = Form.useForm();
    /**
     * 修改密码
     */
    const changePswHandle = (): void => {
        form.validateFields().then(async (value: any): Promise<void> => {
            const params = {
                username: value.username,
                oldPwd: encrypt(value.password),
                newPwd: encrypt(value.newPassword)
            }
            const res = await changePsw(params)
            if(res.code === 0){
                props.hideModal(true);
            }else {
                message.error(res.message);
            }
        }).catch((err: any) => {

        })
    }
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    return (
        <Modal
            title='修改密码'
            visible={props.visible}
            onOk={changePswHandle}
            onCancel={()=>props.hideModal(false)}
            width={400}
        >
            <Form form={form} { ...layout }>
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入用户名!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="原密码"
                    name="password"
                    rules={[{ required: true, message: '请输入旧密码!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="新密码"
                    name="newPassword"
                    rules={[{ required: true, message: '请输入新密码!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="确认新密码"
                    name="confirmNewPassword"
                    rules={
                        [
                            { required: true, message: '请再次输入新密码!' },
                            { 
                                validator: async (rule: FormItemProps<any>, value: any, callback: any) => {
                                    if(value !== form.getFieldValue('newPassword')){
                                        throw new Error('两次输入密码不相同')
                                    }else {
                                        callback();
                                    }
                                }
                            },
                        ]
                    }
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ChangePassword;