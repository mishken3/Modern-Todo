import React, { useState, FC } from 'react';
import { Form, ListGroup, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeTodo, deleteTodo, toggleTodo } from '../../redux/reducer/todo/action-creators';
import { TodoProps } from './Todo.types';

export const Todo: FC<TodoProps> = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [value, setValue] = useState(todo.text);
	const dispatch = useDispatch();

	const handleOnToggleComplete = (todoId: number): void => {
		dispatch(toggleTodo(todoId));
	};

	const handleOnDelete = (todoId: number): void => {
		dispatch(deleteTodo(todoId));
	};

	const toggleToEdit = () => {
		setIsEditing((isEditing) => !isEditing);
	};

	const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setValue(e.target.value);
	};

	const handleOnSubmit = (e: React.SyntheticEvent, todoId: number): void => {
		e.preventDefault();
		setIsEditing((isEditing) => !isEditing);

		dispatch(changeTodo(todoId, value));
	};

	return (
		<div className="d-flex w-100 justify-content-center align-items-center gap-2 mb-3">
			<Form.Check
				aria-label="option 1"
				type="checkbox"
				onChange={() => handleOnToggleComplete(todo.id)}
			/>

			<ListGroup
				className="w-50"
				// onMouseEnter={() => setIsEditing(true)}
				// onMouseLeave={() => setIsEditing(false)}
			>
				{isEditing === false ? (
					<ListGroup.Item
						variant={todo.isCompleted ? 'success' : 'light'}
						onDoubleClick={toggleToEdit}
					>
						{todo.text}
					</ListGroup.Item>
				) : (
					<Form onSubmit={(e) => handleOnSubmit(e, todo.id)}>
						<Form.Control
							type="text"
							value={value}
							onChange={handleOnChangeText}
							autoFocus
							className="shadow-none"
						/>
					</Form>
				)}
			</ListGroup>

			<div className="d-flex gap-2">
				<Button
					type="button"
					className="btn btn-outline-danger"
					variant="none"
					onClick={() => handleOnDelete(todo.id)}
				>
					&times;
				</Button>
			</div>
		</div>
	);
};
