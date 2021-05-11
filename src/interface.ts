/*
 * @Author: XuYang 
 * @Date: 2021-05-06 14:49:49 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-06 14:50:33
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