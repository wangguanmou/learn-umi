import { request } from 'umi';

// 获取文章列表
export function getArticleList(page: number = 1) {
	return request('/api/article', {
		params: {
			page,
			pageSize: 12,
			status: 'publish'
		}
	})
}

// 获取文章推荐列表
export function getArticleRecommend() {
	return request('/api/article/recommend')
}

// 获取文章详情
export function getArticleDetail(id: string) {
	return request(`/api/article/${id}/views`, {
		method: 'POST',
	});
}
