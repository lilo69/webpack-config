//@flow

import * as React from 'react';
import Todo from 'components/Todo';

type Props = {
	todos: Array<{
		id: number,
		completed: boolean,
		text: string
	}>,
	toggleTodo: (id: number) => void
};

export default class TodoList extends React.Component<Props> {
	render() {
		// console.log(this.props);
		return <ul>
			{
				this.props.todos.map((todo) => {
					return <Todo key={todo.id} completed={todo.completed} text={todo.text} onClick={(e) => {
						this.props.toggleTodo(todo.id);
					}}/>;
				})
			}
		</ul>;
	}
}