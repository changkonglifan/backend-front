/*
 * @Author: XuYang 
 * @Date: 2021-05-06 14:32:50 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-06 15:14:53
 */
import * as constant from '../action/constant'
const initState = {
    bread: [
        {
            href: '/',
            name: '首页'
        }
    ]
}

export default (state = initState, action: any) => {
    switch(action.type) {
        case constant.BREAD:
            return {
                ...state,
                bread: action.params
            }
        default: 
            return state;
    }
}