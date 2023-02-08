import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
export const Container = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;
export const Text = styled.p`
  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  margin-right: 12px;
`;
export const Button = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: #f59256;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: var(--accent);
    transition: var(--transition);
  }
  @media screen and (min-width: 767px) {
    width: 40px;
    height: 40px;
  }
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Icon = styled(AiOutlinePlus)`
  fill: var(--white);
  width: 24px;
  height: 24px;
`;
