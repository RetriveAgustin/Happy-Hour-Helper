import React from "react";
import styles from './LowerFilters.module.css'
import Card from "../../../components/Card/Card";

const LowerFilters = ({ LowFilters }) => {
    
    return <div className={styles.wrapper}>
        {LowFilters.map(prd => (
            <Card product={prd} />
        ))}
    </div>;
};

export default LowerFilters;
