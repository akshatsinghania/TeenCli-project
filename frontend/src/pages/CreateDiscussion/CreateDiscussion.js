import React from 'react';
import { Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { FormWrapper } from './CreateDiscussion.style';
import { db } from '../../api/db';
import { Context } from '../../Context/Auth';
import { Redirect } from 'react-router-dom';

const CreateDiscussion = () => {
	const {
		auth: { logged, email },
	} = useContext(Context);
	const [title, setTitle] = useState('');
	const [description, setdescription] = useState('');
	const [redirect, setRedirect] = useState(false);
	const createDiscussion = async (e) => {
		e.preventDefault();
		var id = Math.floor(Math.random() * 1000000);
		await db.ref(`discussion/${id}`).set({
			title: title,
			description: description,
			from: email,
		});
		setRedirect(id);
	};

	return (
		<FormWrapper>
			<h1 className='title'>Create Discussion</h1>
			<form className='form' onSubmit={createDiscussion}>
				<InputGroup className='mb-4 input'>
					<FormControl
						placeholder='Title'
						type='text'
						value={title}
						onChange={(e) => {
							setTitle(e.target.value);
						}}
					/>
				</InputGroup>
				<InputGroup className='mb-4 input'>
					<FormControl
						placeholder='Description'
						type='text'
						value={description}
						onChange={(e) => {
							setdescription(e.target.value);
						}}
					/>
				</InputGroup>

				<Button type='submit' variant='primary'>
					Create Discussion
				</Button>
			</form>
			{redirect && <Redirect to={`/discussion/${redirect}`} />}
		</FormWrapper>
	);
};

export default CreateDiscussion;
