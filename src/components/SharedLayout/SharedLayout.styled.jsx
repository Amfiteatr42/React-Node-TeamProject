import { default as styled } from 'styled-components';

export const HeaderContainer = styled.header`
    
    background-color: #FDF7F2;
     
`;

export const HeaderList = styled.ul`
    width: 320px;
    @media (min-width: 768px) and (max-width: 1279.99px) {
    width: 768px;
    };
    
    @media (min-width: 1280px) {
    width: 1280px;
    };
    display: flex;
    align-items: center;
    flex-direction: row;
`;  

export const HeaderItem = styled.li`
    margin-right: 0;
`;