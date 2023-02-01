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
  ${props => props.theme.breakpoints.tab} {
    width: 335px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
  }
  ${props => props.theme.breakpoints.desc} {
    width: 392px;
  }
`;

export const Title = styled.a`
  padding-top: 14px;
  display: block;
  font-size: 12px;
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.accent};
  overflow-wrap: break-word;
  ${props => props.theme.breakpoints.tab} {
    padding-top: 0px;
    margin-top: 16px;
    font-size: 16px;
  }
  ${props => props.theme.breakpoints.desc} {
    font-size: 16px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperIMG = styled.div`
  flex-grow: 0;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const WrapperContent = styled.div`
  flex-grow: 1;
  font-weight: 500;
  font-size: 12px;
  line-height: ${props => props.theme.lineHeights.main};
  color: #111111;
  width: 150px;
  overflow-wrap: break-word ${props => props.theme.breakpoints.tab} {
    font-size: 14px;
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Img = styled.img`
  padding: 0px;
  width: 110px;
  height: 78px;
  margin-top: 40px;
  margin-left: 4px;
  margin-right: 12px;
  ${props => props.theme.breakpoints.tab} {
    margin-top: 54px;
    margin-left: 4px;
    margin-right: 14px;
    width: 120px;
    height: 85px;
  }
  ${props => props.theme.breakpoints.desc} {
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
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
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
  line-height: ${props => props.theme.lineHeights.main};
  text-align: center;
  color: #000000;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const ItemTime = styled.li`
  margin-top: 4px;
  &:nth-child(1) {
    margin-top: 0px;
  }
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const P = styled.p`
  margin-top: 4px;
  &:nth-child(1) {
    margin-top: 12px;
  }
  ${props => props.theme.breakpoints.tab} {
    font-size: 14px;
    margin-top: 8px;
    &:nth-child(1) {
      margin-top: 16px;
    }
  }
  ${props => props.theme.breakpoints.desc} {
    font-size: 16px;
    margin-top: 12px;
    &:nth-child(1) {
      margin-top: 16px;
    }
  }
`;

export const Data = styled.div`
  position: relative;
  div {
  }
  &:hover {
    color: #f59256;
    div {
      display: block;
    }
  }
  ${props => props.theme.breakpoints.tab} {
    font-size: 14px;
  }
  ${props => props.theme.breakpoints.desc} {
    font-size: 16px;
  }
`;

export const Address = styled.a`
  display: inline-block;
  overflow-wrap: anywhere;
  font-weight: 500;
  font-size: 12px;
  /* text-decoration-line: underline; */
  line-height: ${props => props.theme.lineHeights.main};
  color: #111111;
  :hover {
    color: #ff6101;
  }
  ${props => props.theme.breakpoints.tab} {
    font-size: 14px;
  }
  ${props => props.theme.breakpoints.desc} {
    font-size: 16px;
  }
`;

export const IconAddress = styled(GoLocation)`
  fill: ${props => props.theme.colors.accent};
  margin-left: 10px;
  ${props => props.theme.breakpoints.tab} {
  }
  ${props => props.theme.breakpoints.desc} {
  }
`;

export const Email = styled.a`
  display: inline-block;
  overflow-wrap: anywhere;
  font-weight: 500;
  font-size: 12px;
  /* text-decoration-line: underline; */
  line-height: ${props => props.theme.lineHeights.main};
  color: #111111;
  :hover {
    color: #ff6101;
  }
  ${props => props.theme.breakpoints.tab} {
    font-size: 14px;
  }
  ${props => props.theme.breakpoints.desc} {
    font-size: 16px;
  }
`;

export const Phone = styled.a`
  display: inline-block;
  overflow-wrap: anywhere;
  font-weight: 500;
  font-size: 12px;
  /* text-decoration-line: underline; */
  line-height: ${props => props.theme.lineHeights.main};
  color: #111111;
  margin-bottom: 12px;
  :hover {
    color: #ff6101;
  }
  ${props => props.theme.breakpoints.tab} {
    font-size: 14px;
  }
  ${props => props.theme.breakpoints.desc} {
    font-size: 16px;
  }
`;