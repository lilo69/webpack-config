import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {isEqual} from 'lodash';
import Routes from 'routes';
// import saga from 'saga';
require('../public/assets/styles/style.scss');

const sagaMiddleware = createSagaMiddleware();
const defaultState = {};

// let store = createStore(
// 	defaultState,
// 	applyMiddleware((process.env.NODE_ENV === 'development' && logger), sagaMiddleware)
// );

// sagaMiddleware.run(saga);

//listen access token change after login
let currentState = undefined;
// store.subscribe(() => {
// 	let prevState = currentState;
// 	currentState = store.getState();
// 	if (currentState && prevState) {
// 		if (!isEqual(currentState.data.user, prevState.data.user)) {
// 			Cookie.save('cyhome', {
// 				...cache,
// 				user: currentState.data.user
// 			});
// 		}
// 	}
// });

//pass language selected from cache to project
// setLanguage(cache.language ? cache.language: 'en');

ReactDOM.render(<Routes/>, document.getElementById('root'));