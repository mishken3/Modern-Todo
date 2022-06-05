import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const Todo = () => {
	const todos = useTypedSelector((store) => store.todos);
	console.log('(todos) :>> ', todos);
	return <p>{todos[0].text}</p>;
};
