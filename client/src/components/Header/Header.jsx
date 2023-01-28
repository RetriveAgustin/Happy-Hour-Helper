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
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

function NavBar() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const cart = useSelector((state) => state.cart);

  const HandleInput = (searchName) => {
    setSearchValue(searchName);
  };

  const HandleSearch = () => {
    navigate(`/search/?name=${searchValue}`);
  };

  return (
    <NavContainer>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <LinkDiv>
        <IconButton onClick={() => navigate("/")}>
          <HomeIcon sx={{ color: "white", fontSize: 30 }} />
        </IconButton>
        <SearchBarMUI
          InputFunction={(e) => HandleInput(e.target.value)}
          searchValue={HandleSearch}
        />
        <AvatarIcon />
        <IconButton onClick={() => navigate("/cart")}>
          <Badge
            badgeContent={cart.length}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{color:'white'}}
          >
            <ShoppingCartIcon sx={{ color: "white", fontSize: 30 }} />
          </Badge>
        </IconButton>
      </LinkDiv>
    </NavContainer>
  );
}

export default NavBar;
