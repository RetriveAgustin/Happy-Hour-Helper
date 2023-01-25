import styled from "styled-components";

export const FooterStyles = styled.div`
  background-color: #52373c;
  height: 100%;
  width: 100%;
  margin-top: 20px;
`;

export const Container = styled.div`
  display: grid;
  max-width: 1200px;
  margin: auto;
  grid-template-columns: repeat(4, 1fr);
  padding: 30px 20px;
  align-items: flex-start;
  gap: 80px;
`;

export const HappyHourHelper = styled.div`
  /* background-color: yellow; */
  & p:first-child {
    margin: 0;
    /* padding: 17px 0px; */
    font-size: 1rem;
  }
  padding-bottom: 10px;
  color: #eeecdf;
  width: 360px;
  text-align: start;
  font-size: 12px;
  & p {
    padding-bottom: 10px;
  }
  & p:last-child {
    padding-top: 22px;
  }
`;

export const Contact = styled.div`
  & p:first-child {
    font-size: 1rem;
    padding-bottom: 6px;
  }
  /* background: blue; */
  color: #eeecdf;
  text-align: start;
  font-size: 12px;
  & a {
    display: flex;
    /* background-color: red; */
    padding: 5px 0;
    & img {
      width: 20px;
      padding-right: 10px;
    }
  }
`;

export const Navigation = styled.div`
  /* background-color: salmon; */
  color: #eeecdf;
  text-align: start;
  & p {
    padding-bottom: 5px;
  }
  & ul {
    font-size: 19px;
    padding: 0;
    & li {
      padding: 8px 0px;
      font-size: 12px;
    }
  }
`;


export const PaymentMethods = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: start;
  & p {
    color: #eeecdf;
    font-size: 1rem;
    padding-bottom: 22px;
    padding-right: 30px;
  }
  & img {
    width: 200px;
  }
`;
