import styled from 'styled-components';
import { IoLogOutOutline } from 'react-icons/io5';
export const Button = styled.div`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--gray-2);
  background-color: transparent;

  @media screen and (min-width: 767px) {
    justify-content: flex-start;
    margin-right: auto;
  }
`;

export const Svg = styled(IoLogOutOutline)`
  width: 22px;
  height: 22px;
  color: var(--active);
  margin-right: 8px;
`;
