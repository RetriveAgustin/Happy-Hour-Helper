import React from 'react'
import {
  InfoContainer,
} from "../CardInfo.styles";

const TitleOffers = () => {
  return (
    <InfoContainer variant="offers">
      <p>{`Name`}</p>
      <p>{`Price`}</p>
      <p>{`Description`}</p>
      <p>{`Initial date`}</p>
      <p>{`Expiration date`}</p>
      <p>{`ID`}</p>
    </InfoContainer>
  )
}
const TitleUsers = () => {
  return (
    <InfoContainer variant="users">
      <p>{`Name`}</p>
      <p>{`Last Name`}</p>
      <p>{`E-mail`}</p>
      <p>{`Google`}</p>
      <p>{`ID`}</p>
      <p>{``}</p>
    </InfoContainer>
  )
}
const TitleProducts = () => {
  return (
    <InfoContainer variant="products">
      <p>{`Name`}</p>
      <p>{`Price`}</p>
      <p>{`Capacity`}</p>
      <p>{`Stock`}</p>
      <p>{`Expiration date`}</p>
      <p>{`ID`}</p>
    </InfoContainer>
  )
}

export const useCardInfoTitle = (type) => {
  const TYPE_OF_TITLE_INFO_CONTAINER = {
    "offers": TitleOffers,
    "users": TitleUsers,
    "products": TitleProducts
  }

  const RowTitleContainer = TYPE_OF_TITLE_INFO_CONTAINER[type]

  return { RowTitleContainer }
}
