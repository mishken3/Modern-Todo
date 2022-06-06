import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './App.css';

import { Todo } from './components/Todo';

function App() {
	return (
		<Provider store={store}>
			<>
				<p>App</p>
				<Todo />
			</>
		</Provider>
	);
}

export default App;
