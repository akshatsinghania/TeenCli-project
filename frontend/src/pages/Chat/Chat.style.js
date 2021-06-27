import styled from 'styled-components';
import { Container, Card } from 'react-bootstrap';

export const ChatWrapper = styled(Container)`
	margin-top: 2%;
	.message-input {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 2%;
		display: flex;
		background-color: #f1f1f1;
		input {
			width: 100%;
			border-radius: 5px;
			border-style: solid;
			outline: none;
			border-width: 0;
			padding: 1%;
		}
		.send-button {
			margin: auto 2%;
			font-size: 200% !important;
		}
	}
`;
export const ChatMessage = styled.div`
	margin: 5% 3%;
	border-style: solid;
	border-radius: 10px;
	border-color: lightgray;
	padding: 1%;
	height: 100%;
	width: fit-content;
	.title {
		margin-top: -30%;
	}
`;
