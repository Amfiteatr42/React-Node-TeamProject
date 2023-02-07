import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';

export const Container = styled.div`
  margin-top: 12px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  @media screen and (min-width: 767px) {
    width: 335px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1279px) {
    width: 392px;
  }
`;

export const Title = styled.a`
  padding-top: 14px;
  display: block;
  font-size: 12px;
  line-height: 1.38;
  text-align: center;
  text-decoration-line: underline;
  color: #f59256;
  overflow-wrap: break-word;
  transition: color var(--transition);

  &:hover {
    color: var(--black-3);
  }

  @media screen and (min-width: 767px) {
    padding-top: 0px;
    margin-top: 16px;
    font-size: 16px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
  }
`;

export const WrapperIMG = styled.div`
  flex-grow: 0;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
  }
`;

export const WrapperContent = styled.div`
  flex-grow: 1;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.38;
  color: #111111;
  width: 150px;
  overflow-wrap: break-word;
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
  }
`;

export const Img = styled.img`
  padding: 0px;
  width: 110px;
  height: 78px;
  margin-top: 40px;
  margin-left: 4px;
  margin-right: 12px;
  @media screen and (min-width: 767px) {
    margin-top: 54px;
    margin-left: 4px;
    margin-right: 14px;
    width: 120px;
    height: 85px;
  }
  @media screen and (min-width: 1279px) {
    width: 158px;
    height: 112px;
    margin-top: 59px;
    margin-left: 4px;
    margin-right: 16px;
  }
`;

export const WrapperTimeHover = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  left: 0;
`;
export const SpanWeek = styled.span`
  display: inline-block;
  width: 19px;
  margin-right: 12px;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
  }
`;
export const ListFullTime = styled.ul`
  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.38;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
  }
`;

export const ItemTime = styled.li`
  margin-top: 4px;
  &:nth-child(1) {
    margin-top: 0px;
  }
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
  }
`;

export const Data = styled.div`
  position: relative;

  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
  }
`;

export const DataBox = styled.div`
  transition: color var(--transition);
  &:hover {
    color: #f59256;
    cursor: pointer;
    .time-wrapper {
      display: ${props => (!!props.newWorkDays ? 'block' : 'none')};
    }
  }
`;

export const P = styled.p`
  margin-top: 4px;
  &:nth-child(1) {
    margin-top: 12px;
  }
  @media screen and (min-width: 767px) {
    font-size: 14px;
    margin-top: 8px;
    &:nth-child(1) {
      margin-top: 16px;
    }
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
    margin-top: 12px;
    &:nth-child(1) {
      margin-top: 16px;
    }
  }
  ${DataBox}:hover & {
    color: #f59256;
  }
`;

export const Address = styled.a`
  display: inline-block;
  overflow-wrap: anywhere;
  font-weight: 500;
  font-size: 12px;
  /* text-decoration-line: underline; */
  line-height: 1.38;
  color: #111111;
  :hover {
    color: #ff6101;
  }
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
  }
`;

export const IconAddress = styled(GoLocation)`
  fill: #f59256;
  margin-left: 10px;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1279px) {
  }
`;

export const Email = styled.a`
  display: inline-block;
  overflow-wrap: anywhere;
  font-weight: 500;
  font-size: 12px;
  /* text-decoration-line: underline; */
  line-height: 1.38;
  color: #111111;
  :hover {
    color: #ff6101;
  }
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
  }
`;

export const Phone = styled.a`
  display: inline-block;
  overflow-wrap: anywhere;
  font-weight: 500;
  font-size: 12px;
  /* text-decoration-line: underline; */
  line-height: 1.38;
  color: #111111;
  margin-bottom: 12px;
  :hover {
    color: #ff6101;
  }
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1279px) {
    font-size: 16px;
  }
`;
