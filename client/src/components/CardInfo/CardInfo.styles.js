import styled from "styled-components";

export const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => { 
    if(props.variant === "offers")
     return "0.6fr 0.4fr 1fr 0.6fr 0.6fr 1fr 0.6fr"
    if(props.variant === "products")
    return "1.3fr 0.5fr 0.4fr 0.4fr 0.4fr 1fr 0.6fr"
    if(props.variant === "users")
    return "0.5fr 0.6fr 1.3fr 0.4fr 1.4fr 0.6fr"
  }};
  padding: 18px;
  width: 100%;
  margin: 2px;
  background-color: white;
  border-radius: 8px;
 
  & div {
    display: flex;
    align-items: center;
    & img {
      width: 50px;
      height: 40px;
    }
  }
`;

export const ButtonEdit = styled.button`
  margin: 0 5px;
  padding: 4px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const ButtonDelete = styled.button`
  margin: 0 5px;
  padding: 4px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;

export const UserName = styled.div`
  display: flex;
  & div {
    background-color: red;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
`;
