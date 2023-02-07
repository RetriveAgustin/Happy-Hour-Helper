import React, { useState } from 'react'
import styles from './FilteredCategory.module.css'
import { useSelector } from 'react-redux'
import Card from '../../../components/Card/Card'

function FilteredCategory({ categoryId }) {

  // Estado que dicta el número de elementos por "página"
  const [perPage, setPerPage] = useState(8)

  const showMore = () => {
    setPerPage(perPage + 4)
  }

  const products = useSelector(state => state.root.products)
  const categories = useSelector(state => state.root.categories)

  // Se filtran los productos de acuerdo al ID de categoría que se está recibiendo como props
  const currentFilter = products.filter(prod => prod.Categories[0].id === categoryId)
  
  // Se asigna el nombre de la sección de acuerdo al prop ID

  let currentName = "";

  currentName = categories && categories.find(cat => cat.id === categoryId).name

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{currentName}</h1>
    <div className={styles.wrapper}>
      {currentFilter && currentFilter.slice(0, perPage).map(prod => { // Se hace slice de los índices presentes, se van aumentando con el onClick en el botón
        return (
          <Card product={prod}/>
        )
      })}
    </div>
    <button className={styles.btn} onClick={showMore}>Mostrar más</button>
    </div>
  )
}
  
export default FilteredCategory