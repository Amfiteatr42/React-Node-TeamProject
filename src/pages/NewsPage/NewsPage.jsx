import NewsList from 'components/News/NewsList/NewsList';
import NewsSearch from 'components/News/NewsSearch/NewsSearch';
import { Container } from 'stylesheets/Container.styled';
import { NewsHeader, NewsSection } from './NewsPages.styled';

const NewsPage = () => {
  return (
    <NewsSection>
      <Container>
        <NewsHeader>News</NewsHeader>
        <NewsSearch />
        <NewsList />
      </Container>
    </NewsSection>
  );
};

export default NewsPage;
