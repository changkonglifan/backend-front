/*
 * @Author: XuYang 
 * @Date: 2021-05-14 09:47:49 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-14 10:14:05
 * 请求
 */
import http from '../utils/http';
import { response } from '../interface';

interface loginParams {
    username: string;
    password: string;
}
export const login = (params: loginParams):Promise<response> => http.post('/user/login', params)