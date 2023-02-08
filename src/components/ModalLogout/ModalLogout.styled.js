import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Title = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: var(--black);
  text-align: center;
  margin-bottom: 10px;
  @media screen and (min-width: 767px) {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
export const BtnYes = styled.button`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  color: var(--white);
  background-color: var(--active);
  border: var(--border);
  border-radius: var(--radius);
  padding: 4px 8px;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    border: var(--border);
    transition: var(--transition);
    background-color: var(--bg-basic);
    color: var(--black);
  }
  @media screen and (min-width: 767px) {
    padding: 10px 30px;
  }
`;
export const BtnNo = styled.button`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  color: var(--black);
  background-color: transparent;
  border: var(--border);
  border-radius: var(--radius);
  padding: 4px 8px;
  cursor: pointer;
  &:hover {
    transition: var(--transition);
    color: var(--white);
    background-color: var(--active);
    border: var(--border);
  }
  @media screen and (min-width: 767px) {
    padding: 10px 30px;
  }
`;
