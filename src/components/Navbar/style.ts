import { findByLabelText } from "@testing-library/react";
import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.div`
  height: 60px;
  background-color: #000;
  color: #fff;
  ${mobile({ height: "50px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" })}
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e2e2e2;
  ${mobile({ display: "none" })}

  input {
  width: 470px;
  font-size: 16px;
  padding: 0.20rem;
  outline: none;
  border: none;
}
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
  h1 {
    font-weight: bold;
    ${mobile({ fontSize: "24px" })}
  }
`;

export const Cart = styled.div`
  ${mobile({ position: "absolute", left: "1rem", fontSize: "1rem", cursor: "pointer" })}
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

export const MenuItem = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;


