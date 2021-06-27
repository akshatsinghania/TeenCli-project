import React, { useEffect, useState } from 'react';
import { DiscusssionWrapper, Discussion as Card } from './Discussions.style';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { db } from '../../api/db';

const Discussions = () => {
	const [discussions, setDiscussions] = useState([]);
	useEffect(() => {
		var starCountRef = db.ref('discussions');
		starCountRef.on('value', (snapshot) => {
			setDiscussions(snapshot.val());
		});
	}, []);
	return (
		<DiscusssionWrapper>
			<div className='title-container'>
				<h1>Discussion</h1>
				<Button
					className='new-discussion'
					variant='primary'
					as={Link}
					to='/createDiscussion'>
					New Discussion
				</Button>
			</div>
			<div className='discussions__list'>
				{discussions.map((v, i) => {
					return (
						<Card key={i}>
							<Card.Body>
								<Card.Title>{v.title}</Card.Title>
								<Card.Subtitle className='mb-2 text-muted'>
									{v.from}
								</Card.Subtitle>
								<Card.Text>{v.description}</Card.Text>
								<Button as={Link} to={`/discussion/${v.id}`} variant='primary'>
									Join Discussion
								</Button>
							</Card.Body>
						</Card>
					);
				})}
			</div>
		</DiscusssionWrapper>
	);
};

export default Discussions;
