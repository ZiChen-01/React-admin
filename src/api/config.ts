import Server from '@/api/request'

// 封装请求方式
// ----------------methods:请求方式   url:请求地址   params：请求参数----------------
export function axios(methods: string, url: string, params: object | null | undefined | string,) {
	switch (methods) {
		case 'GET':
			return Server({
				url: url,
				method: 'get',
				params,
			});
		case 'POST':
			return Server({
				url: url,
				method: 'post',
				data: params,
			});
		case 'DELETE':
			return Server({
				url: url,
				method: 'delete',
				params,
			});
		case 'PUT':
			return Server({
				url: url,
				method: 'put',
				data: params,
			});
		case 'OPTIONS':
			return Server({
				url: url,
				method: 'options',
				params,
			});
		case "upLoad_post": //上传文件
			return Server({
				url: url,
				method: 'post',
				data: params,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
		default:
			return '找不到此方法'
	}
}