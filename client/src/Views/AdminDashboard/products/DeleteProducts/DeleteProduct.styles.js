import styled from "styled-components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 0.5rem;
`;

const ModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  text-align: center;
  gap: 1rem 0;
`;

const WarningTitle = styled.div`
  background-color: red;
  width: 100%;
  text-align: center;
  color: white;
  padding: 0.5rem 0;
  border-radius: 5px 5px 0 0;
`;

export { ButtonContainer, ModalContainer, WarningTitle };
