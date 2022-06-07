import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { changeTodo, deleteTodo } from '../../redux/reducer/todo/action-creators';
import { TodoType } from '../../redux/reducer/todo/types';

import './Todo.css';

export const Todo = () => {
	const todos: TodoType[] = useTypedSelector((store) => store.todos);
	const dispatch = useDispatch();
	if (!todos.length) {
		return (
			<div className="todos">
				<h1>Добавьте задачку</h1>
			</div>
		);
	}

	const handleOnchange = (todoId: number) => {
		const newTodoText = 'test new Text';

		dispatch(changeTodo(todoId, newTodoText));
	};

	return (
		<div className="todos">
			{todos.map((todo) => (
				<div key={todo.id} className="todo m-2">
					<ListGroupItem>{todo.text}</ListGroupItem>

					<div className="buttons">
						<button
							type="button"
							className="btn btn-outline-secondary"
							onClick={() => handleOnchange(todo.id)}
						>
							Изменить
						</button>

						<button
							type="button"
							className="btn btn-outline-danger"
							onClick={() => dispatch(deleteTodo(todo.id))}
						>
							x
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
