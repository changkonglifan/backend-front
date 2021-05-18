/*
 * @Descripttion: 
 * @version: 
 * @Author: xuyang
 * @Date: 2021-05-18 00:15:38
 * @LastEditors: xuyang
 * @LastEditTime: 2021-05-18 00:21:38
 * 用户管理
 */

import http from '../utils/http';
import { response, ISearchUserParams } from '../interface';
/**
 * 获取角色列表
 * @returns 
 */
export const getAllUsersByParams = (params: ISearchUserParams):Promise<response> => http.get('/user/getAllUsersByParams', {params: params})

/**
 * 添加用户
 * @param params 
 * @returns 
 */
export const addUser = (params: any): Promise<response> => http.post('/user/add', params)