import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  margin: auto;
  margin: 50px auto;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
`;

export const H1 = styled.h1`
  background-color: #d9d9d9;
  text-align: center;
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
`;
