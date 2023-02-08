import { default as styled } from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    font-weight: 500;
    font-size: 32px;
    line-height: 1.375;
    letter-spacing: 0.04em;
  }
  @media (max-width: 1279px) {
    flex-direction: column;
    font-weight: 500;
    font-size: 48px;
    line-height: 1.375;
    letter-spacing: 0.04em;
  }
`;

export const NavItem = styled.li`
  @media (min-width: 1279px) {
    &:not(:last-child) {
      margin-right: 80px;
    }
  }

  display: flex;
  justify-content: flex-start;

  font-family: 'Manrope';
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  color: #181c27;

  @media (max-width: 767px) {
    margin-right: 0;
    margin-left: 0;
    margin-bottom: 40px;

    font-size: 32px;
    line-height: 44px;
  }
  @media (max-width: 1279px) and (min-width: 767px) {
    font-weight: 500;
    font-size: 48px;
    line-height: 1.35;

    margin-top: 60px;
    margin-left: 0;
    margin-right: 0;
  }
`;

export const MenuItem = styled.span`
  &:hover {
    color: #f59256;
    font-weight: 500;
    transition: var(--transition);
  }
  &:active,
  &:focus {
    text-decoration-line: underline;
    transition: var(--transition);
  }
`;
