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
import LoginBtn from "./loginBtn/LoginBtn";
import RegisterBtn from "./registerBtn/RegisterBtn";
import { Stack } from "@mui/system";

function Header() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  const cart = useSelector((state) => state.root.cart);
  const user = useSelector((state) => state.user.userLoged);

  const HandleInput = (searchName) => {
    setSearchValue(searchName);
  };

  const HandleSearch = () => {
    navigate(`/search?name=${searchValue}`);
  };

  return (
    <NavContainer>
      <Link to="/">
        <img src={Logo} style={{ marginLeft: "3rem" }} alt="not found" />
      </Link>
      <LinkDiv>
        <IconButton onClick={() => navigate("/")}>
          <HomeIcon sx={{ color: "white", fontSize: 30 }} />
        </IconButton>
        <SearchBarMUI
          InputFunction={(e) => HandleInput(e.target.value)}
          searchValue={HandleSearch}
        />

        {user?.id ? (
          <AvatarIcon />
        ) : (
          <Stack spacing={2} direction="row">
            <LoginBtn />
            <RegisterBtn />
          </Stack>
        )}

        <IconButton onClick={() => navigate("/cart")}>
          <Badge
            badgeContent={cart.length}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            color="primary"
          >
            <ShoppingCartIcon sx={{ color: "white", fontSize: 30 }} />
          </Badge>
        </IconButton>
      </LinkDiv>
    </NavContainer>
  );
}

export default Header;
