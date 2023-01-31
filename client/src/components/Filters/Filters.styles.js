import styled from "styled-components";

export const Filt = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 21rem;
  background-color: #52373c;
  min-height: 100%;
`;

export const FilterTitle = styled.h2`
  background-color: #2b1c1f;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0.7rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
`;
export const EachFilter = styled.p`
  margin: 0;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  font-weight: 1000;
  padding-bottom: 0.5rem;
  /* font-size: 1.2rem; */
  /* padding: 0.5rem 1.5rem; */
  font-size: 1.2rem;
`;

export const Types = styled.section`
  display: flex;
  flex-direction: column;
  border-bottom: solid 1px #2b1c1f;
  padding: 20px;
`;

export const InputsMaxMin = styled.div`
  display: flex;
  width: 100%;
  & input {
    width: 67px;
    border-radius: 4px;
    margin: 9px 9px 9px 3px;
    height: 25px;
    padding: 0 4px;
  }
`;
