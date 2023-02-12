import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiCamera } from 'react-icons/hi2';

export const Content = styled.div`
  width: 233px;
  height: 233px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 100%;
`;
export const Text = styled.p`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 12px;
  line-height: 1.8;
  letter-spacing: 0.04em;
  margin-left: 5px;
  color: var(--black);
  transition: var(--transition);

  &:hover {
    color: var(--active);
    transition: var(--transition);
  }
`;
export const Icon = styled(AiOutlinePlus)`
  position: absolute;
  top: 70px;
  left: 85px;
  width: 71px;
  height: 71px;
  fill: var(--gray-2);
`;
export const Button = styled.label`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media screen and (min-width: 767px) and (max-width: 1279px) {
    position: absolute;
    top: 500px;
  }
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1279px) {
    flex-direction: column;
  }
`;
export const Svg = styled(HiCamera)`
  width: 20px;
  height: 20px;
  fill: var(--active);
  &:hover {
    transition: var(--transition);
    color: var(--accent);
  }
`;
export const Img = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 100%;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;
