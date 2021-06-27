import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatWrapper, ChatMessage } from './Chat.style';
import { Button } from 'react-bootstrap';
import { RiSendPlaneLine } from 'react-icons/ri';

const Chat = () => {
	const [message, setMessage] = useState('');
	const { id } = useParams();

	const sendMessage = (e) => {
		e.preventDefault();
		console.log(message);
	};

	return (
		<ChatWrapper>
			<div className='title-container'>
				<h1>{id}</h1>
				<Button size='sm' variant='primary'>
					Mark discussion as finished
				</Button>
			</div>
			{Array(10)
				.fill()
				.map((v, i) => {
					return (
						<ChatMessage key={i}>
							<p className='title'>Akshat</p>
							<p className='description'>Hello i am Akshat</p>
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
