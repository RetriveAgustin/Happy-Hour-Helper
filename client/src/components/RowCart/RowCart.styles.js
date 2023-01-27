import styled, { keyframes } from "styled-components";

export const Image = styled.img`
  width: 80px;
  margin: 0;
  margin-bottom: 0;
  align-self: center;
`;
export const SubAdd = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
`;
export const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;
export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  margin: 5px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #171717;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;
