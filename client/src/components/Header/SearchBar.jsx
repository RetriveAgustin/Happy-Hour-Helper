import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

function SearchBar({ placeholder }) {
  const SearchBarContainer = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const SearchBarInput = styled.input`
    border-radius: 0.5rem;
    border: none;
    width: 20rem;
    padding: 0.6rem 0.5rem;

    outline: none;
  `;

  const InputContainer = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
  `;

  const DataContainer = styled.div`
    position: absolute;
    top: 7%;
    background-color: white;
    width: 22rem;
    height: 30rem;
    overflow-y: auto;
  `;
  const DataCard = styled.div`
    border-radius: 0.5rem;
    height: 5rem;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const products = [
    "Cerveza",
    "Vino",
    "Whisky",
    "Fernet",
    "Aperitivos",
    "Vino Espumante",
    "Vino Tinto",
  ];

  const onSearch = (e) => {
    console.log(e.target.name);
  };

  return (
    <>
      <SearchBarContainer>
        <InputContainer>
          <SearchBarInput
            type="text"
            placeholder={placeholder}
            onChange={(e) => onSearch(e)}
          />
          <IconButton disabled>
            <SearchIcon />
          </IconButton>
        </InputContainer>
        {/* {filteredData.length > 0 ? <DataContainer>Hola</DataContainer> : <></>} */}
        <DataContainer>
          {products.map((p) => (
            <DataCard>
              <p>{p}</p>
            </DataCard>
          ))}
        </DataContainer>
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
