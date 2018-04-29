import * as React from 'react';
import FilterLink from 'containers/FilterLink';
import {VisibilityFilters} from 'actions';

type Props = {};

export default class Footer extends React.Component<Props> {
	render() {
		return <p>
			Show:
			{' '}
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>
				All
			</FilterLink>
			{', '}
			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
				Active
			</FilterLink>
			{', '}
			<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
				Completed
			</FilterLink>
		</p>;
	}
}