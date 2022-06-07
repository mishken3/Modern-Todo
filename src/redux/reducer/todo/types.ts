import { TODO_ACTION_TYPE } from './action-types';
export interface TodoType {
	id: number;
	text: string;
	isCompleted: boolean;
}

export type TodoState = TodoType[] | [];

export interface Action {
	id: number;
	type: TODO_ACTION_TYPE;
	payload: string;
}
