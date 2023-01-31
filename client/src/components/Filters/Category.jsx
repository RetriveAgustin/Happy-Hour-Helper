import React from "react";
import { useSelector } from "react-redux";
import { TreeItem } from "@mui/lab";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

function FilterCategories({
  category,
  render,
  setRender,
  Checked,
  setChecked,
}) {
  const subCategories = useSelector((state) => state.subCategories);
  const products = useSelector((state) => state.products);
  const brands = useSelector((state) => state.brands);

  let midBrands = [];
  let finalBrands = [];
  let finalProducts = [];

  products &&
    products.map((product) => {
      if (product.Categories[0].id === category.id) {
        finalProducts.push(product);
      }
    });

  finalProducts &&
    finalProducts.map((product) => {
      if (!midBrands.includes(product.Brands[0].id)) {
        midBrands.push(product.Brands[0].id);
      }
    });

  brands &&
    brands.map((brand) => {
      if (midBrands.includes(brand.id)) {
        finalBrands.push(brand);
      }
    });

  const handleFilter = (e) => {
    if (e !== render.categoryId) {
      setRender({
        filtered: true,
        categoryId: e,
      });
    } else {
      setRender({
        filtered: false,
        categoryId: "",
      });
    }
  };

  const handleLowerFilter = (e) => {
    const currentIndex = Checked.indexOf(e);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(e);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <Box display="flex" flexDirection="row" sx={{ color: "white" }}>
      <div value={render.categoryId} onClick={() => handleFilter(category.id)}>
        <FilterAltIcon fontSize="75" sx={{ cursor: "pointer" }} />
      </div>
      <TreeItem
        nodeId={category.id}
        label={category.name}
        sx={{ color: "white" }}
      >
        <TreeItem
          nodeId={category.id.concat("subCat")}
          label="Subcategoría"
          sx={{ color: "white" }}
        >
          {subCategories &&
            subCategories.map((subCat) => {
              if (subCat.Category.id === category.id) {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TreeItem nodeId={subCat.id} label={subCat.name} />
                    <Checkbox
                      size="small"
                      onChange={() => handleLowerFilter(subCat.id)}
                      checked={Checked.indexOf(subCat.id) === -1 ? false : true}
                      sx={{
                        color: "white",
                        "&.Mui-checked": { color: "white" },
                      }}
                    />
                  </Box>
                );
              }
            })}
        </TreeItem>
        <TreeItem
          nodeId={category.id.concat("bra")}
          label="Marca"
          sx={{ color: "white" }}
        >
          {finalBrands &&
            finalBrands.map((brand) => {
              return (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <TreeItem nodeId={brand.id} label={brand.name} />
                  <Checkbox
                    size="small"
                    onChange={() => handleLowerFilter(brand.id)}
                    checked={Checked.indexOf(brand.id) === -1 ? false : true}
                    sx={{
                      color: "white",
                      "&.Mui-checked": { color: "white" },
                    }}
                  />
                </Box>
              );
            })}
        </TreeItem>
      </TreeItem>
    </Box>
  );
}

export default FilterCategories;
