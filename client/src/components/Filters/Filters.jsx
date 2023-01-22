import React from "react";
import { Filt, FilterTitle, EachFilter, Types } from "./Filters.styles";

export default function Filters() {
  return (
    <Filt>
      <FilterTitle>Filtrá tu busqueda</FilterTitle>
      <div>
        <Types>
          <EachFilter>Category</EachFilter>
          <select>
            <option placeholder="Elegí"></option>
            <option>Beer</option>
            <option>Fernet</option>
            <option>Wine</option>
            <option>Whiskies</option>
          </select>
        </Types>
        <Types>
          <EachFilter>Subcategory</EachFilter>
          <select>
            <option placeholder="Elegí"></option>
            <option>OptionOne</option>
            <option>OptionTwo</option>
            <option>OptionThree</option>
            <option>OptionFour</option>
          </select>
        </Types>
        <Types>
          <EachFilter>Brand </EachFilter>
          <select>
            <option placeholder="Elegí"></option>
            <option>OptionOne</option>
            <option>OptionTwo</option>
            <option>OptionThree</option>
            <option>OptionFour</option>
          </select>
        </Types>
      </div>
    </Filt>
  );
}
