import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Test from './test';

const Root = (store: Object) => {
	return <Provider store={store.store}>
		<Router>
			<div>
				<Switch>
					<Route path="/test" component={Test}/>
				</Switch>
			</div>
		</Router>
	</Provider>;
};

export default Root;