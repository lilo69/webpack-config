//@flow
import * as React from 'react';

type Props = {
	active: boolean,
	children: React.Node,
	onClick: () => void
}

export default class Link extends React.Component<Props> {
	render() {
		return <a href="javascript:void(0)" onClick={(e) => {
			e.preventDefault();
			this.props.onClick();
		}}>
			{this.props.children}
		</a>;
	}
}