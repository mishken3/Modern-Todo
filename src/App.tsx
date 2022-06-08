import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

import { AddTodo, Header, TodoList } from './components';

export const App: FC = () => {
	return (
		<Provider store={store}>
			<Header />

			<AddTodo />

			<TodoList />
		</Provider>
	);
};
