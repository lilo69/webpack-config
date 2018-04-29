//@flow
import * as React from 'react';

type Props = {
	onClick: () => void,
	completed: boolean,
	text: string
};

export default class Todo extends React.Component<Props> {
	render() {
		return <li onClick={this.props.onClick} style={{
			textDecoration: this.props.completed === true ? 'line-through' : 'none',
			cursor: 'pointer'
		}}>
			{this.props.text}
		</li>;
	}
}