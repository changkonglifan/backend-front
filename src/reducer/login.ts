/*
 * @Author: XuYang 
 * @Date: 2021-05-06 14:32:50 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-14 10:43:53
 */
import * as constant from '../action/constant';
const initState = {
    loginInfo: {}
}

const home = (state = initState, action: any) => {
    switch(action.type) {
        case constant.SET_LOGIN_INFO:
            return {
                ...state,
                loginInfo: action.params
            }
        default: 
            return state;
    }
}
export default home;