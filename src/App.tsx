import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './App.css';

import { Todo } from './components/Todo';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<p>App</p>
				<Todo />
			</div>
		</Provider>
	);
}

export default App;
