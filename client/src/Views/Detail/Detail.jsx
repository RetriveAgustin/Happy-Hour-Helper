import React from "react";
import Header from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Wine from "./../../assets/winee.png";
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
import { Link } from "react-router-dom";

const AddToCart = styled(Button)({
  textTransform: "none",
  fontSize: 16,
});

const Detail = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Half1>
          <Image src={Wine} />
        </Half1>
        <Half2>
          <Name>Vino LGBTI+</Name>
          <div style={{ padding: "3px" }}>
            <SizeButton style={{ border: "solid 2px #52373c" }}>
              750ml
            </SizeButton>
            <SizeButton>350ml</SizeButton>
            <SizeButton>1000ml</SizeButton>
            <p style={{color:'grey'}}>Selecciona el tamaño de la botella</p>
          </div>
          <h1>$41.900</h1>
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
      </Wrapper>
      <Footer />
    </>
  );
};

export default Detail;
