import React from 'react';
import { useSelector } from 'react-redux';

export const Todo = () => {
	const todos = useSelector((store) => store.todos);
	console.log('(todos) :>> ', todos);
	return <p>{todos[0].id}</p>;
};
