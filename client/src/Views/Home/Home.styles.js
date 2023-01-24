import styled from "styled-components";
import img from "../../assets/beers.jpg";

export const Background = styled.div`
  background-color: #151515;
`;

export const ImageBackground = styled.div`
  filter: blur(3px);
  background: url(${img});
  background-size: 100%;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const ContainerFilter = styled.div`
  display: flex;
  position: relative;
`;

export const SectionCards = styled.div`
  width: 100%;
`;

export const TextContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: absolute;
  z-index: 2;
  width: 100%;
  & h1 {
    font-size: 3rem;
    filter: drop-shadow(1px 1px 4px #000000);
  }
`