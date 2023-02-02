import { default as styled } from 'styled-components';


export const AuthList = styled.ul`
display: flex;
justify-content: center;
align-items: end;
margin-left: 335px;

@media (max-width: 1279.99px) {
    margin-left: 246px;
}

@media (max-width: 767.99px) {
        /* display: none; */
        margin-left: 0;
  }
    
`;

export const LoginItem = styled.li`

    margin-right: 20px;
    @media (max-width: 1279.99px) {
        margin-right: 12px;
  }
`;

export const RegItem = styled.li`
    
`;

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 0;

    width: 111px;
    height: 47px;
    border-radius: 22px;
    border: none;
    background-color: #F59256;

    @media (max-width: 767.99px) {
        width: 95px;
        height: 35px;
        border-radius: 17px;
  } 
`;

export const RegContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    margin-right: 0;

    width: 181px;
    height: 47px;
    border-radius: 23px;
    
    background-color: #FFFFFF;
    border: 2px solid #F59256;

    @media (max-width: 767.99px) {
        width: 144px;
        height: 35px;
        border-radius: 17px;
  }
  
`;

export const Text = styled.span`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    margin: 0, auto;
    color: #FFFFFF;

    @media (max-width: 767.99px) {
        font-size: 14px;
        line-height: 19px;
  }

`;
export const RegText = styled.span`
    font-family: 'Manrope';
    font-weight: 500;
    font-size: 20px;
    line-height: 27px;

    margin: 0, auto;
    color: #000000;

    @media (max-width: 767.99px) {
        font-size: 14px;
        line-height: 19px;
  }
`;
