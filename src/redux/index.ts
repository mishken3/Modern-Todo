import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './reducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export { store };
