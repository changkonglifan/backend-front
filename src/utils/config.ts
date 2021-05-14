/*
 * @Author: XuYang 
 * @Date: 2021-05-14 09:53:39 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-14 10:16:44
 * 配置相关
 */
/**
 * 获取请求地址,
 * 根据环境变量
 * @returns 
 */
export const baseURL = (): string => {
    const env = process.env.NODE_ENV;
    switch(env){
        case  'development':
            return 'http://127.0.0.1:7001';
        default:
            return 'http://127.0.0.1:7001';
    }
}