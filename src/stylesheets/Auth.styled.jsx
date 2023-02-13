import styled from 'styled-components';

import wavesMob2x from '../../src/assets/images/homepage/hero-waves-mob@2x.png';
import AuthTablet2x from '../../src/assets/images/homepage/auth-tablet@2x.png';
import AuthDesk1x from '../../src/assets/images/homepage/auth-desk@1x.png';

export const link = {
  textDecoration: 'underline',
  color: '#3091EB',
  marginLeft: '3px',
};

export const margin = {
  marginTop: '15px',
};

export const AuthTitleh2 = styled.h2`
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
  color: rgba(17, 17, 17, 0.6);
  margin-top: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04em;

  @media screen and (min-width: 767px) {
    padding-bottom: 60px;
  }
`;

export const Error = styled.h3`
  margin-top: -16px;
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
`;
export const AuthBox = styled.div`
  position: relative;
  z-index: 1;
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
  z-index: 5;
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
  border: ${({ next }) =>
    next ? '2px solid var(--active)' : '2px solid transparent'};
  color: ${({ next }) => (next ? 'var(--active)' : 'var(--white)')};
  background-color: ${({ next }) => (next ? 'var(--white)' : 'var(--active)')};
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  transition: var(--transition);

  &:hover {
    color: ${({ next }) => (next ? 'var(--white)' : 'var(--active)')};
    background-color: ${({ next }) =>
      next ? 'var(--active)' : 'var(--white)'};
    border: 2px solid var(--active);
    cursor: pointer;
  }

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
  margin-bottom: 16px;
  @media screen and (min-width: 320px) {
    width: 280px;
    height: 40px;
  }
  @media screen and (min-width: 767px) {
    width: 458px;
    height: 52px;
  }
`;

export const AutContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 620px;
  @media screen and (min-width: 320px) {
    background-image: url(${wavesMob2x});
    max-width: 620px;
    margin-top: -150px;
    height: 470px;
    position: relative;
    background-size: 280px;
  }

  @media screen and (min-width: 767px) {
    max-width: 768px;
    margin-top: -250px;
    height: 538px;
    background-image: url(${AuthTablet2x});
    background-size: 768px;
  }
  @media screen and (min-width: 1279px) {
    margin-top: -400px;
    height: 538px;
    max-width: 1280px;
    background-image: url(${AuthDesk1x});
    background-size: auto;
  }
`;

export const BoxChek = styled.div`
  height: 5px;
  margin-top: 5px;
  border-radius: 40px;
`;
export const Chek = styled.div`
  width: 0px;
  transform: 3ms;
  height: 5px;
  transform-style: 5ms;
`;
