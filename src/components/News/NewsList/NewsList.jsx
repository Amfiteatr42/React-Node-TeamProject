import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../NewsItem/NewsItem';
import {
  UlNews,
  ButtonNews,
  FormNews,
  InputNews,
  ButtonDelete,
} from './NewsList.styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { toast } from 'react-toastify';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);

  // const iconClose = e.currentTarget.value ? news : search;

  useEffect(() => {
    const data = axios.get('https://api-petly.onrender.com/api/news');
    setLoading(true);
    data
      .then(({ data }) => {
        console.log(data.data);
        setNews(data.data);
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, [setNews]);

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (search.toString() === '') {
      toast.error('The field cannot be empty');
      return;
    }
    const normalizedFilter = search.toLowerCase();

    const fullNews = news;

    const filteredNews = news.filter(item => {
      return (
        item.text.toLowerCase().includes(normalizedFilter) ||
        item.title.toLowerCase().includes(normalizedFilter)
      );
    });
    setNews(filteredNews);
  };

  const searchDelete = e => {
    e.preventDefault();
  };

  return (
    <>
      <FormNews onSubmit={handleSubmitForm}>
        <InputNews
          value={search}
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <ButtonNews type="submit">
          <BiSearchAlt2 size="22px" />
        </ButtonNews>
        {/* <ButtonDelete type="button" onClick={searchDelete}>
          <RxCrossCircled size="22px" />
        </ButtonDelete> */}
      </FormNews>
      <UlNews>
        {news
          .map(({ _id, link, title, text, date }) => {
            return (
              <NewsItem
                key={_id}
                url={link}
                title={title}
                description={text}
                date={date}
              />
            );
          })
          .sort((a, b) => new Date(b.date) - new Date(a.date))}
      </UlNews>
    </>
  );
};

export default NewsList;
