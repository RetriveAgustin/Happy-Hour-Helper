import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;    
    width: 100vw;
    height: 80vh;
    background-color: #EEECDF;
`

export const Half1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    height: 100%;
    width: 50%;
`
export const Half2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    height: 100%;
    width: 50%;
`
export const Image = styled.img`
    width: 30rem;
    height: 30rem;
`

export const Name = styled.h1`
    font-size: 3rem;
    margin-bottom: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: grey;
`

export const SizeButton = styled.button`
    background-color: transparent;
    border: solid 1px #cecaad;
    margin: 4px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
       border: solid 1px #52373c;
    }
`

export const ButtonsDiv = styled.div`
    display: flex;
    align-items: left;
    gap: 2rem;
    width: 24rem;
`