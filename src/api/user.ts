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

/**
 * 修改用户
 * @param params 
 * @returns 
 */
 export const editUser = (params: any): Promise<response> => http.post('/user/edit', params)

 /**
  * 删除用户
  * @param params 
  * @returns 
  */
 export const deleteUser = (params: any): Promise<response> => http.post('/user/del', params)


/**
 * 停用/ 启用用户
 * @param params 
 * @returns 
 */
export const enableUser = (params: any): Promise<response> => http.post('/user/enable', params)

/**
 * 修改用户密码
 * @param params 
 * @returns 
 */
export const changePsw = (params: any): Promise<response> => http.post('/user/changePsw', params)