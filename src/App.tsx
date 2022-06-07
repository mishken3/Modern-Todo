import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header, Todo } from './components';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<div className="App">
				<p>App</p>
				<Todo />
			</div>
		</Provider>
	);
}

export default App;
