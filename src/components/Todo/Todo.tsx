import React from 'react';
import { Form, ListGroupItem } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { changeTodo, deleteTodo, toggleTodo } from '../../redux/reducer/todo/action-creators';
import { TodoType } from '../../redux/reducer/todo/types';

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

	const handleOnToggleComplete = (todoId: number): void => {
		dispatch(toggleTodo(todoId));
	};

	const handleOnChangeText = (todoId: number): void => {
		const newTodoText = 'test new Text';

		dispatch(changeTodo(todoId, newTodoText));
	};

	return (
		<div className="d-flex flex-column align-items-center justify-content-center ">
			{todos.map((todo) => (
				<div
					key={todo.id}
					className="d-flex w-100 justify-content-center align-items-center gap-2 mb-3"
				>
					<Form.Check
						aria-label="option 1"
						type="checkbox"
						onChange={() => handleOnToggleComplete(todo.id)}
					/>

					<ListGroupItem
						variant={todo.isCompleted ? 'success' : 'light'}
						action
						className="w-50 rounded-3"
					>
						{todo.text}
					</ListGroupItem>

					<div className="buttons d-flex gap-2">
						<button
							type="button"
							className="btn btn-outline-secondary"
							onClick={() => handleOnChangeText(todo.id)}
						>
							Изменить
						</button>

						<button
							type="button"
							className="btn btn-outline-danger"
							onClick={() => dispatch(deleteTodo(todo.id))}
						>
							&times;
						</button>
					</div>
				</div>
			))}
		</div>
	);
};
