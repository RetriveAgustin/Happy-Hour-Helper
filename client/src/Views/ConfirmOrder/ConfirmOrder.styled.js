import styled from "styled-components";

export const DivConf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid blue;
`;

export const ItemsCart = styled.div`
  margin: 10px;
`;
export const OrderCont = styled.div`
  margin-left: 300px;
  margin-right: 300px;
`;

export const Title = styled.h2`
  background-color: #2b1c1f;
  padding: 0.7rem;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
`;
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: solid #171717 2px;
  margin: 80px;
  padding-bottom: 20px;
  background-color: #b5848d;
  width: 500px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 27px 12px #7e7877;
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  margin: 5px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #171717;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
  }
`;

export const ButtonDes = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  margin: 5px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #808080;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;
