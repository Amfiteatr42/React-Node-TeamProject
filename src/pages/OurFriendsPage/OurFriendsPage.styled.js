import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #fdf7f2;
  /* width: 320 px; */
  padding-bottom: 100px;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
    padding-bottom: 200px;
  }
`;
export const WrapperList = styled.div`
  width: 280px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: 767px) {
    width: 702px;
  }
  @media screen and (min-width: 1279px) {
    width: 1240px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  margin-top: 42px;
  margin-bottom: 28px;
  @media screen and (min-width: 767px) {
    font-size: 48px;
    margin-top: 90px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1279px) {
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;

export const ListCard = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 32px;
  }
  @media screen and (min-width: 1279px) {
  }
`;

export const ItemCard = styled.li`
  @media screen and (min-width: 767px) {
    flex-basis: calc((100%-40px-32px) / 3);
  }
  @media screen and (min-width: 1279px) {
    flex-basis: calc((100%-40px-32px-32px) / 4);
  }
`;
