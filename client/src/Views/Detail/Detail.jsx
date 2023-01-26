import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import {
  Wrapper,
  Half1,
  Half2,
  Name,
  Image,
  SizeButton,
  ButtonsDiv,
} from "./Detail.styles";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductId } from '../../redux/actions/actions'

const AddToCart = styled(Button)({
  textTransform: "none",
  fontSize: 16,
});

const Detail = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getProductId(id))
  },[dispatch, id])
  const product = useSelector((state) => state.detail);

  return (
    <>
      <Header />
      <Wrapper>
        {product && product.map(prd => {
          return (
            <>
            <Half1>
            <Image src={prd.img} />
          </Half1>
          <Half2>
            <Name>{prd.name}</Name>
            <div style={{ padding: "3px" }}>
              <SizeButton style={{ border: "solid 1px #52373c" }}>
                {prd.capacity} ml
              </SizeButton>
            </div>
            <h1>$ {prd.price}</h1>
            <ButtonsDiv>
              <AddToCart
                variant="contained"
                startIcon={<ShoppingCartOutlinedIcon />}
                onClick={undefined}
                color='secondary'
                sx={{
                  backgroundColor:"#52373c",
                  width: 170,
                }}
              >
                Agregar
              </AddToCart>
              <Link to='/cart' style={{textDecoration:'none'}}>
              <Button 
                  variant="outlined" color="secondary"
                  sx={{textTransform:"none", color: "#52373c", border: '1px solid #52373c', width: 170}}>
                Comprar Ahora
              </Button>
              </Link>
            </ButtonsDiv>
          </Half2>
          </>
          )       
        })}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Detail;
