import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
} from 'react-bootstrap';
import { Context } from '../../Context/Auth';

const NavigationBar = () => {
	const {
		auth: { logged },
	} = useContext(Context);
	return (
		<Navbar bg='light' expand='lg' style={{ width: '100%' }}>
			<Navbar.Brand as={Link} to='/'>
				DebateHouse
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					{logged && (
						<>
							<Nav.Link as={Link} to='/news'>
								News
							</Nav.Link>
							<Nav.Link as={Link} to='/discussion'>
								Discussion Groups
							</Nav.Link>
							<Nav.Link as={Link} to='/summaries'>
								Summaries
							</Nav.Link>
						</>
					)}
				</Nav>
				{logged ? (
					<></>
				) : (
					<>
						<Nav.Link as={Link} to='/signin'>
							SignIn
						</Nav.Link>
						<Nav.Link as={Link} to='/signup'>
							SignUp
						</Nav.Link>
					</>
				)}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavigationBar;
