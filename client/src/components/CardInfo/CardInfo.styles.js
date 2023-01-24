import styled from "styled-components";

export const InfoContainer = styled.div`
    background: rgb(255, 255, 255);
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 62%,
      rgba(242, 243, 244, 1) 100%
    );
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;

    & p {
      margin: 0.3rem 0;
      color: #6d6d6d;
    }
  `;