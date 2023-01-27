import React from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AvatarIcon from "./AvatarIcon";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "./logo.svg";
import SearchBarMUI from "./SearchBarHeader";
import { useState } from "react";
import { LinkDiv, NavContainer } from "./Header.styles";

function NavBar() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const HandleInput = (searchName) => {
    setSearchValue(searchName);
  };

  const HandleSearch = () => {
    navigate(`/search/?name=${searchValue}`);
  };

  return (
    <NavContainer>
      <Link to="/">
        <img src={Logo} alt="hhh logo" />
      </Link>
      <LinkDiv>
        <IconButton onClick={() => navigate("/home")}>
          <HomeIcon sx={{ color: "white", fontSize: 30 }} />
        </IconButton>
        <SearchBarMUI
          InputFunction={(e) => HandleInput(e.target.value)}
          searchValue={HandleSearch}
        />
        <AvatarIcon />
        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCartIcon sx={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </LinkDiv>
    </NavContainer>
  );
}

export default NavBar;
