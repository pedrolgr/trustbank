import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const StyledMenuIcon = styled(FontAwesomeIcon)`
    display: none;
    position: absolute;
    font-size: 1.8rem;
    cursor: pointer;
    right: 1.4rem;
    top: 1.4rem;
    @media (max-width: 990px) {
        display: block;
    }
`

export const LogoImg = styled.img`
    margin-right: 5rem;

    @media (max-width: 990px) {
        padding-left: 1rem;
    }
`

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    padding: 0 10rem;
    position: relative;

    @media (max-width: 1440px) {
        padding: 0 2.5rem;
    }

    @media (max-width: 990px) {
        display: block;
        padding: 1rem 0;
    }

`

export const NavLinksContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    
    transition: all 1s ease-in-out;

    @media (max-width: 990px) {
        display: ${(props) => (props.active ? "flex" : "none")};
        flex-direction: column;
        background-color: white;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: black;

    @media (max-width: 1440px) {
        width: 20%;
    }

    @media (max-width: 990px) {
        width: 100%;
        margin: 2rem auto;
        text-align: center !important;
    }
`

export const MarginRightNavLink = styled(NavLink)`
    width: 45%;
    text-align: end;
    margin-right: 2rem;

    @media (max-width: 990px) {
        display: block;
        margin: 2rem auto;
    }
`;