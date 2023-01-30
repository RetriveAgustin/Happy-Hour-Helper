import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AddCardIcon from "@mui/icons-material/AddCard";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "Settings",
    path: "settings",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    id: 2,
    name: "Address",
    path: "address",
    icon: <HomeIcon />,
  },
  {
    id: 3,
    name: "Pago",
    path: "pago",
    icon: <AddCardIcon />,
  },
];

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();

  const ItemsList = styled.ul`
    list-style: none;
  `;

  const ItemContainer = styled.li`
    margin-top: 1.5rem;
    width: 100%;
    padding: 1rem 0.25rem;
    border-radius: 0.2rem;
    cursor: pointer;
    &:hover {
      background: #eaeced;
    }
    &.active {
      background-color: #dbe4f3;
    }
  `;

  const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    color: #7c7788;
    font-size: 1em;
  `;

  const ItemName = styled.span`
    margin-left: 0;
    display: block;
    text-transform: capitalize;
    color: #c4c0c0;
    font-size: 1.8em;
  `;

  const ItemIcon = styled.span`
    margin-left: 0;
    display: block;
    text-transform: capitalize;
    color: white;
    font-size: 2em;
    padding: 0.25em;
  `;

  return (
    <ItemsList>
      <Link to='/settings' style={{ textDecoration: "none" }}>
        <ItemContainer 
          className={location.pathname === '/settings' ? "active" : ""}
        >
          <ItemWrapper>
            <ItemIcon><PersonOutlineOutlinedIcon /></ItemIcon>
            <ItemName displaySidebar={displaySidebar}>
              Settings
            </ItemName>
          </ItemWrapper>
        </ItemContainer>
      </Link>
      <Link to='/address' style={{ textDecoration: "none" }}>
        <ItemContainer
          className={location.pathname === '/address' ? "active" : ""}
        >
          <ItemWrapper>
            <ItemIcon><HomeIcon /></ItemIcon>
            <ItemName displaySidebar={displaySidebar}>
              Address
            </ItemName>
          </ItemWrapper>
        </ItemContainer>
      </Link>
      <Link to='/pago' style={{ textDecoration: "none" }}>
        <ItemContainer
          className={location.pathname === '/pago' ? "active" : ""}
        >
          <ItemWrapper>
            <ItemIcon><AddCardIcon /></ItemIcon>
            <ItemName displaySidebar={displaySidebar}> 
              Pago
            </ItemName>
          </ItemWrapper>
        </ItemContainer>
      </Link>
    </ItemsList>
  );
};

export default SidebarItems;
