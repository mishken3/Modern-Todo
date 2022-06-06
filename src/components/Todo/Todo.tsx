import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoType } from '../../redux/reducer/todo/types';

import './Todo.css';

export const Todo = () => {
	const todos: TodoType[] = useTypedSelector((store) => store.todos);

	if (!todos.length) return null;
	return (
		<div className="todos">
			<div>
				{todos.map((todo) => (
					<div key={todo.id} className="todo">
						{todo.text}
					</div>
				))}
			</div>
		</div>
	);
};
