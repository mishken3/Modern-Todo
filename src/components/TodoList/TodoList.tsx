import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TodoType } from '../../redux/reducer/todo/types';
import { Todo } from '../index';

export const TodoList: FC = () => {
	const todos: TodoType[] = useTypedSelector((store) => store.todos);

	if (!todos.length) {
		return (
			<div className="d-flex align-items-center flex-column">
				<h2 className="pb-20">Активных задач нет.</h2>
				<p>Добавьте задачку в поле выше.</p>
			</div>
		);
	}

	return (
		<div className="d-flex flex-column-reverse align-items-center justify-content-center ">
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} />
			))}
		</div>
	);
};
