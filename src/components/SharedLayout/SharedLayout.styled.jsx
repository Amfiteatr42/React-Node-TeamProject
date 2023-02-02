import { default as styled } from 'styled-components';

export const HeaderContainer = styled.header`
    margin: 0 auto;
    background-color: #FDF7F2;     
`;

export const HeaderList = styled.ul`
    position: relative;
    width: 320px;
    margin: 0 auto;
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

