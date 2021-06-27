import React from "react";
import "./NewsCard.css";

const NewsCard = ({ item }) => {
  const fulldate = new Date(item.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
  var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
  const hour = parseInt(date[4].substring(0, 2)); //
  const time = hour > 12 ? true : false;

  return (
    <div className='newsCard'>
      <img
        alt={item.title}
        src={
          item.urlToImage
            ? item.urlToImage
            : "https://cdn.discordapp.com/attachments/858568739170418713/858568803046391828/no_image.png"
        }
        className="newsImage"
      />
      <div className="newstxt">
        <div>
          <span className="title">{item.title}</span>
          <br />
          <span className="author">
            <a href={item.url} target="__blank">
              <b>article </b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {item.author ? item.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{item.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={item.url} target="__blank" className="source">
              <b>{item.source.name}</b>
            </a>
          </span>
          <button className = 'discusButton'>Discuss</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
