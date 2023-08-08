import styled from "styled-components";
import Button from '../Button/Button';

export const HeaderContainer = styled.section`
    width: 100%;
    height: 80vh;
    margin-top: 13rem;
    padding: 0 16rem;
    display: flex;
`

export const HeaderLeft = styled.div`
    width: 45%;
    height: 500px;
    padding: 0 2rem;
`

export const HeaderRight = styled.div`
    border: 1px solid red;
    width: 60%;
    height: 500px;
    padding: 0 2rem;
`

export const HeaderTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 600;
`

export const HeaderText = styled.p`
    color: #545454;
    margin-top: 1rem;
`

export const InputWrapper = styled.div`
    display: flex;
    border: 1px solid #545454;
    border-radius: 10px;
    width: 80%;
    height: 3.5rem;
    margin-top: 2.5rem;
    padding: 0 0.5rem 0 1rem;
    align-items: center;

`

export const HeaderInput = styled.input`
    width: 60%;
    outline: none;
    border: none;
    font-size: 1.15rem;
`

export const HeaderInputButton = styled(Button)`
    font-weight: 900;
    height: 90;
`
