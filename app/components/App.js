//@flow
import * as React from 'react';
import AddTodo from 'containers/AddTodo';
import VisibleTodoList from 'containers/VisibleTodoList';
import Footer from 'components/Footer';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
	render() {
		return <div>
			<AddTodo/>
			<VisibleTodoList/>
			<Footer/>
		</div>;
	}
}