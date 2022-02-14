import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 1.3rem;
  text-shadow: 2px 3px 5px rgba(0,0,0,0.4);
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid #333;
`;

export const Input = styled.input`
  flex: 8;
  border: none;
  outline: none;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;