/*
 * @Author: XuYang 
 * @Date: 2021-05-06 14:49:49 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-14 10:13:44
 */
/**
 * state
 */
export interface defaultState {
    home: any;
}
/**
 * 菜单栏
 */
export interface menuInterface{
    key: string;
    title: string;
    icon: string;
    children: Array<menuInterface>;
}
/**
 * 接口返回
 */
export interface response {
    code: number;
    message: string;
    data: any;
}
/**
 * action参数
 */
export interface dispatchParams {
    type: string;
    params: any;
}