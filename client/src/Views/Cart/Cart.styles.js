import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    min-height: 80vh;
    background-color: #EEECDF;
`

export const Table = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: fit-content;
    width: 80%;
    background-color: #171717;
    margin: 7rem 0 2rem 0;
    padding: 2rem 0 2rem 0;
`

export const Cell = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 20%;
    background-color: white;
    border-radius: 10px;
`