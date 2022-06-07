import { TodoState, Action } from './types';
import { TODO_ACTION_TYPE } from './action-types';
const initialState: TodoState = [
	{
		id: 1,
		text: 'HTML',
		isCompleted: false,
	},
	{
		id: 2,
		text: 'CSS',
		isCompleted: false,
	},
	{
		id: 3,
		text: 'JS',
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
			return state.filter((todo) => todo.id !== action.id);
		}

		case TODO_ACTION_TYPE.CHANGE_TODO: {
			return state.map((todo) => {
				if (todo.id !== action.id) return todo;

				todo.text = action.payload;
				return todo;
			});
		}

		default: {
			return state;
		}
	}
};

export default todoReducer;
