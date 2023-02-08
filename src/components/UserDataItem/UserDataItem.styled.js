import styled from 'styled-components';
import { MdEdit, MdDone } from 'react-icons/md';
export const Package = styled.ul`
  @media screen and (max-width: 767px) {
    margin-top: 36px;
    margin-bottom: 44px;
  }
  @media screen and (min-width: 767px) {
    margin-right: 52px;
  }
  @media screen and (min-width: 1279px) {
    margin: 36px 0 27px 0;
  }
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;
export const Label = styled.label`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 12px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: var(--black);
  width: 56px;
  margin-right: 10px;
  @media screen and (min-width: 767px) {
    font-size: 18px;
    width: 83px;
    margin-right: 24px;
  }
`;
export const Input = styled.input`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.38;
  letter-spacing: 0.04em;

  width: 159px;
  padding: 4px 0 4px 18px;
  margin-right: 14px;
  border: none;
  color: var(--black);
  background-color: var(--white);
  outline: none;
  ${({ active }) =>
    active &&
    `
  background-color: var(--bg-basic);
  border: var(--border-3);
  border-radius: var(--radius);
`}

  @media screen and (min-width: 767px) {
    width: 216px;
    padding: 4px 0 3px 12px;
    font-size: 18px;
    margin-right: 24px;
  }
`;
export const Button = styled.button`
  background-color: var(--bg-basic);
  backdrop-filter: blur(2px);
  border-radius: 100%;
  outline: none;
  width: 20px;
  height: 20px;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--active);
    transition: var(--transition);
  }
  @media screen and (min-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;
export const Svg = styled(MdEdit)`
  width: 20px;
  height: 20px;
  fill: var(--active);

  &:hover {
    fill: white;
    transition: var(--transition);
  }
  ${({ active }) =>
    active &&
    `
fill: var(--gary-2)
`}
`;
export const SvgUpdate = styled(MdDone)`
  width: 20px;
  height: 20px;
  fill: var(--active);
  &:hover {
    fill: white;
    transition: var(--transition);
  }
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
`;
