import { TodoState, Action } from './types';
import { TODO_ACTION_TYPE } from './action-types';
const initialState: TodoState = [
	{
		id: 1,
		text: 'Todo text',
		isCompleted: false,
	},
];

const todoReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case TODO_ACTION_TYPE.ADD_TODO: {
			return [
				...state,
				{
					id: new Date().getTime(),
					text: action.payload,
					isCompleted: false,
				},
			];
			/*
        return [
          ...state,
          {
            ...initialState,
            id: new Date().getTime(),
            text: action.payload,
          }
        ]
      */
		}

		case TODO_ACTION_TYPE.DELETE_TODO: {
			return state.filter((todo) => todo.id !== action.payload);
		}

		case TODO_ACTION_TYPE.CHANGE_TODO: {
			return state;
		}

		default: {
			return state;
		}
	}
};

export default todoReducer;
