import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  /* background: red; */
  gap: 40px 0;
`;

export const H1 = styled.h1`
  /* background-color: #d9d9d9; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #52373c;
  /* background-color: #2b1c1f; */
  color: white;
  /* text-align: center; */
  width: 100%;
  height: 80px;
  margin-bottom: 30px;
`;
