import React, { useEffect, useState } from "react";
import styles from './LowerFilters.module.css'
import { useSelector } from "react-redux";
import Card from "../../../components/Card/Card";

const LowerFilters = () => {
      
    const products = useSelector(state => state.products)
    const filteredProd = useSelector(state => state.filteredProducts)
    
    return <div className={styles.wrapper}>
        {filteredProd.map(prd => (
            <Card product={prd} />
        ))}
    </div>;
};

export default LowerFilters;
