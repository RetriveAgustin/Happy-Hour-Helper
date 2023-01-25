import styled from "styled-components";
import img from "../../assets/beers.jpg";

export const Background = styled.div`
  background-color: #151515;
`;

export const ImageBackground = styled.div`
  background: url(${img});
  background-size: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    margin: 0;
    color: white;
  }
`;

export const ContainerFilter = styled.div`
  display: flex;
  position: relative;
`;

export const SectionCards = styled.div`
  width: 100%;
`;