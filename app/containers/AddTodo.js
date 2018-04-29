import * as React from 'react';
import {connect} from 'react-redux';
import {addTodo} from 'actions';

type Props = {
	dispatch: () => void
}

class AddTodo extends React.Component<Props> {
	render() {
		let input;
		return (
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						if (!input.value.trim()) {
							return;
						}
						this.props.dispatch(addTodo(input.value));
						input.value = '';
					}}
				>
					<input ref={node => input = node}/>
					<button type="submit">
						Add Todo
					</button>
				</form>
			</div>
		);
	}
}

export default connect()(AddTodo);

