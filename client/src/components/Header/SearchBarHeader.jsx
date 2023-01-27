import React from "react";
import InputBase from "@mui/material/InputBase";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchbarContainer } from "./Header.styles";

function SearchBarMUI({ InputFunction, searchValue }) {
  return (
    <SearchbarContainer>
      <InputBase onChange={InputFunction} />
      <IconButton onClick={searchValue}>
        <SearchIcon />
      </IconButton>
    </SearchbarContainer>
  );
}

export default SearchBarMUI;
