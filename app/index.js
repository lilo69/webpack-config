import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'reducers';
import {logger, crashReporter} from 'middlewares';
import App from 'components/App';

const store = createStore(reducers, applyMiddleware(logger, crashReporter));

ReactDOM.render(
	<Provider store={store}><App/></Provider>, document.getElementById('root'));