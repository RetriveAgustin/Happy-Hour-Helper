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

  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories)
  // Se filtran los productos de acuerdo al ID de categoría que se está recibiendo como props
  const currentFilter = products.filter(prod => prod.Categories[0].id === categoryId)

  
  // Se asigna el nombre de la sección de acuerdo al prop ID

  let currentName = ""

  if (categoryId === "dceb1421-ddc6-4018-bb49-08e35aa90ac4") {
    currentName = "Cerveza"
  } else if (categoryId === "f5d839ac-0138-489a-ba27-f8f177584ff3") {
    currentName = "Vinos"
  } else if (categoryId === "b15c0bc4-dc94-4526-8aab-257c144c492b") {
    currentName = "Destilados"
  } else if (categoryId === "d0c6027f-a848-4109-af92-895a2a4d0314") {
    currentName = "Aperitivos"
  } else if (categoryId === "a4f42852-fb93-49e4-81c6-e6e6cffff807") {
    currentName = "Acompañamientos"
  }
  
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