import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  DateNews,
  DateReadMore,
  DescrNews,
  HeaderNews,
  Line,
  LinkNews,
  ListNews,
} from './NewsItem.styled';

const NewsItem = ({ url, title, description, date }) => {
  return (
    <ListNews>
      <Line />
      <HeaderNews text={title} length={40} tooltip={40} />
      <DescrNews text={description} length={200} tail={'...'} />
      <DateReadMore>
        <DateNews>{format(new Date(date), 'dd/MM/yyyy')}</DateNews>
        <LinkNews href={url} target="_blank" rel="noreferrer noopener">
          Read more
        </LinkNews>
      </DateReadMore>
    </ListNews>
  );
};

export default NewsItem;

NewsItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string]),
};
