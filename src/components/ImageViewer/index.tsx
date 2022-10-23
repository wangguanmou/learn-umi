import React from 'react';
import { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';

const ImageViewer: React.FC = ({ children }) => {
	const containerEle = useRef(null);

	useEffect(() => {
		const viewer = new Viewer(containerEle.current as never as HTMLElement);
		return () => {
			// 销毁生命周期
			viewer.destroy();
		};
	}, [children]);
	return <div ref={ containerEle }>{ children }</div>;
}

export default ImageViewer;
