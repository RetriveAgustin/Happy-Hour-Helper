import React from "react";
import { useSelector } from "react-redux";
import { TreeItem } from "@mui/lab";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";

function FilterCategories ({ category, setFilter }) {
  const subCategories = useSelector((state) => state.subCategories);
  const products = useSelector((state) => state.products);
  const filteredByCategory = products.filter(product => product.Categories[0].name === category.name)

  const handleCheck = (e) => {
    const check = e.target.checked;
    check ? setFilter({
      products: [...products, filteredByCategory.filter(prd => prd.subCategories[0].id !== check )]
    }) : setFilter({
      products: filteredByCategory.filter(prd => prd.subCategories[0].id === check)
    })
  };


  return (
    <Box display="flex" flexDirection="row" sx={{ color: "white" }}>
      <FilterAltIcon fontSize="75" onClick={() => setFilter({title: category.name, products: filteredByCategory})} />
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
                      value={subCat.id}
                      onClick={(e) => handleCheck(e)}
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
          {products &&
            products.map((product) => {
              if (
                product.Categories[0].id === category.id &&
                product.Brands[0].id
              ) {
                return (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <TreeItem
                      nodeId={product.Brands[0].id}
                      label={product.Brands[0].name}
                    />
                    <Checkbox
                      size="small"
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
      </TreeItem>
    </Box>
  );
}

export default FilterCategories;
