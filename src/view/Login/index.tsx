/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-17 17:36:47
 */
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import './index.scss'
import logo from '../../statics/logo.png'
import { useHistory } from 'react-router-dom'
import { baseURL } from '../../utils/config'
import { login } from '../../api/login'
import { setLoginInfo } from '../../action/login'
import { useDispatch } from 'react-redux'
import { encrypt, setCookie } from '../../utils'

const Login = () => {
    const history =  useHistory(); 
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [codeSvg, setCodeSvg] = useState("");
    useEffect(()=>{
        setCodeSvg(baseURL() + '/user/code')
    }, [])

    /**
     * 表单输入完成
     */
    const finishForm = () => {

    }
    /**
     * 更新验证码
     */
    const refreshCode = ():void => {
        setCodeSvg(baseURL() + '/user/code?v=' + new Date().getTime())
    }
    /**
     * 登录
     */
    const loginHandle = async ():Promise<void> => {
        const values = form.getFieldsValue(true);
        console.log('loginData', values)
        values.password = encrypt(values.password)
        const res = await login(values);
        if(res.code === 0){
            // 设置cookies
            setCookie('token', res.data.token);
            
            message.success('登录成功');
            history.push('/index')
            dispatch(setLoginInfo(res.data));
        }else {
            refreshCode();
            message.error(res.message);
        }
    }
    return (
        <div className='login'>
            <div className="form">
                <div className='logo-info'>
                    <img src={logo} alt='admin'></img>
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
                            <img alt='验证码' src={codeSvg} onClick={refreshCode}></img>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button className='btn-login' onClick={loginHandle} type="primary">登录</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login;