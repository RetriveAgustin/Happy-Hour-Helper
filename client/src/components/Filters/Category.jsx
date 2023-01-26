import React from 'react';
import { useSelector } from 'react-redux';
import {
  TreeItem
} from "@mui/lab";

function Category({category}) {

  const subCategories = useSelector((state) => state.subCategories);

  return (
    <TreeItem nodeId={category.id} label={category.name} sx={{color: 'white'}}>
      {
        subCategories && subCategories.map(subCat => {
            
          if(subCat.Category.id === category.id) {
            return <TreeItem nodeId={subCat.id} label={subCat.name} />
          }
        })
      }
    </TreeItem>
  )
}

export default Category
