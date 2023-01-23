import styled from "styled-components";

export const Filt = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  background-color: #52373c;
  margin-top: 19px;
  border-radius: 10px;
  text-align: center;
  top: 80px;
  position: sticky;
  & div {
    padding: 80px 0;
  }
`;

export const FilterTitle = styled.h2`
  background-color: #2b1c1f;
  margin: 0;
  padding: 0.7rem;
  border-top-right-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
`;
export const EachFilter = styled.p`
  margin: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  font-weight: 400;
  padding-bottom: 0.5rem;
  /* font-size: 1.2rem; */
  /* padding: 0.5rem 1.5rem; */
  font-size: 1.2rem;
`;

export const Types = styled.section`
  padding: 20px;
`;
