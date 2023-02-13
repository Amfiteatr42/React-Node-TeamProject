import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
export const Form = styled.form``;
export const Title = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  text-align: center;
  color: var(--black);
  margin-bottom: 12px;
  @media screen and (min-width: 767px) {
    font-size: 36px;
    line-height: 1.36;
  }
`;
export const Label = styled.label`
  display: block;
  font-size: 18px;
  line-height: 1.44;
  margin-bottom: 8px;
  margin-top: 16px;
  @media screen and (min-width: 767px) {
    font-size: 24px;
    line-height: 1.1;
    margin-bottom: 12px;
    margin-top: 28px;
  }
`;
export const Input = styled.input`
  min-width: 240px;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  background-color: var(--bg-basic);
  border: var(--border-3);
  border-radius: var(--radius);
  outline: none;
  padding: 10px 14px 10px;

  @media screen and (min-width: 767px) {
    font-size: 16px;
    line-height: 1.63;
    padding: 11px 16px 10px;

    min-width: 448px;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);
    @media screen and (min-width: 767px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
`;
export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const Button = styled.button`
  display: block;
  width: 240px;
  font-size: 20px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: var(--black);
  background-color: var(--white);
  border: var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  padding: 7px 0 7px 0;
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-top: 12px;
    }
  }

  @media screen and (min-width: 767px) {
    width: 180px;

    &:first-child {
      margin-right: 20px;
    }
  }
  &:hover {
    transition: var(--transition);
    color: var(--white);
    background-color: var(--active);
    border: var(--border);
  }
`;

export const AccentBtn = styled.button`
  display: block;
  width: 240px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.38;
  letter-spacing: 0.04em;
  color: var(--white);
  background-color: var(--active);
  border: var(--border);
  border-radius: var(--radius);
  cursor: pointer;
  padding: 7px 0 7px 0;
  @media screen and (min-width: 767px) {
    width: 180px;
  }
  &:hover {
    border: var(--border);
    transition: var(--transition);
    background-color: var(--bg-basic);
    color: var(--black);
  }
`;
export const Text = styled.p`
  font-size: 16px;
  line-height: 1.38;
  text-align: center;
  color: var(--black);
  margin-bottom: 20px;
  @media screen and (min-width: 767px) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
`;
export const LabelImg = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 208px;
  background-color: var(--bg-basic);
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 182px;
    height: 182px;
    border-radius: var(--radius);
  }
`;

export const LoadImg = styled.div`
  width: 208px;
  height: 208px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: var(--radius);
  }
`;
export const LoadImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  @media screen and (min-width: 767px) {
    border-radius: var(--radius);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  background: var(--bg-basic);
  border: var(--border-3);
  border-radius: 20px;
  padding: 12px 14px;
  outline: none;
  resize: none;
  @media screen and (min-width: 767px) {
    width: 394px;
    height: 116px;
    padding: 16px;
  }
  &::placeholder {
    font-size: 14px;
    line-height: 1.85;
    letter-spacing: 0.04em;
    color: rgba(27, 27, 27, 0.6);
    @media screen and (min-width: 767px) {
      font-size: 16px;
      line-height: 1.62;
    }
  }
`;
export const Icon = styled(AiOutlinePlus)`
  position: absolute;
  top: 60px;
  left: 70px;
  width: 71px;
  height: 71px;
  fill: var(--gray-2);
  @media screen and (min-width: 768px) {
    top: 50px;
    left: 60px;
  }
`;

export const InputFile = styled.input`
  display: none;
`;
export const TextError = styled.p`
  font-size: 14px;
  line-height: 1.38;
  text-align: center;
  color: var(--accent);
  margin-top: 5px;
  margin-bottom: -24px;
`;
