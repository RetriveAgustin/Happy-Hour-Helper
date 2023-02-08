import React, { useEffect, useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import {
  Wrapper,
  Half1,
  Half2,
  Name,
  Image,
  SizeButton,
  ButtonsDiv,
  ImgBox,
  PriceTag,
} from "./Detail.styles";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from "../../redux/actions/actions";
import { addToCart } from "../../redux/actions/actions";
import { notify } from "../../components/Card/Card";
import { ToastContainer } from 'react-toastify';
import accounting from "accounting";

const AddToCart = styled(Button)({
  textTransform: "none",
  fontSize: 16,
});

const Detail = () => {
  const dispatch = useDispatch();

  const { id } = useParams();



  useEffect(() => {
    dispatch(getProductId(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.root.detail);

  const [amount, setAmount] = useState(1)



  return (
    <>
      <Wrapper>
        {product &&
          product.map((prd) => {
            const handleAdd = (e) => {
              if (!e) {
                return;
              }
              dispatch(addToCart({...prd, amount}));
              notify()
            };
            return (
              <>
                <Half1>
                  <ImgBox>
                  <Image src={prd.img} />
                  </ImgBox>
                </Half1>
                <Half2>
                  <Name>{prd.name}</Name>
                  <div style={{ padding: "3px" }}>
                    <SizeButton style={{ border: "solid 1px #52373c", padding: '0.3rem 0.5rem' }}>
                      {prd.capacity} ml
                    </SizeButton>
                  </div>
                  <PriceTag>{accounting.formatMoney(prd.price)}</PriceTag>
                  <ButtonsDiv>
                    <AddToCart
                      variant="contained"
                      startIcon={<ShoppingCartOutlinedIcon />}
                      onClick={(e) => handleAdd(e)}
                      color="secondary"
                      sx={{
                        backgroundColor: "#52373c",
                        width: 170,
                      }}
                    >
                      Agregar
                    </AddToCart>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        sx={{
                          textTransform: "none",
                          color: "#52373c",
                          border: "1px solid #52373c",
                          width: 170,
                        }}
                      >
                        Comprar Ahora
                      </Button>
                    </Link>
                  </ButtonsDiv>
                </Half2>
              </>
            );
          })}
      <ToastContainer /> 
      </Wrapper>
      <Footer />
    </>
  );
};

export default Detail;
