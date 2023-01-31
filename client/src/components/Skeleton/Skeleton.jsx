import React from 'react'
import Header from "../../components/Header/Header";

function Skeleton({view}) {
  return (
    <>
        <Header />
        {view}
    </>
  )
}

export default Skeleton