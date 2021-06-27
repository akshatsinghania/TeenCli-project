import React from 'react';
import { DebateFeedWrapper, Summary as Card } from './DebateFeed.style';

const DebateFeed = () => {
	return (
		<DebateFeedWrapper>
			<h1>Debate Feed</h1>
			<div className='summaries__list'>
				{Array(10)
					.fill()
					.map(() => {
						return (
							<Card>
								<Card.Body>
									<Card.Title>Example Title</Card.Title>
									<Card.Text>Summary Example</Card.Text>
								</Card.Body>
							</Card>
						);
					})}
			</div>
		</DebateFeedWrapper>
	);
};

export default DebateFeed;
