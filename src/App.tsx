import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

import { AddTodo, Header, Todo } from './components';

function App() {
	return (
		<Provider store={store}>
			<Header />

			<AddTodo />

			<Todo />
		</Provider>
	);
}

export default App;
