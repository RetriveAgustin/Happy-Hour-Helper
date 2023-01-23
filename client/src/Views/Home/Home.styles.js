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

export const TextContent = styled.h1`
  color: white;
  /* text-align: center; */

  padding-top: 340px;
  padding-left: 280px;
  position: absolute; 
  z-index: 1;
`