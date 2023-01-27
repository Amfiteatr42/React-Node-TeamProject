import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1279px) {
    max-width: 1280px;
    padding: 0 16px;
  }
`;
