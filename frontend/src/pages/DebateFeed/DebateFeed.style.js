import styled from 'styled-components';
import { Container, Card } from 'react-bootstrap';

export const DebateFeedWrapper = styled(Container)`
	margin-top: 2%;
	h1 {
		text-align: center;
	}
	.summaries__list {
		display: flex;
		flex-wrap: wrap;
	}
	@media only screen and (max-width: 600px) {
		.summaries__list {
			flex-direction: column;
		}
	}
`;
export const Summary = styled(Card)`
	width: 40%;
	margin: auto;
	margin-top: 5%;
	text-align: center;
	@media only screen and (max-width: 600px) {
		width: 80%;
	}
`;
