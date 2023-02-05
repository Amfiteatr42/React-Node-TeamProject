import { default as styled } from 'styled-components';

export const String = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;

  line-height: 48px;
  letter-spacing: 0.07em;
  line-height: 1.5;
  color: #111111;

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

export const ColoredString = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.07em;
  line-height: 1.5;
  color: #f59256;
  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

export const LogoContainer = styled.div`
  margin-top: 20px;
  margin-left: 16px;
  margin-right: 80px;

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 42px;
    margin-right: 0;
  }
  @media (max-width: 1279px) and (min-width: 767px) {
    margin-top: 24px;
    margin-left: 32px;
    margin-right: 0;
  }
`;
