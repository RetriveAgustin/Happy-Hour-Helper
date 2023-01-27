import styled from "styled-components";

const DashboardInfoContainer = styled.div`
  background-color: #2f3542;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding: 0.1rem 0.2rem;
`;

const SearchBarInput = styled.input`
  width: 20rem;
  height: 3vh;
  padding: 0 1rem;
  border: none;
  border-radius: 1rem 0 0 1rem;
  outline: none;
`;

const DataOutput = styled.div`
  padding: 0.5rem 2rem;
  width: 60vw;
  margin: 1rem 0;
  background-color: white;
  height: 60vh;
  overflow-y: scroll;
`;

const SearchButton = styled.button`
  background: none;
  margin-left: 3px;
  border: none;
  border-radius: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b2bec3;
  }
`;

const FilterInput = styled.select`
  height: 2.2rem;
  width: 6rem;
  padding: 0.2rem 0;
  border-radius: 0.5rem;
  outline: none;
  margin: 0 1rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  align-items: center;
`;

export {
  DashboardInfoContainer,
  SearchBarContainer,
  SearchBarInput,
  DataOutput,
  SearchButton,
  FilterInput,
  HeaderContainer,
};
