import styled from "styled-components";

export const StyledButton = styled.button`
    border: none;
    background-color: #1a1a1a;
    color: white;
    width: 11rem;
    height: 40px;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #2b2b2b;
    }

    @media (max-width: 990px) {
        display: block;
        margin: 2rem auto;
    }
`