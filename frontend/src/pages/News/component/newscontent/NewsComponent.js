import { Container } from "@material-ui/core";
import NewsCard from "../newsCard/NewsCard";
import React from "react";
import "./NewsComponent.css";

const NewsContent = ({ articles, loadMore, setLoadMore, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        {articles.map((item) => (
          <NewsCard item={item} key={item.title} />
        ))}

        <button className="loadMore" onClick={() => setLoadMore(loadMore + 3)}>
          Load More
        </button>
      </div>
    </Container>
  );
};

export default NewsContent;
