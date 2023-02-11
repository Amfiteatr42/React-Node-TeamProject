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
import 'react-toastify/dist/ReactToastify.css';
import { LoaderSpinner } from '../../LoaderSpinner/LoaderSpinner';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [isCloseIcon, setIsCloseIcon] = useState(true);

  function fetchNews() {
    setLoading(true);
    axios('/news')
      .then(({ data }) => setNews(data.data))
      .catch(error => {
        toast.error('Some unexpected error happened :(');
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSearchChange = e => {
    if (e.currentTarget.value === '') {
      fetchNews();
      setIsCloseIcon(true);
    }

    setSearch(e.currentTarget.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const normalizedQuery = search.toLowerCase().trim();

    if (normalizedQuery === '') {
      toast.error('The field cannot be empty');
      return;
    }

    axios(`/news/search/${normalizedQuery}`)
      .then(({ data: { data } }) => {
        if (data.length === 0) {
          toast.error("There's no news with your keyword");
          return;
        }
        setNews(data);
      })
      .catch(err => toast.error(err.message));

    setLoading(false);
    setIsCloseIcon(false);
  };

  const searchDelete = () => {
    fetchNews();
    setSearch('');
    setIsCloseIcon(true);
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
      {loading ? (
        LoaderSpinner()
      ) : (
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
      )}
    </>
  );
};

export default NewsList;
