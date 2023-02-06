import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: #171717;
    justify-content: center;
`
export const TextInput = styled.input`
    color: grey;
    border: solid 1px white;
    border-radius: 5px;
    width: 19rem;
    height: 2.6rem;
    display: flex;
    background-color: white;
    text-align: center;
    font-size: 0.9rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
export const ImageInput = styled.input`
    color: white;
    border: solid 1px white;
    border-radius: 5px;
    align-items: center;
    width: 9rem;
    height: 1.5rem;
    display: flex;
    background-color: white;
    text-align: center;
    font-size: 0.9rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 18rem;
    justify-content: space-between;
    align-items: center;
`

export const CheckBox = styled.input`
    color: grey;
    border: solid 1px white;
    width: 19rem;
    height: 2rem;
`
export const NumInput = styled.input`
    height: 1.5rem;
    width: 1.7rem;
`

export const CheckContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 9.5rem;
    height: 2.7rem;
`
export const BrandContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`

export const Selector = styled.select`
    width: 6rem;
    height: 2rem;
    border-radius: 4px;
    text-align: center;

`

export const ColumnFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
    justify-content: center;
    align-items: center;
`
export const SubmitButton = styled.button`
    margin-top: 1.5rem;
    width: 19.5rem;
    height: 2.7rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    background-color: #52373C;
    color: white;
    border: none;
`