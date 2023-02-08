import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  background-color: #eeecdf;
`;

export const ImgBox = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 3rem;
  box-shadow: 0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const Half1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 50%;
`;

export const Half2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 100%;
  width: 50%;
`;

export const Image = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: contain;
  aspect-ratio: 1 / 1;
`;

export const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: grey;
`;


export const SizeButton = styled.button`
  background-color: transparent;
  border: solid 1px #cecaad;
  margin: 4px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: solid 1px #52373c;
  }
`;

export const PriceTag = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
  font-family: 'Anton', sans-serif;
  color: rgb(68, 68, 68);
`

export const ButtonsDiv = styled.div`
  display: flex;
  align-items: left;
  margin-top: 1rem;
  gap: 2rem;
  width: 24rem;
`;
