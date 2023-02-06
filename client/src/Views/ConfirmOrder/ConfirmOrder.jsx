import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  DivConf,
  Title,
  ItemsCart,
  OrderCont,
  Wrapper,
} from "./ConfirmOrder.styled";
import { Button } from "../../Views/Cart/Cart.styles";
import { getAllProducts } from "../../redux/actions/actions";
import { useAuth } from "../../context/authContext";
import { render } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
export default function ConfirmOrder() {
  const stateCart = useSelector((state) => state.root.cart);
  const stateTotal = useSelector((state) => state.root.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userCredentials, loading } = useAuth();

  const [success, setSuccess] = useState("");

  const [address, setAddress] = useState([]);
  const [payment, setPayment] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [options, setOptions] = useState({
    address: "",
    payment: "",
  });

  useEffect(() => {
    dispatch(getAllProducts());
    if (!address[0] && userCredentials) {
      fetch("http://localhost:3001/address/getAddress")
        .then((r) => r.json())
        .then((r) => {
          let data = r.filter((e) => e.user_id === userCredentials.uid);
          setAddress(data);
        });
    }
    if (!payment[0] && userCredentials) {
      fetch("http://localhost:3001/payment-methods/getPayment")
        .then((r) => r.json())
        .then((r) => {
          const data = r.filter((e) => e.user_id === userCredentials.uid);
          setPayment(data);
        });
    }
  }, [dispatch, loading]);

  const handleFinish = () => {
    try {
      var day = new Date();
      var today = day.toLocaleString();
      const obj = {
        date: day,
        delivered: false,
        canceled: false,
        adress: options.address,
        payment_method: options.payment,
        user_id: userCredentials.uid,
        products: stateCart,
        //total: stateTotal
      };
      axios.post("http://localhost:3001/orders/postOrder", obj).then((r) => {
        setSuccess(r.data);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      });
    } catch (error) {}
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === "payment") {
      const currentArray = payment;
      if (!currentArray.includes(value)) {
        currentArray.push(value);
      } else return;
    }
    setOptions({ ...options, [name]: value });
    if (!disabled) setDisabled(true);
  };

  return (
    <OrderCont>
      <Wrapper>
        <Title> Confirm </Title>
        {success[0] ? <label>{success}</label> : null}

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
            <select name="payment" onChange={handleChange}>
              <option disabled={disabled}>Seleccionar método de pago</option>
              {payment[0] ? (
                payment.map((e) => {
                  return (
                    <option key={e.name} value={e.id} name="payment">
                      CARD {e.name}, ending in ************
                      {e.code.toString().slice(-4)}
                    </option>
                  );
                })
              ) : (
                <option>Cargando...</option>
              )}
            </select>
            <Link to={"/add-payment-method"} style={{ color: "#000" }}>
              <p onClick={handleChange}> + Agregar metodo de pago</p>
            </Link>
          </div>
          <div>
            <h4>Delivery Adress</h4>
            <select name="address" onChange={handleChange}>
              <option disabled={disabled}>Seleccionar dirección</option>
              {address[0] ? (
                address.map((e) => {
                  return (
                    <option key={e.name} value={e.id} name={"address"}>
                      {e.name} {e.number}
                    </option>
                  );
                })
              ) : (
                <option>Cargando...</option>
              )}
            </select>
            <Link to={"/add-address"} style={{ color: "#000" }}>
              <p> + Agregar dirección</p>
            </Link>
          </div>
        </div>
        <ItemsCart>
          <h3>Your Order:</h3>
          <ul>
            {stateCart &&
              stateCart?.map((e) => (
                <li key={e.name}>
                  • {e.name}.......${e.price}
                </li>
              ))}
          </ul>
        </ItemsCart>
        <h3>Total: ${}</h3>
        <Button onClick={handleFinish}>Finish</Button>
        {success[0] && (
          <label>Se te redireccionará a home en unos segundos...</label>
        )}
      </Wrapper>
    </OrderCont>
  );
}
