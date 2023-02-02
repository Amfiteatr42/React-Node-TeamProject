import styled from 'styled-components';

export const link = {
  textDecoration: 'underline',
  color: '#3091EB',
  marginLeft: '3px',
};

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
    padding-top: 60px;
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
    margin-top: 40px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  @media screen and (min-width: 767px) {
    margin-top: 40px;
    padding-bottom: 60px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const Error = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  color: red;
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
export const Box = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`;
export const AuthBox = styled.div`
  justify-content: center;
  text-align: center;
  align-items: center;

  display: flex;
  flex-direction: column;
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 767px) {
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    width: 608px;
  }
  @media screen and (min-width: 1279px) {
    width: 618px;
  }
`;
export const BoxAuth = styled.div`
  @media screen and (min-width: 320px) {
    margin-top: 42px;
  }
  @media screen and (min-width: 767px) {
    padding-top: 204px;
  }
  @media screen and (min-width: 1279px) {
    padding-top: 80px;
  }

  justify-content: center;
  display: flex;
`;
export const AuthButton = styled.button`
  border: none;
  color: #ffffff;
  font-family: 'Manrope';
  font-style: normal;
  background: #f59256;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 44px;
  }
  @media screen and (min-width: 767px) {
    font-weight: 500;
    font-size: 2;
    line-height: 27px;

    width: 458px;
    height: 48px;
  }
`;

export const AuthForm = styled.form`
  label:nth-last-child(1) {
    margin-bottom: 0px;
  }
  button:nth-last-child(1) {
    margin-bottom: 16px;
  }
`;

export const Label = styled.label`
  margin-bottom: 16px;
`;
export const Input = styled.input`
  padding: 10px 30px;

  background: #fdf7f2;

  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 40px;
  }
  @media screen and (min-width: 767px) {
    width: 458px;
    height: 52px;
  }
`;
