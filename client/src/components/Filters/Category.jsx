import React from "react";
import { useSelector } from "react-redux";
import { TreeItem } from "@mui/lab";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Box } from "@mui/system";

function Category({ category, setFilter }) {
  const subCategories = useSelector((state) => state.subCategories);
  const handleFilter = (e) => {
    console.log("valor de filterbycategory", e.target.value);
    setFilter(e.target.value);
  };

  return (
    <Box>
      <TreeItem
        nodeId={category.id}
        label={category.name}
        sx={{ color: "white" }}
      >
        <FilterListIcon />
        <TreeItem
          nodeId={category.id.concat("subCat")}
          label="Subcategoría"
          sx={{ color: "white" }}
        >
          {subCategories &&
            subCategories.map((subCat) => {
              if (subCat.Category.id === category.id) {
                return <TreeItem nodeId={subCat.id} label={subCat.name} />;
              }
            })}
        </TreeItem>
      </TreeItem>
    </Box>
  );
}

export default Category;
