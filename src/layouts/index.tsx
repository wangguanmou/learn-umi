import { IRouteComponentProps } from 'umi';

export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
	return (
		<div className="wrapper">
			<div>
				header
			</div>
			<div className="content">
				{ children }
			</div>
			<div>
				footer
			</div>
		</div>
	)
}
