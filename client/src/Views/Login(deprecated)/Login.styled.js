import styled, { keyframes } from "styled-components";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Principal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0000004c;
  height: 100vh;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: solid #171717 2px;
  margin: 80px;
  padding-bottom: 20px;
  background-color: #52373c;
  width: 500px;
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: 0px 0px 27px 12px #7e7877;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 25rem;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
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

export const Title = styled.h2`
  background-color: #2b1c1f;
  margin: 0;
  padding: 0.7rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  color: white;
`;

//   background-color: #2b1c1f;
//   margin: 0;
//   padding: 0.7rem;
//   border-top-right-radius: 10px;
//   font-family: Arial, Helvetica, sans-serif;
//   font-weight: 500;
//   color: white;
// `;

export const Label = styled.label`
  margin: 0.7rem;
  font-size: 16px;
  color: #eeecdf;
`;

export const Question = styled.b`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
