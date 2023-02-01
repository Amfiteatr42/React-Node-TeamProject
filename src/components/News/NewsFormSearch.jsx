import scss from './News.module.scss';
import { Input } from 'components/Input';
import Scss from 'components/Input/Input.module.scss'
import sprite from 'assets/images/homepage/magnifying-glass.svg';
import { useDispatch } from 'react-redux';
import { setFilterNews } from 'redux/sliceNews';
import { toast } from 'react-toastify';
import { useState } from "react";



const FormSearchNews = () => {
  const [valueIn, setValueIn] = useState('');
  const dispatch = useDispatch();
  const onChangeNews = (e) => {
    if (e.currentTarget.value === " ") {
      toast.error(`Bad request`);
    }else{
      setValueIn(e.currentTarget.value);
    }

}

const onClickNews = (e) => {
  e.preventDefault();
  dispatch(setFilterNews(valueIn));
  setValueIn('')

}

  return (
    <div className={scss.container}>
      <h2 className={scss.title}>{('news')}</h2>
      <div className={scss.position}>
        <form onSubmit={onClickNews}>
          <Input
          customStyle={Scss.InputNews}
          placeholder={'Search'}
          onChange={onChangeNews}
          value={valueIn}
          label={
            <button className={scss.buttonSearch} type="submit"
            >
              <svg className={scss.search_icon}>
                <use href={sprite} />
              </svg>
            </button>
        }/>
           </form>
      </div>

    </div>
  );
};

export default FormSearchNews;
