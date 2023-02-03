import NewsList from 'components/News/NewsList/NewsList';
import { Container } from 'stylesheets/Container.styled';
import { NewsHeader, NewsSection } from './NewsPages.styled';

const NewsPage = () => {
  return (
    <NewsSection>
      <Container>
        <NewsHeader>News</NewsHeader>
        <NewsList />
      </Container>
    </NewsSection>
  );
};

export default NewsPage;
