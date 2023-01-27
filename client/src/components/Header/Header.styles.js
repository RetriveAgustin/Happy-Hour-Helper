import styled from "styled-components";

const NavContainer = styled.nav`
  box-sizing: border-box;
  background-color: #52373c;
  box-shadow: 0 2px 5px 1px rgba(40, 17, 22, 0.51);
  width: 100%;
  height: 10vh;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100000000;
`;

const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const SearchbarContainer = styled.div`
  width: 20rem;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  border-radius: 1rem;
`;

export { NavContainer, LinkDiv, SearchbarContainer };
