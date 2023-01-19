import React from "react";
import {
  FooterStyles,
  Container,
  HappyHourHelper,
  PaymentMethods,
  Contact,
  Navigation,
} from "./index.styles";
import mediosDePago from "../../assets/pagosAceptados.png";

export const Footer = () => {
  return (
    <FooterStyles>
      <Container>
        <HappyHourHelper>
          <p>HAPPY HOUR HELPER</p>
          <p>
            Somos una Ecommerce dedicado a la comercialización de bebidas
            nacionales e importadas con y sin alcohol, contamos con una una
            vasta trayectoria en el mercado local, tiempo en el cual hemos
            logrado el apoyo de las bodegas más importantes de la Argentina.
          </p>{" "}
          <br />
          <p>Beber con moderación. Prohibida su venta a menores de 18 años.</p>
        </HappyHourHelper>

        <Contact>
          <p>CONTACTO</p>
          <a href="mailto: example@example.com">
            <img src="https://icongr.am/fontawesome/phone.svg?size=128&color=ffffff" alt="" />
            <p>+541116599785</p>
          </a>
          <a href="mailto: example@example.com">
            <img src="https://icongr.am/fontawesome/envelope-o.svg?size=128&color=ffffff" alt="" />
            <p>info@happyhourhelper.com</p>
          </a>
          <a href="mailto: example@example.com">
            <img src="https://icongr.am/fontawesome/facebook-square.svg?size=128&color=ffffff" alt="" />
            <p>Facebook</p>
          </a>
          <a href="mailto: example@example.com">
            <img
              src="https://icongr.am/fontawesome/whatsapp.svg?size=128&color=ffffff"
              alt=""
            />
            <p>Whatsapp</p>
          </a>
        </Contact>

        <Navigation>
          <p>NAVEGACIÓN</p>
          <ul>
            <li>
              <a href="###">Nosotros</a>
            </li>
            <li>
              <a href="###">Productos</a>
            </li>
            <li>
              <a href="###">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="###">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="###">Preguntas frecuentes</a>
            </li>
          </ul>
        </Navigation>

        <PaymentMethods>
          <p>MEDIOS DE PAGO</p>
          <img src={mediosDePago} alt="" />
        </PaymentMethods>
      </Container>
    </FooterStyles>
  );
};
