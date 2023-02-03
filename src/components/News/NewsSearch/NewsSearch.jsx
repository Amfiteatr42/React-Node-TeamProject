import axios from 'axios';
import { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RxCrossCircled } from 'react-icons/rx';
import { toast } from 'react-toastify';
import { ButtonNews, FormNews, InputNews } from './NewsSearch.styled';

const NewsSearch = () => {
  const [search, setSearch] = useState([]);

  const handleSearchChange = e => {
    setSearch(e.currentTarget.value.toLowerCase());
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('No news for this query');
      return;
    }
    setSearch([]);
  };

  const searchDelete = e => {
    e.preventDefault();
    setSearch('');
  };

  return (
    <div>
      <FormNews onSubmit={handleSubmitForm}>
        <InputNews
          value={search}
          type="text"
          placeholder="Search"
          onChange={handleSearchChange}
        />
        <ButtonNews type="submit">
          <BiSearchAlt2 size="20px" />
        </ButtonNews>
        <button type="button" onClick={searchDelete}>
          <RxCrossCircled />
        </button>
      </FormNews>
    </div>
  );
};

export default NewsSearch;
