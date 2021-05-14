/*
 * @Author: XuYang 
 * @Date: 2020-11-24 19:02:48 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-14 10:50:03
 * 通用方法, 包括cookies操作
 */
import JSEncrypt from 'jsencrypt'
/**
 * 写入cookies
 * @param {*} name 
 * @param {*} value 
 */
 export const setCookie = (name: string,value: string): void => {
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + '=' + escape (value) + ';expires=' + exp.toUTCString();
}
/**
 * 读取cookies
 * @param {*} name 
 */
export const getCookie = (name: any): string | null => {
    var arr,reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    if(arr === document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
/**
 * 删除cookies
 * @param name 
 */
export const delCookie = (name: string):void => {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if(cval!=null)
        document.cookie= name + '=' + cval + ';expires=' + exp.toUTCString();
}
/**
 * 清空cookies
 * @param {*} name 
 */
export function clearCookie(name: string):void {     
    setCookie(name, ""); 
}
/**
 * 删除所有的cookies
 */
export const clearAllCookie = ():void => {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
    }
}
/**
 * 加密
 * @param str 
 */
export const encrypt = (str: string): string => {
    const pubkey = `
-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMvlxsXngVbhxotSNzeRZMJ19Fvjh5mk
LRadjazfVbhssL8T/gifWcXeWfg9QJoqn9J4uBM/2Yz+A94T1VdrJEkCAwEAAQ==
-----END PUBLIC KEY-----
`
    let js = new JSEncrypt({});
    js.setPublicKey(pubkey);
    return js.encrypt(str).toString();
}