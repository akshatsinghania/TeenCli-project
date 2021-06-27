import React, { useState, useContext } from 'react';
import { AuthWrapper } from './Auth.style';
import { Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { Login } from '../../api/db';
import { Context } from '../../Context/Auth';

const SignIn = () => {
	const { setAuth, auth } = useContext(Context);
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');
	const [error, setError] = useState(0);

	const signIn = async (e) => {
		e.preventDefault();
		setError(false);
		const loggedUser = await Login(email, password);
		if (loggedUser.error) setError(true);
		else {
			setAuth({ ...auth, logged: true, email: loggedUser.user.email });
		}
	};
	return (
		<AuthWrapper>
			<h1 className='title'>SignIn</h1>
			<form onSubmit={signIn} className='form'>
				<InputGroup className='mb-4 input'>
					<FormControl
						placeholder='email'
						type='email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
				</InputGroup>
				<InputGroup className='mb-4 input'>
					<FormControl
						placeholder='password'
						type='password'
						value={password}
						onChange={(e) => {
							setPasword(e.target.value);
						}}
					/>
				</InputGroup>

				<Button type='submit' variant='primary'>
					SignIn
				</Button>
				{error && <Alert variant={'warning'}>recheck your credentials</Alert>}
			</form>
		</AuthWrapper>
	);
};

export default SignIn;
