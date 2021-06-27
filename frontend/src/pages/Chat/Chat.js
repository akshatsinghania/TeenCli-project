import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatWrapper, ChatMessage } from './Chat.style';
import { Button } from 'react-bootstrap';
import { RiSendPlaneLine } from 'react-icons/ri';
import { db } from '../../api/db';
import { Context } from '../../Context/Auth';

const Chat = () => {
	const [message, setMessage] = useState('');
	const [data, setData] = useState({ title: '', messages: [] });
	const { id } = useParams();
	const {
		auth: { logged, email },
	} = useContext(Context);

	useEffect(() => {
		var starCountRef = db.ref('discussions/' + id + '/messages');
		starCountRef.on('value', (snapshot) => {
			if (snapshot.val()) {
				var newdata = [];
				snapshot.forEach((v) => {
					newdata.push(v.val());
				});
				setData({ ...data, messages: newdata });
			}
		});
	}, []);

	const sendMessage = (e) => {
		e.preventDefault();
		var starCountRef = db.ref('discussions/' + id + '/messages');
		starCountRef.push({
			from: email,
			message: message,
		});
	};

	return (
		<ChatWrapper>
			<div className='title-container'>
				<h1>{data.title}</h1>
				<Button size='sm' variant='primary'>
					Mark discussion as finished
				</Button>
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
		</ChatWrapper>
	);
};

export default Chat;
