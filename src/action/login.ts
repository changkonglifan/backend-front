/*
 * @Author: XuYang 
 * @Date: 2021-05-14 10:39:27 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-14 10:42:30
 */
import { dispatchParams } from '../interface'
import {
    SET_LOGIN_INFO
} from './constant'
/**
 * 设置登录信息
 * @param params 
 * @returns 
 */
export const setLoginInfo = (params: any):dispatchParams => {
    return {
        type: SET_LOGIN_INFO,
        params: params
    }
}