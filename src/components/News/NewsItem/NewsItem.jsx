import moment from 'moment';
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
      <HeaderNews>{title}</HeaderNews>
      <DescrNews>{description}</DescrNews>
      <DateReadMore>
        <DateNews>{moment(date).format('DD/MM/YYYY')}</DateNews>
        <LinkNews href={url} target="_blank" rel="noreferrer noopener">
          Read more
        </LinkNews>
      </DateReadMore>
    </ListNews>
  );
};

export default NewsItem;
