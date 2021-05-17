/*
 * @Author: XuYang 
 * @Date: 2020-11-24 19:02:48 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-17 18:01:19
 * 通用方法, 包括cookies操作
 */
import JSEncrypt from 'jsencrypt'
/**
 * 写入cookies
 * @param {*} name 
 * @param {*} value 
 */
 export function setCookie(name:string, value:string) {
    const hours = 2;
    const exp = new Date();
    exp.setTime(exp.getTime() + hours * 3600 * 1000);
    document.cookie =
      name + '=' + encodeURIComponent(value);
  }
  

 
/**
 * 读取cookies
 * @param {*} name 
 */
 export function getCookie(name: string):string {
    const value = '; ' + document.cookie;
    const parts:Array<string> = value.split('; ' + name + '=');
    if (parts && parts.length === 2) {
      return parts.pop().split(';').shift();
    }
    return '';
}
/**
 * 删除cookies
 * @param name 
 */
 export function delCookie($name:any) {
    const myDate = new Date();
    myDate.setTime(-1000); //设置时间
    document.cookie = $name + '=\'\'; expires=' + myDate.toTimeString();
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
 export function delAllCookie() {
    const myDate = new Date();
    myDate.setTime(-1000); //设置时间
    const data = document.cookie;
    const dataArray = data.split('; ');
    for (let i = 0; i < dataArray.length; i++) {
      const varName = dataArray[i].split('=');
      document.cookie = varName[0] + '=\'\'; expires=' + myDate.toLocaleDateString();
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