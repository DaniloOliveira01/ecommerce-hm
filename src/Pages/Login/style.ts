import styled from "styled-components";
import { mobile } from "../../styles/Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 20%;
  padding: 25px;
  background-color: rgba(0,0,0,0.7);
  color: #fff;
  border-radius: 8px;
  ${mobile({ width: "75%"})}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #000;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 50%;
  font-size: 1rem;
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 3px solid #000;
  outline: none;

  &::placeholder {
    color: #333;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const Link = styled.a`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  text-decoration: none;
  color: #e2e2e2;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: yellow;
  }
`;

export const Button = styled.button`
  width: 40%;
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