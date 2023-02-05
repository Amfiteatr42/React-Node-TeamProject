import styled from 'styled-components';

export const UlNews = styled.ul`
  @media screen and (min-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
  /* @media screen and (min-width: 1279px) {
    justify-content: space-between;
  } */
`;

export const FormNews = styled.form`
  position: relative;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width: 767px) {
    margin-bottom: 60px;
  }
`;

export const InputNews = styled.input`
  width: 280px;
  height: 40px;
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 20px;
  outline: none;
  padding-left: 12px;
  transition: 300ms all ease;
  border: 1px solid transparent;
  &:hover,
  &:focus {
    outline: none;
    border: 1px solid var(--active);
    transition: 500ms all ease;
  }
  &::placeholder {
    align-items: center;
    letter-spacing: 0.04em;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: var(--gray);

    @media screen and (min-width: 767px) {
      font-size: 20px;
      line-height: 27px;
    }
  }

  @media screen and (min-width: 767px) {
    width: 600px;
    height: 44px;
    padding-left: 20px;
  }
`;

export const ButtonNews = styled.button`
  position: absolute;
  top: 25%;
  left: 87%;
  border: none;
  background-color: transparent;
  color: var(--black);
  transition: 300ms all ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: var(--active);
    transition: 300ms all ease;
  }

  @media screen and (min-width: 1279px) {
    top: 25%;
    left: 71%;
  }
`;

export const ButtonDelete = styled.button`
  position: absolute;
  top: 25%;
  left: 87%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--black);
  transition: 300ms all ease;
  &:hover {
    transform: scale(1.1);
    color: var(--active);
    transition: 300ms all ease;
  }
  @media screen and (min-width: 1279px) {
    top: 25%;
    left: 71%;
  }
`;
