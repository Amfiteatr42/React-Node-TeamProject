import { default as styled } from 'styled-components';

export const NavigationList = styled.ul`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    &:last-child{
        justify-content: end;
    }
`;


export const NavigationItem = styled.li`
    &:first-child{
        @media (max-width: 1279.99px) {
        display: none;
        }
    }
    @media (max-width: 1279.99px) {
    margin-right: 0;
  }
    display: flex;
    justify-content: flex-start;

`;

export const NavigationItemUser = styled.li`
    
`;

export const BurgerBtnItem = styled.li`
    display: flex;
    justify-content: flex-start;
`;

export const BurgerBtn = styled.button`
width: 47px;
height: 47px;
border: none;
background-color: #FDF7F2;
cursor: pointer;
margin-left: 20px;
margin-right: 37px;

@media (max-width: 767.99px) {
    margin-right: 0;
    margin-left: 158px;
  }

@media (min-width: 1280px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
width: 47px;
height: 47px;
border: none;
background-color: #FDF7F2;
cursor: pointer;
margin-left: 570px;
margin-right: 37px;

@media (max-width: 767.99px) {
    margin-right: 0;
    margin-left: 158px;
  }
@media (min-width: 1280px) {
    display: none;
  }

`;

export const SvgBurger = styled.svg`
width: 40px;
height: 40px;
`;

export const SvgClose = styled.svg`
width: 40px;
height: 40px;
`;

export const MobMenuContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
width: 320px;
height: 100vh;
background-color: #FDF7F2;

    @media (min-width: 768px) and (max-width: 1279.99px) {
    width: 768px;
    }
`;

export const UserAuthNavBox = styled.div`
    margin-top: 30px;
    margin-bottom: 60px;
    @media (min-width: 768px) {
        display: none;
    }

`;

export const UserNavBox = styled.div`
    @media (max-width: 767.99px) {
        display: none;
  }
    @media (max-width: 1280px) {
    
  }
`;

export const MobMenuBox = styled.div`
    position: absolute;
    top: 77px;
    left: 0;
    width: 320px;
    height: auto;
    background-color: #FDF7F2;

    @media (min-width: 768px) and (max-width: 1279.99px) {
    
    width: 768px;
    }

    @media (min-width: 1280px) {
        display: none;
    } 
`;

