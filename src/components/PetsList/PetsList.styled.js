import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import girlTablet2x from '../../assets/images/homepage/hero-girl-tablet@2x.png';
import wavesTablet2x from '../../assets/images/homepage/hero-waves-tablet@2x.png';

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
export const Box = styled.ul`
  ${({ pets }) =>
    pets &&
    `
 display: block;
    overflow-y: auto;
    max-height: 540px;`}
`;
export const List = styled.ul``;
export const Img = styled.img`
  width: 240px;
  height: 240px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 40px;
  margin-bottom: 20px;
  border-radius: 20px;
  @media screen and (min-width: 767px) {
    width: 161px;
    height: 161px;
    margin-bottom: 0;
    margin-right: 32px;
    border-radius: var(--radius);
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
  cursor: pointer;
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
  &:hover {
    fill: var(--active);
    transition: var(--transition);
  }
`;
export const Span = styled.span``;

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
    margin-bottom: 0;
  }
`;
export const Div = styled.div`
  background-image: url(${girlTablet2x}), url(${wavesTablet2x});
  background-repeat: no-repeat;
  background-size: 320px;
  height: 480px;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  background-position: bottom;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1279px) {
    width: 800px;
  }
`;
export const Text = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 24px;
  line-height: 1.35;
  color: var(--black);
  text-align: center;
`;
