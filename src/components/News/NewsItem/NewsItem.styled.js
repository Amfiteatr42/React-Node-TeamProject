import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

export const Line = styled.span`
  background: linear-gradient(90deg, #ff634e 0%, #ffdf48 105.44%);
  border-radius: 40px;
  content: '';
  display: block;
  height: 4px;
  margin-bottom: 5px;
  width: 200px;
  @media screen and (min-width: 767px) {
    width: 280px;
  }
  @media screen and (min-width: 1279px) {
    width: 340px;
  }
`;

export const ListNews = styled.li`
  @media screen and (min-width: 767px) {
    width: 320px;
  }
  @media screen and (min-width: 1279px) {
    width: 380px;
  }

  &:not(:last-child) {
    margin-bottom: 40px;
    @media screen and (min-width: 767px) {
      margin-right: 32px;
      margin-bottom: 60px;
    }
  }

  @media screen and (min-width: 1279px) {
    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-last-child(-n + 3) {
      margin-bottom: 0;
    }
  }
`;

export const HeaderNews = styled(EllipsisText)`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  display: inline-block;
`;

export const DescrNews = styled(EllipsisText)`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;

export const DateReadMore = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const DateNews = styled.p`
  color: var(--gray-2);
  font-weight: 500;
`;

export const LinkNews = styled.a`
  color: var(--active);
  font-weight: 400;
  text-decoration: underline;

  &:hover {
    transform: scale(1.1);
  }
`;
