import { default as styled } from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  background-color: #fdf7f2;
`;

export const HeaderList = styled.ul`
  position: relative;
  width: 320px;
  margin: 0 auto;
  @media (min-width: 767px) and (max-width: 1279px) {
    width: 767px;
  }

  @media (min-width: 1279px) {
    width: 1279px;
  }
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const HeaderItem = styled.li`
  margin-right: 0;
`;
