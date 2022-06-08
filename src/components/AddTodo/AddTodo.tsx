import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducer/todo/action-creators';

export const AddTodo = () => {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useDispatch();

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputValue(e.target.value);
	};

	const handleOnSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		if (inputValue.trim() === '') return;

		dispatch(addTodo(inputValue));
		setInputValue('');
	};

	return (
		<Form className="mt-3 d-flex justify-content-center" onSubmit={handleOnSubmit}>
			<InputGroup className="mb-3 w-50">
				<FormControl
					className="shadow-none"
					placeholder="Введите задачку"
					aria-label="Введите задачку"
					value={inputValue}
					onChange={handleOnChange}
				/>
				<Button className="shadow-none" type="submit" variant="dark">
					Добавить
				</Button>
			</InputGroup>
		</Form>
	);
};
