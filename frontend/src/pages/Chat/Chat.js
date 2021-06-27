import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatWrapper, ChatMessage } from './Chat.style';
import { Button } from 'react-bootstrap';
import { RiSendPlaneLine } from 'react-icons/ri';
import { db } from '../../api/db';
import { Context } from '../../Context/Auth';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Chat = () => {
	const [message, setMessage] = useState('');
	const [data, setData] = useState({ title: '', messages: [], from: '' });
	const { id } = useParams();
	const [redirect, setRedirect] = useState(false);
	const {
		auth: { logged, email },
	} = useContext(Context);

	useEffect(() => {
		const get = async () => {
			var starCountRef = db.ref('discussions/' + id + '/messages');
			const data = db.ref().child('discussions/' + id);

			const { title, from } = await (await data.get()).val();
			starCountRef.on('value', (snapshot) => {
				if (snapshot.val()) {
					var newdata = [];
					snapshot.forEach((v) => {
						newdata.push(v.val());
					});
					setData({ messages: newdata, title: title, from: from });
				}
			});
		};
		get();
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		var starCountRef = db.ref('discussions/' + id + '/messages');
		starCountRef.push({
			from: email,
			message: message,
		});
		setMessage('');
	};
	const finish = async () => {
		axios.post(`http://127.0.0.1:8000/discussions/finish/${id}`).then((res) => {
			if (res.data.status === 'Success') {
				setRedirect(true);
			}
		});
	};

	return (
		<ChatWrapper>
			<div className='title-container'>
				<h1>{data.title}</h1>
				{data.from === email && (
					<>
						<Button onClick={finish} size='sm' variant='primary'>
							Mark discussion as finished
						</Button>
					</>
				)}
			</div>
			{data.messages.map((v, i) => {
				return (
					<ChatMessage key={i}>
						<p className='title'>{v.from}</p>
						<p className='description'>{v.message}</p>
					</ChatMessage>
				);
			})}
			<form className='message-input' onSubmit={sendMessage}>
				<input
					value={message}
					onChange={(e) => {
						setMessage(e.target.value);
					}}
				/>
				<RiSendPlaneLine
					type='submit'
					onClick={sendMessage}
					className='send-button'
				/>
			</form>
			{redirect && <Redirect to={`/discussion/`} />}
		</ChatWrapper>
	);
};

export default Chat;
