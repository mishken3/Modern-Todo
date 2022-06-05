import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';

import './App.css';

import { Todo } from './Todo';

function App() {
	return (
		<Provider store={store}>
			<p>App</p>
			<Todo />
		</Provider>
	);
}

export default App;
