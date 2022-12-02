import { axios } from '@/api/config';



// 统一导出供调用  请勿重复命名
// post请求：POST  get请求：GET
interface userData { [key: string]: any | null }
const request = {
	getLogin(params: object) { //登录
		return axios('POST', 'sys/login', params)
	},
	//用户管理
	getUserList(params: userData) { //用户列表
		return axios('GET', 'sys/user/list', params)
	},
	addUser(params: object) {  //添加用户
		return axios('POST', 'sys/user/add', params)
	},
	queryall(params: object) {  //角色列表
		return axios('GET', 'sys/role/queryall', params)
	},
	queryUserRole(params: userData) {  //角色id
		return axios('GET', `sys/user/queryUserRole?userid`, params)
	},
	getDeptTree(params: object) {  //获取机构
		return axios('POST', 'sys/tmpDeptInfo/list', params)
	},
	duplicateCheck(params: userData) {  //重复校验
		return axios('GET', 'sys/duplicate/check', params)
	},
	//上传文件
	upLoadFileNew(url: string, params: { file: any }) {
		const { file } = params
		const formData = new FormData()
		formData.append('file', file)
		return axios('upLoad_post', url, formData)
	}
};

export default request;
