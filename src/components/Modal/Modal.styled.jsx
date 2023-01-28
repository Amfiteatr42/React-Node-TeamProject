const { default: styled } = require('styled-components');

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  padding: 94px 15px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.2);
  overflow-y: scroll;
`;
export const ModalWindow = styled.div`
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px 20px;
  transform: translate(-50%, -50%) scale(1);
  width: 280px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  background-color: #fdf7f2;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
