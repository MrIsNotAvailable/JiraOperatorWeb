/**
 * @Author: Heliang
 * @Date:   2022-05-14 20:49:30
 * @Last Modified by:   Heliang
 * @Last Modified time: 2022-05-15 21:58:43
 */
'use strict';

import axios from 'axios';
import { ElLoading,ElMessage } from 'element-plus';

var instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    }
});

let loading;
let requestcount = 0;

const showLoading = () => {
    if (requestcount === 0 && !loading) {
        loading = ElLoading.service({
            fullscreen: true,
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, 0.7)',
            spinner:'el-icon-loading',
        });
    }
    requestcount++;
};

const hideLoading = () => {
    requestcount--;
    if (requestcount === 0) {
        loading.close();
    }
};

instance.interceptors.request.use(config => {
    showLoading();
    return config;
}, error => {
    hideLoading();
    ElMessage.error('请求超时');
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    hideLoading();
    console.log('响应成功');
    return response.data;
}, error => {
    hideLoading();
    console.log('error', error);
    ElMessage.error('请求失败');
    return Promise.reject(error);
});

export default instance;
