import styled from 'styled-components';
import { Container, Card } from 'react-bootstrap';

export const DiscusssionWrapper = styled(Container)`
	margin-top: 2%;
	h1 {
		text-align: center;
	}
	.discussions__list {
		display: flex;
		flex-wrap: wrap;
	}
	.title-container {
		display: flex;
		justify-content: space-between;
		.new-discussion {
			height: 100%;
		}
	}
	@media only screen and (max-width: 600px) {
		.discussions__list {
			flex-direction: column;
		}
	}
`;
export const Discussion = styled(Card)`
	width: 40%;
	margin: auto;
	margin-top: 5%;
	@media only screen and (max-width: 600px) {
		width: 80%;
	}
`;
