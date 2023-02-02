import { useEffect, useRef, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { ButtonNews, FormNews, InputNews } from './NewsSearch.styled';

const NewsSearch = () => {
  const [search, setSearch] = useState([]);

  const input = useRef();

  useEffect(() => {
    console.log(search);
  }, [search]);

  const handleSearch = e => {
    e.preventDefault();
    setSearch(input.current.value);
    console.log(input.current.value);
  };

  return (
    <div>
      <FormNews>
        <InputNews type="text" placeholder="Search" ref={input} />
        <ButtonNews type="button" onClick={handleSearch}>
          <BiSearchAlt2 size="20px" />
        </ButtonNews>
      </FormNews>
    </div>
  );
};

export default NewsSearch;
