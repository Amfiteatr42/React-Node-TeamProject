import PropTypes from 'prop-types';
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoaderSpinner } from '../../LoaderSpinner/LoaderSpinner';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [news2, setNews2] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCloseIcon, setIsCloseIcon] = useState(true);

  useEffect(() => {
    const data = axios.get('https://api-petly.onrender.com/api/news');
    setLoading(true);
    data
      .then(({ data }) => {
        setNews(data.data);
        setNews2(data.data);
      })
      .catch(error => console.log(error.message))
      .finally(() => {
        setLoading(false);
      });
  }, [setNews, setNews2]);

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

    const filteredNews = news.filter(item => {
      return (
        item.text.toLowerCase().includes(normalizedFilter) ||
        item.title.toLowerCase().includes(normalizedFilter)
      );
    });
    if (filteredNews.length === 0) {
      toast.error('Not Found');
      return;
    }

    setNews(filteredNews);
    setLoading(false);
    setIsCloseIcon(false);
  };

  const searchDelete = ( )=> {
    setSearch('');
    setIsCloseIcon(true);
    setNews2(news2);
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
        {isCloseIcon ? (
          <ButtonNews type="submit">
            <BiSearchAlt2 size="22px" />
          </ButtonNews>
        ) : (
          <ButtonDelete type="button" onClick={searchDelete}>
            <RxCrossCircled size="22px" />
          </ButtonDelete>
        )}
      </FormNews>
      {loading && LoaderSpinner()}
      <UlNews>
        {isCloseIcon
          ? news2
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
              .sort((a, b) => new Date(b.date) - new Date(a.date))
          : news
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
      <ToastContainer />
    </>
  );
};

export default NewsList;

NewsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      url: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      date: PropTypes.oneOfType([PropTypes.string]),
    })
  ),
};
