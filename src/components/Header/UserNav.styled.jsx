import { default as styled } from 'styled-components';

export const UserNavContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-right: 0;

  width: 164px;
  height: 44px;
  border-radius: 22px;
  border: none;
  background-color: #f59256;

  @media (max-width: 767px) {
    margin-left: 0;
    height: 35px;
    border-radius: 17px;
  }
`;

export const UserNavBox = styled.div`
  margin-left: 499px;
  @media (max-width: 1279px) {
    margin-left: 386px;
  }
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const SvgIcon = styled.svg`
  margin-left: 25px;
  margin-right: 14px;
`;

export const Text = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: #ffffff;
  margin: 0, auto;
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
