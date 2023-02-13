import React from "react";
import style from "./CartModal.module.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import cartpic from "./cart.svg";
import accounting from "accounting";
import DeleteIcon from "@mui/icons-material/Delete";
import { addToCart, removeFromCart } from "../../redux/actions/actions";
import PayButton from "../../Views/Cart/PayButton";

const CartModal = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.root.cart);
  const totalPrice = cart.reduce(
    (acc, item) => item.price * item.amount + acc,
    0
  );
  const user = useSelector((state) => state.user.userLogged);

  return (
    <div className={style.box}>
      <h2 className={style.cartName}>Tu Carrito</h2>
      <IconButton
        sx={{
          position: "absolute",
          top: "1.6rem",
          right: "1.4rem",
          color: "white",
        }}
      >
        <DoubleArrowIcon onClick={closeSidebar} />
      </IconButton>
      <div className={style.cartBox}>
        {!cart.length ? (
          <div className={style.empty}>
            <img src={cartpic} width="100px" />
            <h3 style={{ color: "white", margin: "1rem" }}>
              Tu carrito está vacío
            </h3>
          </div>
        ) : (
          cart.map((el) => {
            return (
              <div className={style.prdBox}>
                <div className={style.imgBox}>
                  <img className={style.cartImg} src={el.img} />
                </div>
                <div className={style.prdInfo}>
                  <p className={style.prdName}>{el.name}</p>
                  <p className={style.size}>{el.capacity}ml</p>
                  <p className={style.price}>
                    {accounting.formatMoney(el.price)}
                  </p>
                </div>
                <div className={style.delQuant}>
                  <IconButton>
                    <DeleteIcon
                      onClick={() => dispatch(removeFromCart(el.name))}
                    />
                  </IconButton>
                  <div className={style.quantBox}>
                    <button
                      className={style.quantBtn}
                      onClick={() =>
                        el.amount > 1
                          ? dispatch(addToCart({ ...el, amount: -1 }))
                          : null
                      }
                    >
                      -
                    </button>
                    <p className={style.quant}>{el.amount}</p>
                    <button
                      className={style.quantBtn}
                      onClick={() => dispatch(addToCart({ ...el, amount: 1 }))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {cart.length ? (
        <div className={style.checkout}>
          <div className={style.totalBox}>
            <h3 className={style.total}>Total a pagar</h3>
            <div className={style.totalSum}>
              <p className={style.p}>Total de los productos:</p>
              <p className={style.sum}>{accounting.formatMoney(totalPrice)}</p>
            </div>
          </div>
          <div className={style.payLogin}>
            {user ? (
              <PayButton productItem={cart} />
            ) : (
              <div className={style.login}>Para comprar debes ingresar</div>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CartModal;
