import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
import { UlNews } from './NewsList.styled';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const data = axios.get('https://api-petly.onrender.com/api/news');
    data.then(({ data }) => {
      console.log(data.data);
      setNews(data.data);
    });
  }, []);

  return (
    <>
      <UlNews>
        {news.map(({ _id, imgURL, tytle, text, date }) => {
          return (
            <NewsItem
              key={_id}
              url={imgURL}
              title={tytle}
              description={text}
              date={date}
            />
          );
        })}
      </UlNews>
    </>
  );
};

export default NewsList;
