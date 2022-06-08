import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

export const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container className="justify-content-center">
				<Navbar.Brand>To-do-do-do app</Navbar.Brand>
			</Container>
		</Navbar>
	);
};
