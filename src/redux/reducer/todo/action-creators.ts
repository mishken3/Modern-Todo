import { TODO_ACTION_TYPE } from './action-types';

export const addTodo = (text: string) => ({
	type: TODO_ACTION_TYPE.ADD_TODO,
	payload: text,
});

export const deleteTodo = (id: number) => ({
	type: TODO_ACTION_TYPE.DELETE_TODO,
	id,
});

export const changeTodo = (id: number, text: string) => ({
	type: TODO_ACTION_TYPE.CHANGE_TODO,
	payload: text,
	id,
});

export const toggleTodo = (id: number) => ({
	type: TODO_ACTION_TYPE.TOGGLE_TODO,
	payload: id,
});
