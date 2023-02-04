import styled from 'styled-components';

export const Container = styled.div`
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media screen and (min-width: 767px) {
    max-width: 768px;
    padding: 0 32px 0 0;
  }
  @media screen and (min-width: 1279px) {
    max-width: 1280px;
    padding: 0 16px 0 0;
    margin: 0;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1279px) {
    flex-direction: column;
  }
`;
export const Containere = styled.div`
  width: 280px;
  height: 537px;
  padding: 20px 24px;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    width: 736px;
    height: 311px;
    padding: 24px 40px 24px 32px;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: flex-end;
    border-radius: 0px 40px 40px 0px;
  }
  @media screen and (min-width: 1279px) {
    width: 411px;
    height: 541px;
    padding: 16px;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;

export const Package = styled.div`
  margin-bottom: 47px;
  @media screen and (min-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1279px) {
    margin-right: 32px;
    margin-bottom: 0;
  }
`;
export const Text = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  margin-bottom: 18px;
  color: var(--black);

  @media screen and (min-width: 767px) {
    margin-bottom: 40px;
    font-size: 28px;
    margin-left: 32px;
  }
  @media screen and (min-width: 1279px) {
    margin-bottom: 24px;
    margin-left: 17px;
  }
`;
export const Title = styled.h2`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  margin-bottom: 32px;
  color: var(--black);

  @media screen and (min-width: 767px) {
    margin-bottom: 24px;
    font-size: 28px;
  }
`;

export const ContainerPets = styled.div`
  position: relative;
  @media screen and (min-width: 1279px) {
    height: 602px;
  }
`;
export const Section = styled.section`
  padding: 60px 0 80px 0;
  @media screen and (min-width: 767px) {
    padding: 88px 0 100px 0;
  }
  @media screen and (min-width: 1279px) {
    padding: 58px 0 40px 0;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
export const Div = styled.div``;
