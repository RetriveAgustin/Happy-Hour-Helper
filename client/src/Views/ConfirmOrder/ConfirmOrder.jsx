import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { DivConf, Title, ItemsCart } from "../ConfirmOrder/ConfirmOrder.styled";
import { Button } from "../Cart/Cart";
import {
  createOrder,
  getAddress,
  getAllCategories,
  getAllProducts,
} from "../../redux/actions/actions";

export default function ConfirmOrder() {
  const stateProducts = useSelector((state) => state.products);
  //debe ser del state del carrito, este ↑ es solo para que me muestre algunos datos a modo random
  const stateAddresses = useSelector((state) => state.addresses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAddress());
    console.log(stateAddresses);
  }, [dispatch]);

  const handleFinish = () => {
    dispatch(createOrder(stateProducts));
  };

  const address = [
    {
      name: "callecita",
      number: "1233333",
      description: "esquina",
    },
    {
      name: "calleeeee",
      number: "12222222222",
      description: "mitad de cuadra",
    },
  ];

  return (
    <DivConf>
      <Title> Confirm </Title>
      <ItemsCart>
        {stateProducts && stateProducts?.map((e) => <p> {e.name}</p>)}
      </ItemsCart>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginInline: "10px",
          marginBottom: "50px",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <h4>Payment method: </h4>
          <select>
            <option>Mercado Pago</option>
            <option>Credit Card</option>
            <option>Cash</option>
          </select>
          <p> + Agregar metodo de pago</p>
        </div>

        <div>
          <h4>Delivery Adress</h4>
          <select>
            {address &&
              address.map((e) => {
                return (
                  <option>
                    {e.name} {e.number}
                  </option>
                );
              })}
          </select>
          <p> + Agregar metodo de pago</p>
        </div>
      </div>
      <Button onClick={handleFinish}>Finish</Button>
    </DivConf>
  );
}
