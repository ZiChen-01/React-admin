import axios from 'axios';
import { message } from 'antd'
const Server = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,//域名请求地址
    headers: {
        'Content-Type': "application/json; charset=utf-8",
    },
    timeout: 10000,//超时时间 10s
});

// 创建loading实例
var loading: any = null
// 添加请求拦截器
Server.interceptors.request.use(function (config: any) {

    //只对登录做loading操作
    if (config.url.includes('login')) {
        loading = message.loading('登录中，请稍后...', 0);
    }

    // 在请求头上缀入token
    if (localStorage.getItem('Autn-Token')) {
        config.headers.common["X-Access-Token"] = localStorage.getItem('Autn-Token');
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    message.error('系统提示');
    return Promise.reject(error);
});

// 添加响应拦截器
Server.interceptors.response.use(function (response) {

    // 对响应数据做点什么
    setTimeout(loading, 0);//关闭loading

    switch (response?.data?.code) {
        case 405:
            message.error(response?.data?.message);
            break
        case 500:
            message.error(response?.data?.message);
            break
        default:
            break
    }
    return response;
}, function (error) {
    console.log(error);

    // 请求超时提示
    if (error.message.includes('timeout')) {
        setTimeout(loading, 0); //关闭loading
        message.warning('请求超时，请检查网络或稍后再试');
        return Promise.reject(error);
    }
    const response = error.response
    // 对响应错误做点什么
    if (response) {
        switch (response.status) {
            case 403:
                message.error('拒绝访问');
                break
            case 500:
                message.error('很抱歉，登录已过期，请重新登录');
                clear()
                break
            case 404:
                message.error('很抱歉，资源未找到!');
                break
            case 405:
                message.error('请求方式错误！');
                break
            case 504:
                message.error('网络超时');
                break
            case 401:
                message.error('未授权，请重新登录!');
                clear()
                break
            default:
                message.error(error.message);
                // clear()
                break
        }
    }

    setTimeout(loading, 500);//关闭loading
    return Promise.reject(error);
});

export default Server


// 清空本地所有数据
const clear = function () {
    localStorage.clear();
    sessionStorage.clear()
    setTimeout(() => {
        window.location.reload()
    }, 1000)
}
