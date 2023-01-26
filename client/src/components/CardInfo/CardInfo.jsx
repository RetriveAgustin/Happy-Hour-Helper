import React from "react";

import { useCardInfoTitle } from './hooks/useCardInfoTitle'
import { useCardInfoData } from './hooks/useCardInfoData'

function CardInfo({ props, type = "offers" }) {

  const { RowTitleContainer } = useCardInfoTitle(type)
  const { RowItemContainer } = useCardInfoData(type)
  
  return (
    <>
      {!props && <RowTitleContainer />}
      {props && <RowItemContainer props={props} />}
    </>
  )
}

export default CardInfo;