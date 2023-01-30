import React, { useState } from "react";
import styled from "styled-components";
import Sidebaritems from "./SideBaritems";

const MOBILE_VIEW = window.innerWidth < 468;

export const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  width: 18em;
  height: 100vh;
  padding: 0.75rem;
  background: #52373c;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;
  text-decoration: none;
  display: block;
  
`;

const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  font-size: 0.9rem;
`;

const SidebarLogoWrapper = styled.img`
  padding: 0.5rem 5.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  border-radius: 50%;
  text-decoration: none;
`;

const SidebarToggler = styled.button`
  cursor: pointer;
  display: ${({ displaySidebar }) => (displaySidebar ? "block" : "none")};
  @media (max-width: 468px) {
    display: block;
  }
`;

const Children = styled.div`
  margin-left: ${({ displaySidebar }) => (displaySidebar ? "15rem" : "5rem")};
  @media (max-width: 468px) {
    margin-left: 5rem;
  }
`;

function User({children}) {
  const [displaySidebar, setDisplaySidebar] = useState(!MOBILE_VIEW);

  const handleSidebarDisplay = (e) => {
    e.preventDefault();
    if (window.innerWidth > 468) {
      setDisplaySidebar(!displaySidebar);
    } else {
      setDisplaySidebar(false);
    }
  };

  return (
    <React.Fragment>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarLogoWrapper
            src="https://imgs.search.brave.com/g4ZFZq9Aex8IsaczP7FUj-PG_ucqW80TEPMIYDGA9ns/rs:fit:300:300:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhlLzdi/LzQzLzhlN2I0MzNk/YTIyNDI5OTQwZGVh/ZTYxN2ViODRiOGVk/LmpwZw"
            alt="user-profile"
          />
          <SidebarToggler
            displaySidebar={displaySidebar}
            onClick={handleSidebarDisplay}
          >
            
          </SidebarToggler>
          <Sidebaritems displaySidebar={displaySidebar} />
        </SidebarWrapper>
      </SidebarContainer>
      <Children displaySidebar={displaySidebar}>{children}</Children>
    </React.Fragment>
  );
}

export default User;
