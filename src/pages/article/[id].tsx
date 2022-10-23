import React, { FC } from 'react';
import { useEffect } from 'react';
import { ArticleModelState, IRouteComponentProps, useDispatch, useSelector } from 'umi';
import ImageViewer from '@/components/ImageViewer';

const ArticleDetail: React.FC<IRouteComponentProps<{ id: string }>> = ({ match }) => {
	const { id } = match.params;
	const dispatch = useDispatch();
	const { articleDetail } = useSelector((state: { article: ArticleModelState }) => state.article)

	useEffect(() => {
		dispatch({
			type: 'article/getArticleDetail',
			payload: id
		})
	}, [])

	return <div>
		<ImageViewer>
			{/*	文件封面 */ }
			<img src={ articleDetail.cover } alt="" />
			{/* 文件详情 */ }
			<div dangerouslySetInnerHTML={ { __html: articleDetail.html } } />
		</ImageViewer>
	</div>;
};

export default ArticleDetail;
