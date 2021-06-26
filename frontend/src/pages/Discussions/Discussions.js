import React from 'react';
import { DiscusssionWrapper, Discussion as Card } from './Discussions.style';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Discussions = () => {
	return (
		<DiscusssionWrapper>
			<h1>Discussion</h1>
			<div className='discussions__list'>
				{Array(10)
					.fill()
					.map(() => {
						return (
							<Card>
								<Card.Body>
									<Card.Title>Example Title</Card.Title>
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
