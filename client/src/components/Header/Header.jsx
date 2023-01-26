import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AvatarIcon from "./AvatarIcon";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  const navigate = useNavigate();

  // const [selectFilter, setSelectFilter] = useState(false);

  const HeaderContainer = styled.header`
    box-sizing: border-box;
    background-color: #52373c;
    box-shadow: 0 2px 5px 1px rgba(40, 17, 22, 0.51);
    width: 100%;
    height: 5rem;
    margin: 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Title = styled.h2`
    padding: 0 3rem;
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: white;
    margin: 0;
    pointer-events: none;
  `;

  const StyledLink = styled.button`
    background-color: transparent;
    text-transform: uppercase;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    border: none;
    font-weight: 400;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease-in;

    &:hover {
      background-color: #7f6166;
    }
  `;

  const LinkDiv = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
  `;

  return (
    <>
      <HeaderContainer>
        <Title onClick={() => navigate("/")}>Happy Hour Helper</Title>
        <LinkDiv>
          <IconButton
            onClick={() => {
              navigate("/");
            }}
          >
            <HomeIcon sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
          <SearchBar placeholder="Search Product..." />
          <IconButton onClick={() => navigate("/cart")}>
            <ShoppingCartIcon sx={{ color: "white", fontSize: 30 }} />
          </IconButton>
          <AvatarIcon />
        </LinkDiv>
      </HeaderContainer>
    </>
  );
}

export default Header;
