import styled from "styled-components";

export const AdminNavContainer = styled.nav`
  height: 100vh;
  background-color: #4b4b4b;
  border-right: 4px solid #eeecdf;
  /* border-radius: 0.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  /* padding: 1rem; */
  gap: 1rem 0;
`;

export const DashboardContainer = styled.div`
  width: 100%;
  background-color: #3d3d3d;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 0.5rem 1rem;
  padding: 0.5rem;
`;

export const PrevButton = styled.button`
  align-self: flex-start;
  background-color: rgba(255, 255, 255, 1);
  margin: 10px;
  padding: 3px 2px 3px 10px;
  /* width: 2rem; */
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #3d3d3d;
    color: white;
  }
`;

export const AdminPageContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const NavButton = styled.button`
  width: 20rem;
  border: none;
  background-color: transparent;
  border-left: 5px solid #eeecdf;
  color: white;
  /* background: #eeecdf; */
  padding: 0.8rem 4rem;
  /* border-radius: 0.5rem; */
  font-size: 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease-in, color 0.3s ease-in;

  &:hover {
    background-color: #eeecdf;
    color: black;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 1.3rem;
  & h1 {
    padding-top: 40px;
    color: white;
  }
`;

export const UserImage = styled.img`
  border-radius: 100%;
  border: 4px ridge grey;
`;
