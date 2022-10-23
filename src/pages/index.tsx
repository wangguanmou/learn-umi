import { useDispatch, useSelector, ArticleModelState, NavLink } from 'umi';
import { useEffect } from 'react';
import styles from './index.less' // css module 的使用
import classNames from 'classnames';
// import styles from './index.less'; // 禁止使用普通引入

export default function IndexPage() {
	const dispatch = useDispatch();
	const { articleList } = useSelector((state: { article: ArticleModelState }) => {
		return state.article;
	});

	useEffect(() => {
		dispatch({
			type: 'article/getArticleList'
		})
	}, []);

	return (
		<div>
			<h1 className={ classNames(styles.title, styles.title2) }>Page 111index</h1>
			{ articleList.map(item => {
				return <NavLink key={ item.id } to={ `/article/${ item.id }` }>
					<p>{ item.cover }</p>
					<img src={ item.cover } alt="" />
					<p>{ item.summary }</p>
				</NavLink>;
			}) }
		</div>
	);
}
