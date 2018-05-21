import axios from 'axios';
import Qs from 'qs';
// base基值
let base = '/api';
let act = '/act'
    // 用户注册获取验证码
export const registerCode = params => {
    return axios.post(`${base}/user/sms_code/register`, Qs.stringify(params))
};
// 用户注册
export const userRegister = params => {
    return axios.post(`${base}/user/register`, Qs.stringify(params))
};
// 用户重置密码获取验证码
export const resetCode = params => {
    return axios.post(`${base}/user/sms_code/reset_pass`, Qs.stringify(params))
};
// 重置密码
export const userResetPass = params => {
    return axios.post(`${base}/user/reset_password`, Qs.stringify(params))
};
// 用户登录
export const userLogin = params => {
    return axios.post(`${base}/user/login`, Qs.stringify(params))
};