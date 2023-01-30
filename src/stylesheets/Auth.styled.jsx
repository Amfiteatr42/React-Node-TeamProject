import styled from 'styled-components';

export const AuthTitleh2 = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  margin-bottom: 40px;
  @media screen and (min-width: 320px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  }
  
  @media screen and (min-width: 767px) {
    font-weight: 500;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const AuthTitleh3 = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  color: rgba(17, 17, 17, 0.6);
  @media screen and (min-width: 320px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  @media screen and (min-width: 767px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const AuthBox = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    width: 608px;
    height: 517px;
  }
  @media screen and (min-width: 1279px) {
    width: 618px;
    height: 473px;
  }
`;

export const AuthButton = styled.button`
  color: #ffffff;
  font-family: 'Manrope';
  font-style: normal;
  background: #f59256;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) {

  }
  @media screen and (min-width: 767px) {
    font-weight: 500;
    font-size: 2.0;
    line-height: 27px;
    margin-bottom: 40px;
    width: 458px;
    height: 48px;
  }
`;

export const AuthForm = styled.form`
  input:nth-last-child(1) {
    margin-bottom: 40px;
  }
`;

export const AuthInput = styled.input`
  margin-bottom: 16px;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  @media screen and (min-width: 320px) {
    width: 448px;
    height: 52px;
  }
  @media screen and (min-width: 767px) {
    width: 458px;
    height: 52px;
  }
`;
