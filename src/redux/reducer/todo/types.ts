import { TODO_ACTION_TYPE } from './action-types';
export interface Todo {
	id: number;
	text: string;
	isCompleted: boolean;
}

export type TodoState = Todo[] | [];

export interface Action {
	id: number;
	type: TODO_ACTION_TYPE;
	payload: number | string;
}
