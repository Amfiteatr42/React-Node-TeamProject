import styled from 'styled-components';

export const NewsSection = styled.section`
  position: relative;
  min-height: calc(100vh - 58px);
  padding: 20px 0 140px;
  background-color: #fdf7f2;

  @media screen and (min-width: 767px) {
    min-height: calc(100vh - 64px);
    padding: 45px 0 150px;
  }

  @media screen and (min-width: 1279px) {
    min-height: calc(100vh - 68px);
    padding: 30px 0 150px;
  }
`;

export const NewsHeader = styled.h2`
  text-align: center;
  margin-bottom: 28px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;

  @media screen and (min-width: 767px) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 66px;
  }
`;
