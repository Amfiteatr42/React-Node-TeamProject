import { default as styled } from 'styled-components';

export const AuthList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: end;
  margin-left: 335px;

  @media (max-width: 1279px) {
    margin-left: 246px;
  }

  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

export const LoginItem = styled.li`
  margin-right: 20px;
  @media (max-width: 1279px) {
    margin-right: 12px;
  }
`;

export const RegItem = styled.li``;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0;

  width: 111px;
  height: 47px;
  border-radius: 24px;
  border: none;
  background-color: #f59256;
  color: #ffffff;

  @media (max-width: 767px) {
    width: 95px;
    height: 35px;
    border-radius: 17px;
  }
`;

export const LoginContainerNotActive = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0;

  width: 111px;
  height: 47px;
  background-color: #ffffff;
  border-radius: 24px;
  border: 2px solid #f59256;
  color: inherit;

  @media (max-width: 767px) {
    width: 95px;
    height: 35px;
    border-radius: 17px;
  }
`;

export const RegContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 0;

  width: 181px;
  height: 47px;
  border-radius: 23px;

  background-color: inherit;
  border: 2px solid #f59256;

  @media (max-width: 767px) {
    width: 144px;
    height: 35px;
    border-radius: 17px;
  }
`;

export const Text = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  margin: 0, auto;
  color: inherit;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
export const RegText = styled.span`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;

  margin: 0, auto;
  color: inherit;

  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 19px;
  }
`;
