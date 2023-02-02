import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import SVG from 'react-inlinesvg';
export const Li = styled.li`
  position: relative;
  width: 280px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px 20px 40px 20px;
  margin-bottom: 20px;
  background-color: var(--white);
  box-shadow: 7px 4px 14px rgb(0 0 0 / 11%);
  border-radius: 40px;
  @media screen and (min-width: 767px) {
    width: 704px;
    padding: 20px;
    flex-direction: row;
  }
  @media screen and (min-width: 1279px) {
    width: 821px;
    padding: 20px 20px 31px 20px;
    margin-bottom: 22px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
export const Box = styled.ul``;
export const List = styled.ul``;
export const Img = styled.img`
  width: 240px;
  height: 240px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  margin-bottom: 20px;

  @media screen and (min-width: 767px) {
    width: 161px;
    height: 161px;
    margin-right: 32px;
  }
`;
export const Item = styled.li`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.57;
  color: var(--black);
  margin-bottom: 12px;
  position: relative;
  @media screen and (min-width: 767px) {
    font-size: 16px;
    line-height: 1.37;
  }
  @media screen and (min-width: 1279px) {
    &:nth-child(3) {
      margin-bottom: 16px;
    }
  }
  &:nth-child(4) {
    margin-bottom: 0;
  }
`;
export const Button = styled.button`
  position: absolute;
  top: 268px;
  right: 20px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  @media screen and (min-width: 767px) {
    top: 20px;
    right: 20px;
    width: 44px;
    height: 44px;
    background-color: #fdf7f2;
    backdrop-filter: blur(2px);
    border-radius: 100%;
  }
`;
export const Svg = styled(SVG)`
  fill: var(--gray-2);
`;
export const Span = styled.span``;
export const Icon = styled(AiOutlinePlus)`
  position: absolute;
  top: 80px;
  left: 85px;
  width: 71px;
  height: 71px;
  fill: var(--gray-2);
  @media screen and (min-width: 768px) {
    top: 45px;
    left: 50px;
  }
`;

export const Content = styled.div`
  width: 240px;
  height: 240px;
  position: relative;
  background-color: var(--bg-basic);
  border-radius: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    border-radius: var(--radius);
    margin-right: 32px;
  }
`;
