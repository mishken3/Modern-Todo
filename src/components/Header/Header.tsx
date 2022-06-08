import React, { FC } from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Header: FC = () => {
	return (
		<Navbar bg="primary" variant="dark">
			<Container className="justify-content-center">
				<Navbar.Brand>To-do-do-do app</Navbar.Brand>
			</Container>
		</Navbar>
	);
};
