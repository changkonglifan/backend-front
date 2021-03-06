/*
 * @Author: XuYang 
 * @Date: 2021-05-17 17:10:25 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-17 17:22:34
 * 请求角色
 */

import http from '../utils/http';
import { response } from '../interface';
interface IRoleParams {
    name: String | undefined;
}
/**
 * 获取角色列表
 * @returns 
 */
export const getAllRoles = (params: IRoleParams):Promise<response> => http.get('/role/getAllRoles', {params: params})