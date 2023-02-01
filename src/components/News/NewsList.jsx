import React from "react";
import { NewsItem } from './NewsItem.jsx';
import scss from './News.module.scss'
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

// import { useGetNewsListQuery } from 'redux/fetchNews'
// import{ useSelector } from 'react-redux';
// import { selectors } from 'redux/selectors';



export const NewsList = () => {
    // const { data } = useGetNewsListQuery();
  const [news, setNews] = useState([]);

  useEffect(() => {
    const { data } = axios.get('https://api-petly.onrender.com/api/news');

  setNews(data)
}, []);


    // const onFilter = useSelector(selectors.getNews);

    // const getVisibleNews = () => {
    //     const normalizedFil = onFilter.toLocaleLowerCase()
    //     return data.filter(news =>
    //         news.title.toLocaleLowerCase().includes(normalizedFil))
    // };


    return (
        <>
            {!news ? (
                <div className={scss.notNewsFound}>
                    <h3 className={scss.notNewsFoundText}>Waiting please</h3>
                </div>
            ) : (
               <ul className={scss.newsList}>
                        {(news().length === 0) ? (
                            <div className={scss.notNewsFound}>
                    <h3 className={scss.notNewsFoundText}>Sorry</h3>
                </div>
                            ) : (
                                news().map(({ url, title, description, date, linkNews }) => {
                    return (
                        <NewsItem
                            key={url}
                            url={url}
                            title={title}
                            description={description}
                            date={date}
                            linkNews={linkNews}
                        />
                    )
                }
                ))
            }
        </ul>
            )
            }
        </>

    )
};

export default NewsList;
