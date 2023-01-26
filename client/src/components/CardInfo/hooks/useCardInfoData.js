import React from 'react'
import {
  InfoContainer,
  ButtonEdit,
  ButtonDelete,
} from "../CardInfo.styles";

const RowProducts = ({ props }) => {
  return (
    <InfoContainer variant="products">
      <div>
        <img src={props.img} alt="" />
        <p>{`${props.name}`}</p>
      </div>
      <p>{`${props.price}`}</p>
      <p>{`${props.capacity}`}</p>
      <p>{`${props.stock}`}</p>
      <p>{`${props.minimum_amount_for_bulk}`}</p>
      <p>{`${props.id}`}</p>
      <div>
        <ButtonEdit>Edit</ButtonEdit>
        <ButtonDelete>Delete</ButtonDelete>
      </div>
    </InfoContainer>
  )
}

const RowOffers = ({ props }) => {
  return (
    <InfoContainer variant="offers">
      <div>
        <img src={props.img} alt="" />
        <p>{`${props.name}`}</p>
      </div>
      <p>{`${props.price}`}</p>
      <p>{`${props.description}`}</p>
      <p>{`${props.initial_date}`}</p>
      <p>{`${props.expiration_date}`}</p>
      <p>{`${props.id}`}</p>
      <div>
        <ButtonEdit>Edit</ButtonEdit>
        <ButtonDelete>Delete</ButtonDelete>
      </div>
    </InfoContainer>
  )
}

const RowUsers = ({ props }) => {
  return (
    <InfoContainer variant="users">
      <p>{`${props.name}`}</p>
      <p>{`${props.last_name}`}</p>
      <p>{`${props.email}`}</p>
      <p>{`${props.created_in_google}`}</p>
      <p>{`${props.id}`}</p>
      <div>
        <ButtonEdit>Edit</ButtonEdit>
        <ButtonDelete>Delete</ButtonDelete>
      </div>
    </InfoContainer>
  )
}

export const useCardInfoData = (type) => {

  const TYPE_OF_ROW_INFO_CONTAINER = {
    "offers": RowOffers,
    "users": RowUsers,
    "products": RowProducts
  }

  const RowItemContainer = TYPE_OF_ROW_INFO_CONTAINER[type]

  return { RowItemContainer }
}
