import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 30%;
  padding: 25px;
  background-color: #333;
  color: #fff;
  border-radius: 8px;
  ${mobile({ width: "80%"})}
`;

export const Logo = styled.h1`
  font-size: 40px;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const Input = styled.input`
  flex: 1;
  min-width: 50%;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 3px solid #000;
  outline: none;
`;

export const Agreement = styled.span`
  font-size: 13px;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  width: 50%;
  padding: 10px;
  border: 2px solid #333;
  background-color: #e2e2e2;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;

  &:hover {
    background-color: #000;
    color: #fff;
    transition: all 0.4s ease;
  }
`;



