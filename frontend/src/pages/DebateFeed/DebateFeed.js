import React, { useState, useEffect } from 'react';
import { DebateFeedWrapper, Summary as Card } from './DebateFeed.style';
import { db } from '../../api/db';

const DebateFeed = () => {
	const [discussions, setDiscussions] = useState([]);
	useEffect(() => {
		var starCountRef = db.ref('discussions');
		starCountRef.on('value', (snapshot) => {
			if (snapshot.val()) {
				var newdata = [];
				snapshot.forEach((v) => {
					newdata.push(v.val());
				});
				setDiscussions(newdata);
			}
		});
	}, []);
	return (
		<DebateFeedWrapper>
			<h1>Debate Feed</h1>
			<div className='summaries__list'>
				{discussions.map((v) => {
					if (v.completed) {
						return (
							<Card>
								<Card.Body>
									<Card.Title>{v.title}</Card.Title>
									<Card.Text>{v.summary}</Card.Text>
								</Card.Body>
							</Card>
						);
					}
				})}
			</div>
		</DebateFeedWrapper>
	);
};

export default DebateFeed;
