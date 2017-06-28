/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadUsers } from './actions/userActions';

const store = configureStore();

store.dispatch(loadUsers());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>, 
	document.getElementById('app')
);
