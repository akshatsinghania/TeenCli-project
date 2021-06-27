import React, { useEffect } from 'react';
import { HomeWrapper } from './News.style';
import { useState } from 'react';
import axios from 'axios';
import NewsContent from './component/newscontent/NewsComponent';

const News = () => {
	const [category, setCategory] = useState('general');
	const [articles, setarticles] = useState([]);
	const [results, setresult] = useState();
	const [loadMore, setLoadMore] = useState(6);
	const [newsResults, setNewsResults] = useState();

	const fetchdata = async () => {
		try {
			const news = await axios.get(
				`https://newsapi.org/v2/top-headlines?country=us&apiKey=b5192746245f4d3e83ad09d377381640&pageSize=${loadMore}&category=${category}`,
			);
			setarticles(news.data.articles);
			setresult(news.data.totalResults);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchdata();
	}, [results, loadMore, category]);

	return (
		<HomeWrapper>
			<h1 className='title'>Recent NEWS</h1>
			<center>
				<button className='ChoiceButton' onClick={() => setCategory('general')}>
					General
				</button>
				<button
					className='ChoiceButton'
					onClick={() => setCategory('business')}>
					Business
				</button>
				<button className='ChoiceButton' onClick={() => setCategory('health')}>
					Health
				</button>
				<button
					className='ChoiceButton'
					onClick={() => setCategory('technology')}>
					Technology
				</button>
			</center>
			<NewsContent
				articles={articles}
				newsResults={newsResults}
				loadMore={loadMore}
				setLoadMore={setLoadMore}
			/>
		</HomeWrapper>
	);
};

export default News;
