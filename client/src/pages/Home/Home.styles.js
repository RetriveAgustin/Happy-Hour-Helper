import styled from "styled-components";

export const Background = styled.div`
  background-color: #151515;
  background-size: 100%
  width: 100%;
  height: 100vh;
`;

export const H1 = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
`;

export const CategorySection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin: 16px 0;
`;

export const Category = styled.div`
  width: 100%;
  margin-bottom: 50px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 12px;
  cursor: pointer;
`;

export const CategoryContainer = styled.div`
  display: flex;
flex-direction: column;
`;

export const P = styled.h2`
    color: white;
  display: flex;
  justify-content: center;
`;

export const SubCategoryContainer = styled.div`
  width: 100%;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  max-height: ${props => (props.show ? "200px" : "0")};
`;

export const SubCategory = styled.div`
  width: 100%;
  margin-bottom: 50px;
  color: white;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 12px;
`;