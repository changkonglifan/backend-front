/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-07 16:20:22
 */
import React from 'react'
import { Button, Form, Input, message } from 'antd'
import './index.scss'
import logo from '../../statics/logo.png'
import { useHistory } from 'react-router-dom'
const Login = () => {
    const history =  useHistory(); 
    const [form] = Form.useForm();
    /**
     * 表单输入完成
     */
    const finishForm = () => {

    }
    /**
     * 登录
     */
    const login = ():void => {
        const values = form.getFieldsValue(true);
        message.success('登录成功');
        message.success(JSON.stringify(values));
        history.push('/index')
    }
    return (
        <div className='login'>
            <div className="form">
                <div className='logo-info'>
                    <img src={logo} ></img>
                    <span>ADMIN</span>
                </div>
                <Form
                    form={form}
                    layout="vertical"
                    name='login'
                    onFinish={finishForm}
                >
                    <Form.Item
                        label='用户名'
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input placeholder='请输入用户名'/>
                    </Form.Item>
                    <Form.Item
                        label='密码'
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input.Password placeholder='请输入密码'/>
                    </Form.Item>
                    <Form.Item
                        label='验证码'
                        name="code"
                        rules={[{ required: true, message: '请输入验证码!' }]}
                    >
                        <div className='code'>
                            <Input  placeholder='请输入验证码'/>
                            <img width='80' height='32'></img>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button className='btn-login' onClick={login} type="primary">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;