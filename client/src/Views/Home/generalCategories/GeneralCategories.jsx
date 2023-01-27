import React from 'react';
import styles from "./GeneralCategories.module.css";
import Carrousel from './Carrousel';

function GeneralCategories({categories, products}) {
  products.reverse();

  return (
    <div className={styles.categoryContainer} style={{marginTop: '5.9rem'}}>
    {
      categories && categories.map(category => {
        return (
        <div>
          <h2>{category.name}</h2>
          <Carrousel category={category} products={products} />
        </div>)
      })
    }
    </div>
  )
}

export default GeneralCategories
