import React from 'react';
import styles from "./GeneralCategories.module.css";

function GeneralCategories({categories}) {
  return (
    <div className={styles.categoryContainer} style={{marginTop: '5.9rem'}}>
    {
      categories && categories.map(category => {
        return (<h2>{category.name}</h2>)
      })
    }
    </div>
  )
}

export default GeneralCategories
