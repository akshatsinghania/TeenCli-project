import React from 'react';
import { DiscusssionWrapper, Discussion as Card } from './Discussions.style';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Discussions = () => {
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
				{Array(10)
					.fill()
					.map(() => {
						return (
							<Card>
								<Card.Body>
									<Card.Title>Example Title</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										singhaniaakshat1@gmail.com
									</Card.Subtitle>
									<Card.Text>
										Description exampleDescription exampleDescription
										exampleDescription exampleDescription exampleDescription
										exampleDescription example
									</Card.Text>
									<Button
										as={Link}
										to='/discussion/exampleId'
										variant='primary'>
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
