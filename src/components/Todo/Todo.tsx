import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoType } from '../../redux/reducer/todo/types';

export const Todo = () => {
	const todos: TodoType[] = useTypedSelector((store) => store.todos);

	if (!todos.length) return null;
	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>{todo.text}</div>
			))}
		</div>
	);
};
