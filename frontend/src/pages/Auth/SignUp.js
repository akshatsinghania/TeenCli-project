import React, { useState, useContext } from 'react';
import { AuthWrapper } from './Auth.style';
import { Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { Register } from '../../api/db';
import { Context } from '../../Context/Auth';

const SignUp = () => {
	const { setAuth, auth } = useContext(Context);
	const [email, setEmail] = useState('');
	const [password, setPasword] = useState('');
	const [error, setError] = useState(false);

	const signUp = async (e) => {
		e.preventDefault();
		setError(false);
		const createdUser = await Register(email, password);
		if (createdUser.error) setError(true);
		else {
			setAuth({ ...auth, logged: true, email: createdUser.user.email });
		}
	};
	return (
		<AuthWrapper>
			<h1 className='title'>Signup</h1>
			<form onSubmit={signUp} className='form'>
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
					SignUp
				</Button>
				{error && <Alert variant={'warning'}>recheck your credentials</Alert>}
			</form>
		</AuthWrapper>
	);
};

export default SignUp;
